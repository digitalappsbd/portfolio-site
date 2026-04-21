import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Abu Sufian — Senior Full Stack Developer",
  description:
    "Senior full-stack developer shipping AI-native products across web and mobile. Builder behind UnicornToolbox, AgentPress, and LiveKanvas.",
  keywords: [
    "Md Abu Sufian",
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
  authors: [{ name: "Md Abu Sufian" }],
  openGraph: {
    title: "Md Abu Sufian — Senior Full Stack Developer",
    description:
      "Building AI-native products, agent platforms, and delightful web experiences.",
    type: "website",
    url: "https://portfolio.unicorntoolbox.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Abu Sufian",
    description: "Senior Full Stack Developer · AI tools, agent platforms, Next.js, Flutter.",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m))document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
