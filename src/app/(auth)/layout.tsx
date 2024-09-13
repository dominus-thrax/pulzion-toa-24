import { Inter } from "next/font/google";
import "../globals.css";
import Particles from "@/components/magicui/particles";
import { Toaster } from "sonner";

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
        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={2000}
          pauseWhenPageIsHidden
          visibleToasts={1}
        />
        {children}
      </body>
    </html>
  );
}
