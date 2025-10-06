import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = localFont({
  src: [
    {
      path: "../public/fonts/FiraCode-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FiraCode-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FiraCode-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fira-code",
  display: "swap",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Neucon Labs | AI/ML & Software Development | Australia",
  description: "Leading AI/ML and software development agency in Australia. Expert SaaS solutions, full-stack development, and intelligent automation.",
  keywords: ["AI development", "ML development", "software development", "SaaS", "Australia", "full-stack", "automation"],
  authors: [{ name: "Neucon Labs" }],
  creator: "Neucon Labs",
  metadataBase: new URL("https://neuconlabs.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://neuconlabs.com",
    title: "Neucon Labs | AI/ML & Software Development",
    description: "Leading AI/ML and software development agency in Australia.",
    siteName: "Neucon Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neucon Labs | AI/ML & Software Development",
    description: "Leading AI/ML and software development agency in Australia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
