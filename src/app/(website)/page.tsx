import ContactUs from "@/components/landing/contact-us";
import About from "@/components/landing/about-us";
import Glimpses from "@/components/landing/glimpses";
import Hero from "@/components/landing/hero";
import Sponsors from "@/components/landing/sponsers";
import Navbar from "@/components/layout/navbar";
import localFont from "next/font/local";
import Events from "@/components/landing/events";

const sixtyfour = localFont({
  src: "../../../public/font/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf",
});

export default function Home() {
  return (
    <main className={`${sixtyfour.className}`}>
      <Navbar />
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
    </main>
  );
}