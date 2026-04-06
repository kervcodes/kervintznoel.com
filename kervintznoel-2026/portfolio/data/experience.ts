// src/data/experience.ts

export type TimelineStatus = "past" | "education";

export interface TimelineItem {
  id: string;
  date: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  status: TimelineStatus;
}

export const timeline: TimelineItem[] = [
  {
    id: "liberty",
    date: "2022 — Jun 2025",
    role: "Technology Associate — SRE",
    company: "Liberty Mutual Insurance",
    description:
      "Incident response, CI/CD pipeline ownership, cross-team OKR contributions, and reliability engineering across distributed systems in a large-scale enterprise environment.",
    tags: ["SRE", "CI/CD", "Incident Response", "OKRs", "AWS"],
    status: "past",
  },
  {
    id: "prev",
    date: "2019 — 2022",
    role: "IT Engineer",
    company: "Previous Role",
    description:
      "Systems administration, network infrastructure, and internal tooling across enterprise environments.",
    tags: ["Infrastructure", "Networking", "Linux"],
    status: "past",
  },
  {
    id: "bu",
    date: "2017 — 2019",
    role: "BS Computer Science",
    company: "Boston University",
    description:
      "Core CS fundamentals, algorithms, systems programming, and software engineering principles.",
    tags: ["Algorithms", "Systems", "Software Engineering"],
    status: "education",
  },
];