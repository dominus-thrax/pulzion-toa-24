import ContactUs from "@/components/landing/contact-us";
import About from "@/components/landing/about-us";
import Glimpses from "@/components/landing/glimpses";
import Hero from "@/components/landing/hero";
import Sponsors from "@/components/landing/sponsers";
import Navbar from "@/components/layout/navbar";
import localFont from "next/font/local";
import Events from "@/components/landing/events";
import { BackgroundBeams } from "@/components/ui/background-beams";

const sixtyfour = localFont({
  src: "../../../public/font/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf",
});

export default function Home() {
  return (
    <main className={``}>
      <Navbar />
      <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div>
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="glimpses">
            <Glimpses />
          </div>
          <div id="sponsors">
            <Sponsors />
          </div>
          <div id="events">
            <Events />
          </div>
          <ContactUs />
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
