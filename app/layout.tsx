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
      <body className="antialiased">{children}</body>
    </html>
  );
}
