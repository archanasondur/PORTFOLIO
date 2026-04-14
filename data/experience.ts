export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  stack?: string[];
  bullets: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: "genmark",
    role: "Software Engineering Intern",
    company: "Genmark AI",
    location: "San Francisco, CA",
    period: "June – Aug 2025",
    stack: ["React", "TypeScript", "Flask", "Python", "Firebase"],
    bullets: [
      "Shipped auth, profile management, and media upload features end-to-end",
      "Built async job processing for media uploads using background workers",
      "Prototyped a Unified Inbox during internal hackathon; introduced GitHub Actions CI",
    ],
  },
  {
    id: "viit-research",
    role: "Research Intern",
    company: "Vishwakarma Institute of Information Technology",
    location: "Pune, India",
    period: "Aug – Dec 2022",
    bullets: [
      "Investigated crash consistency techniques in file systems",
      "Co-authored a Springer publication on crash consistency (July 2023)",
    ],
  },
];
