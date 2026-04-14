export interface EducationEntry {
  id: string;
  degree: string;
  school: string;
  shortSchool: string;
  gpa: string;
  graduation: string;
}

export const education: EducationEntry[] = [
  {
    id: "usc",
    degree: "MS Computer Science",
    school: "University of Southern California",
    shortSchool: "USC",
    gpa: "3.65",
    graduation: "May 2026",
  },
  {
    id: "viit",
    degree: "B.Tech Computer Engineering",
    school: "Vishwakarma Institute of Information Technology",
    shortSchool: "VIIT",
    gpa: "3.8",
    graduation: "June 2023",
  },
];
