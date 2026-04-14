export interface Publication {
  id: string;
  title: string;
  venue: string;
  date: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    id: "crash-consistency",
    title: "Comparative Analysis of Crash Consistency Techniques in File Systems",
    venue: "Springer Lecture Notes in Networks and Systems 676",
    date: "July 2023",
  },
  {
    id: "smart-city",
    title: "Smart City IoT Data Management with Proactive Middleware",
    venue: "IJRITCC",
    date: "May 2023",
  },
];
