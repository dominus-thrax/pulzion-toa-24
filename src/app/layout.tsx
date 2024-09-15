import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pulzion - Tech Across Ages",
  description: `Pulzion'24 - Tech Across Ages is the flagship event of the PICT ACM Student Chapter, 
    offering a dynamic blend of technical and non-technical competitions. 
    With events designed to challenge and inspire, it provides a platform for 
    students to showcase their skills, creativity, and innovation.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
