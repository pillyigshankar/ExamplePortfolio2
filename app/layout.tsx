import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pillyi G Shankar | Full-Stack Developer & CS Engineer",
  description:
    "Portfolio of Pillyi G Shankar — Computer Science Engineering student and Full-Stack Developer skilled in React, Spring Boot, FastAPI, and modern web technologies.",
  keywords: [
    "Pillyi G Shankar",
    "Full Stack Developer",
    "React Developer",
    "Spring Boot",
    "Portfolio",
    "CS Engineer",
    "Andhra Pradesh",
  ],
  authors: [{ name: "Pillyi G Shankar" }],
  openGraph: {
    title: "Pillyi G Shankar | Full-Stack Developer",
    description:
      "Computer Science Engineering student & Full-Stack Developer building modern, scalable web applications.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pillyi G Shankar | Full-Stack Developer",
    description:
      "Computer Science Engineering student & Full-Stack Developer building modern, scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
