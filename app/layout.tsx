import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://portfolio.unicorntoolbox.com";
const GA_ID = "G-95DZ3ZB81Z";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Md Abu Sufian — Senior Full Stack Developer",
    template: "%s · Md Abu Sufian",
  },
  description:
    "Md Abu Sufian is a senior full-stack developer shipping AI-native products across web and mobile. Builder behind UnicornToolbox, AgentPress, and LiveKanvas. Open to senior and staff roles.",
  applicationName: "Md Abu Sufian — Portfolio",
  keywords: [
    "Md Abu Sufian",
    "Senior Full Stack Developer",
    "Staff Engineer",
    "AI Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Flutter",
    "LangGraph",
    "AgentPress",
    "UnicornToolbox",
    "LiveKanvas",
    "xAI",
    "Portfolio",
    "Dhaka",
  ],
  authors: [{ name: "Md Abu Sufian", url: SITE_URL }],
  creator: "Md Abu Sufian",
  publisher: "Md Abu Sufian",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "_kztLAxrDkJ6IDUuWZm6eEfQrn9saOEz9t8lAenr0WI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Md Abu Sufian",
    title: "Md Abu Sufian — Senior Full Stack Developer",
    description:
      "Building AI-native products, agent platforms, and delightful web experiences. Open to senior and staff roles.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Md Abu Sufian — Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Abu Sufian — Senior Full Stack Developer",
    description:
      "AI-native products, agent platforms, and delightful web experiences. Next.js · Python · Flutter.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m))document.documentElement.classList.add('dark');}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Abu Sufian",
  alternateName: "Sufian",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: "Senior Full Stack Developer",
  description:
    "Senior full-stack developer shipping AI-native products across web and mobile.",
  email: "mailto:sufibd2010@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  worksFor: {
    "@type": "Organization",
    name: "UnicornToolbox",
    url: "https://unicorntoolbox.com",
  },
  sameAs: [
    "https://github.com/digitalappsbd",
    "https://linkedin.com/in/hellosufi",
    "https://unicorntoolbox.com",
    "https://agents.unicorntoolbox.com",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Flutter",
    "LangGraph",
    "PostgreSQL",
    "FastAPI",
    "AI agents",
    "LLMs",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Md Abu Sufian — Portfolio",
  url: SITE_URL,
  author: { "@type": "Person", name: "Md Abu Sufian" },
  inLanguage: "en-US",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <div className="grain" aria-hidden />
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
        </Script>
      </body>
    </html>
  );
}
