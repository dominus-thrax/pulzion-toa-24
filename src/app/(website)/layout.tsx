"use client";

import { Inter } from "next/font/google";
import "../globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import MatrixRain from "@/components/landing/MatrixRain";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  min-h-screen`}>{children}</body>
    </html>
  );
}
