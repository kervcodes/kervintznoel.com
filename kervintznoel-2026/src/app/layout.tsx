import "./globals.css";

export const metadata = {
  title: "Kervintz Noel — Portfolio",
  description: "Software Engineer | Support Engineer | Systems Builder",
  icons: {
    icon: "/faveicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
