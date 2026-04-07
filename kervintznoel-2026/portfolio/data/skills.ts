// src/data/skills.ts

export interface SkillBar {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  id: string;
  label: string;
  color: "emerald" | "blue" | "subtle";
  skills: SkillBar[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    color: "emerald",
    skills: [
      { name: "React / Next.js",  level: 92 },
      { name: "TypeScript",       level: 88 },
      { name: "React Native",     level: 80 },
      { name: "Tailwind CSS",     level: 90 },
    ],
  },
  {
    id: "backend",
    label: "Backend & Data",
    color: "blue",
    skills: [
      { name: "Node.js",     level: 85 },
      { name: "PostgreSQL",  level: 78 },
      { name: "Supabase",    level: 82 },
      { name: "Python",      level: 70 },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    color: "blue",
    skills: [
      { name: "AWS",             level: 72 },
      { name: "Docker",          level: 75 },
      { name: "GitHub Actions",  level: 80 },
      { name: "Linux / Bash",    level: 85 },
    ],
  },
];

export type CertStatus = "earned" | "progress";

export interface Cert {
  id: string;
  title: string;
  issuer: string;
  iconLabel: string;
  iconVariant: "emerald" | "amber" | "blue";
  status: CertStatus;
}

export const certs: Cert[] = [
  {
    id: "bu",
    title: "BS Computer Science",
    issuer: "Boston University",
    iconLabel: "BU",
    iconVariant: "emerald",
    status: "earned",
  },
  {
    id: "aws",
    title: "Solutions Architect Associate",
    issuer: "Amazon Web Services",
    iconLabel: "AWS",
    iconVariant: "amber",
    status: "progress",
  },
  
];