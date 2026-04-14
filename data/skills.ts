export interface SkillGroup {
  id: string;
  title: string;
  /** Maps to a Lucide icon name resolved in Skills.tsx */
  iconName: "Cpu" | "Server" | "Code2" | "Brain";
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "systems",
    title: "Systems & Low-Level",
    iconName: "Cpu",
    skills: [
      "C++",
      "Rust",
      "eBPF",
      "libbpf",
      "pthreads",
      "std::atomic",
      "Linux syscall interfaces",
      "CO-RE",
      "CMake",
      "clang/LLVM",
    ],
  },
  {
    id: "backend",
    title: "Backend & Infrastructure",
    iconName: "Server",
    skills: [
      "Python",
      "Flask",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Google Cloud Run",
      "GitHub Actions",
      "JWT",
      "OAuth 2.0",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Tooling",
    iconName: "Code2",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    id: "ai",
    title: "AI & Data",
    iconName: "Brain",
    skills: [
      "Groq",
      "LLaMA 3.1",
      "Hugging Face Transformers",
      "scikit-learn",
      "Anthropic API",
    ],
  },
];
