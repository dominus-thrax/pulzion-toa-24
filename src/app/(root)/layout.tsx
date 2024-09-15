import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/navbar";
import Particles from "@/components/magicui/particles";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen w-full rounded-md bg-neutral-950`}
      >
        <BackgroundBeams />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <div className="pt-16 flex-grow overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
