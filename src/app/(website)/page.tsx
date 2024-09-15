import ContactUs from "@/components/landing/contact-us";
import About from "@/components/landing/about-us";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/layout/navbar";
import Events from "@/components/landing/events";
import { BackgroundBeams } from "@/components/ui/background-beams";


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
          <ContactUs />
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
