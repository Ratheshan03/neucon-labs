import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neucon Labs | AI/ML & Software Development | Australia",
  description: "Leading AI/ML and software development agency in Australia. Expert SaaS solutions, full-stack development, and intelligent automation.",
  keywords: ["AI development", "ML development", "software development", "SaaS", "Australia", "full-stack", "automation"],
  authors: [{ name: "Neucon Labs" }],
  creator: "Neucon Labs",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://neuconlabs.com"),
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
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
