export const bio = [
  {
    id: "p1",
    text: [
      { type: "plain", content: "I'm a " },
      { type: "strong", content: "Technology Associate (SRE)" },
      { type: "plain", content: " at Liberty Mutual in Greater Boston, with a BS in Computer Science from BU and over " },
      { type: "strong", content: "7 years" },
      { type: "plain", content: " building and breaking things in production." },
    ],
  },
  {
    id: "p2",
    text: [
      { type: "plain", content: "Outside of work I'm a " },
      { type: "strong", content: "dad of two young boys" },
      { type: "plain", content: ", an indie product builder, and someone who genuinely believes the best engineers can explain a P0 incident to a business stakeholder " },
      { type: "em", content: "and" },
      { type: "plain", content: " ship a mobile app on the weekends." },
    ],
  },
];

export const values = [
  {
    id: "v1",
    title: "Reliability first.",
    body: "I don't ship things I wouldn't trust with my own data.",
  },
  {
    id: "v2",
    title: "Build in public.",
    body: "Every commit is a story. Every PR is a decision documented.",
  },
  {
    id: "v3",
    title: "Breadth with depth.",
    body: "SRE by trade, full-stack by necessity, mobile by curiosity.",
  },
  {
    id: "v4",
    title: "Shipping > perfecting.",
    body: "Done beats perfect. Then we iterate.",
  },
];

export const stack = [
  { label: "TypeScript", accent: true },
//   { label: "React Native", accent: true },
  { label: "Next.js", accent: true },
  { label: "Node.js", accent: false },
  { label: "Supabase", accent: false },
  { label: "PostgreSQL", accent: false },
  { label: "AWS", accent: false },
  { label: "Docker", accent: false },
  { label: "GitHub Actions", accent: false },
//   { label: "Expo", accent: false },
  { label: "Prisma", accent: false },
  { label: "Tailwind CSS", accent: false },
  { label: "Python", accent: false },
  { label: "Framer Motion", accent: false },
];

export const terminalData = {
  name: "Kervintz Noel",
  role: "SRE → Full-Stack → Founder",
  location: "Greater Boston, MA",
  experience: 7,
  products: ["Tidywaro", "HaitiBillboard", "opsboard"],
  learning: ["AWS SAA"],
  available: true,
};