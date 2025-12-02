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
  metadataBase: new URL("https://akashmed.vercel.app"),
  title: {
    default: "Akash Ahmed | Full-Stack Developer & Computer Science Student",
    template: "%s | Akash Ahmed",
  },
  description: "Akash Ahmed - Full-Stack Developer specializing in React, Next.js, Node.js, and .NET. Computer Science student from Dhaka, Bangladesh with 1+ years of experience building scalable web applications and REST APIs.",
  keywords: [
    "Akash Ahmed",
    "Akash Ahmed developer",
    "Akash Ahmed portfolio",
    "Full-Stack Developer Bangladesh",
    "React Developer Dhaka",
    "Next.js Developer",
    "Computer Science Student Bangladesh",
    "Web Developer Dhaka",
    "akashmed",
    "akashmed3",
    "Node.js Developer",
    "Software Engineer Bangladesh",
    "REST API Developer",
  ],
  authors: [{ name: "Akash Ahmed", url: "https://akashmed.vercel.app" }],
  creator: "Akash Ahmed",
  publisher: "Akash Ahmed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Akash Ahmed | Full-Stack Developer & Computer Science Student",
    description: "Full-Stack Developer from Bangladesh specializing in React, Next.js, Node.js, and .NET. Building scalable web applications with 1+ years of experience.",
    url: "https://akashmed.vercel.app",
    siteName: "Akash Ahmed Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Akash Ahmed - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Ahmed | Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, Node.js, and .NET. Computer Science student from Bangladesh.",
    images: ["/preview.png"],
    creator: "@akashmed",
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
  alternates: {
    canonical: "https://akashmed.vercel.app",
  },
  verification: {
    google: "google-site-verification=FdWq01C-7Q63Mb7TNxVSSIXqDexc6PRGhwEpMG1mp84", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Akash Ahmed',
    url: 'https://akashmed.vercel.app',
    image: 'https://akashmed.vercel.app/avatar.jpg',
    sameAs: [
      'https://github.com/akashmed',
      'https://www.linkedin.com/in/akash-ahmed-dev',
    ],
    jobTitle: 'Full-Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh',
    },
    email: 'akashmed3@gmail.com',
    description: 'Full-Stack Developer specializing in React, Next.js, Node.js, and .NET. Computer Science student with 1+ years of experience building scalable web applications.',
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      '.NET',
      'C#',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'REST API',
      'Web Development',
      'Full-Stack Development',
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
