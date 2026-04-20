import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Abu Sufian Sufi — Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer shipping AI-first products across web and mobile. Builder behind UnicornToolbox, AgentPress, and LiveKanvas.",
  keywords: [
    "Md Abu Sufian Sufi",
    "Senior Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Flutter",
    "AI Engineer",
    "xAI",
    "AgentPress",
  ],
  authors: [{ name: "Md Abu Sufian Sufi" }],
  openGraph: {
    title: "Md Abu Sufian Sufi — Senior Full Stack Developer",
    description:
      "Building AI-native products, agent platforms, and delightful web experiences.",
    type: "website",
    url: "https://portfolio.unicorntoolbox.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Abu Sufian Sufi",
    description: "Senior Full Stack Developer · AI tools, agent platforms, Next.js, Flutter.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
