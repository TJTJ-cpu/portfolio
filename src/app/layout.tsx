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
  title: "TJ Mady | Software Developer",
  description: "Personal portfolio of TJ Mady — aspiring software developer.",
  openGraph: {
    title: "TJ Mady | Software Developer",
    description: "Personal portfolio of TJ Mady — aspiring software developer.",
    url: "https://portfolio-zeta-nine-63.vercel.app",
    type: "website",
    images: [
      {
        url: "/images/monkey.png",
        width: 1200,
        height: 630,
        alt: "TJ Mady Portfolio"
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
