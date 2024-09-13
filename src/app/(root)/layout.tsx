import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/navbar";
import Particles from "@/components/magicui/particles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Particles
          className="fixed inset-0 z-0 min-h-screen"
          quantity={200}
          size={1}
          ease={80}
          color="#ffffff"
          refresh
        />
        <div className="">
          <Navbar />
          <div className="pt-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
