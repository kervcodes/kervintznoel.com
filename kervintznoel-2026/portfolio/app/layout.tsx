// src/app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kervintz Noel — Software Engineer",
    template: "%s | Kervintz Noel",
  },
  description:
    "Software engineer specializing in SRE, mobile apps, and full-stack development. Building Tidywaro and HaitiBillboard.",
  openGraph: {
    type: "website",
    url: "https://kervintznoel.com",
    siteName: "Kervintz Noel",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}