// src/data/projects.ts

export type ProjectStatus = "active" | "beta" | "building" | "shipped";

export interface Project {
  id: string;
  num: string;
  title: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
    githubLabel?: string;
  };
  featured?: boolean;
  visualLabel: string;
}

export const projects: Project[] = [
  {
    id: "tidywaro",
    num: "01",
    title: "Tidywaro",
    description:
      "An AI-powered wardrobe management app for iOS. Upload your clothes, get outfit suggestions, track what you actually wear. Freemium model with RevenueCat + Stripe subscriptions.",
    status: "beta",
    statusLabel: "Pre-TestFlight",
    tags: ["React Native", "Expo", "Supabase", "RevenueCat", "TypeScript", "Express", "OpenAI"],
    links: {
      live: undefined,
      github: undefined,
      githubLabel: "GitHub",
    },
    featured: true,
    visualLabel: "TW",
  },
  {
    id: "haitibillboard",
    num: "02",
    title: "HaitiBillboard",
    description:
      "Music analytics platform tracking Haitian artists across Spotify, YouTube, TikTok, Instagram, and SoundCloud. Node.js + PostgreSQL data pipeline with multi-platform ingestion.",
    status: "active",
    statusLabel: "Active",
    tags: ["Node.js", "PostgreSQL", "Spotify API", "YouTube API", "TikTok API"],
    links: {
      live: "https://haitibillboard.com",
      github: undefined,
    },
    featured: false,
    visualLabel: "HB",
  },
  {
    id: "opsboard",
    num: "03",
    title: "opsboard",
    description:
      "Internal SRE operations dashboard. Incident tracking, runbook management, and on-call scheduling built on Next.js + Prisma + Supabase.",
    status: "building",
    statusLabel: "Building",
    tags: ["Next.js", "Prisma", "Supabase", "TypeScript"],
    links: {
      github: undefined,
      githubLabel: "GitHub (private)",
    },
    featured: false,
    visualLabel: "OB",
  },
];