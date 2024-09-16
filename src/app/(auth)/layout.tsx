import { Inter } from "next/font/google";
import "../globals.css";
import Particles from "@/components/magicui/particles";
import { Toaster } from "sonner";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  min-h-screen`}>
        {children}
        <BackgroundBeams />
      </body>
    </html>
  );
}
