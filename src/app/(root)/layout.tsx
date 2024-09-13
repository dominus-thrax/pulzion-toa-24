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
      <body className={`${inter.className} min-h-screen`}>
        <Particles
          className="fixed inset-0 z-0 pointer-events-none"
          quantity={200}
          size={1}
          ease={80}
          color="#ffffff"
          refresh
        />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <div className="pt-16 flex-grow overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
