import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseTime = 3000,
}: UseTypewriterOptions): string {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    // Full word typed — pause then start deleting
    if (!isDeleting && displayText === currentWord) {
      const timer = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timer);
    }

    // Fully deleted — advance to next word
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
      return;
    }

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, pauseTime]);

  return displayText;
}
