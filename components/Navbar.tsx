"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
      if (Math.abs(currentY - lastY) > 5) {
        setHidden(currentY > lastY && currentY > 80);
        lastY = currentY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "bg-canvas/90 backdrop-blur-sm border-b border-line"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / identity */}
        <a
          href="#hero"
          className="font-mono text-sm text-slate-300 hover:text-slate-100 transition-colors"
        >
          Archana Sondur
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-slate-500 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
