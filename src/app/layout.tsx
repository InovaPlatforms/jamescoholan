import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Coholan - Technologist & Digital Innovation Expert",
  description: "James Coholan is a seasoned technologist and digital innovation expert specializing in cutting-edge solutions, strategic technology leadership, and transformative digital experiences.",
  keywords: "James Coholan, technologist, digital innovation, technology leadership, software development, digital transformation, tech expert",
  authors: [{ name: "James Coholan" }],
  creator: "James Coholan",
  openGraph: {
    title: "James Coholan - Technologist & Digital Innovation Expert",
    description: "Seasoned technologist and digital innovation expert specializing in cutting-edge solutions and strategic technology leadership.",
    url: "https://jamescoholan.com",
    siteName: "James Coholan",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Coholan - Technologist & Digital Innovation Expert",
    description: "Seasoned technologist and digital innovation expert specializing in cutting-edge solutions and strategic technology leadership.",
    creator: "@jamescoholan",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "James Coholan",
    jobTitle: "Technologist & Digital Innovation Expert",
    description: "Seasoned technologist and digital innovation expert specializing in cutting-edge solutions, strategic technology leadership, and transformative digital experiences.",
    url: "https://jamescoholan.com",
    sameAs: [
      "https://linkedin.com/in/jamescoholan",
      "https://github.com/jamescoholan",
      "https://twitter.com/jamescoholan"
    ],
    knowsAbout: [
      "Software Development",
      "Digital Innovation", 
      "Technology Leadership",
      "Digital Transformation",
      "Strategic Technology Planning"
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
