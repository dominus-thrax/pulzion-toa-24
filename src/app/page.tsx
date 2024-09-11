import ContactUs from "@/components/landing/contact-us";
import About from "@/components/landing/about-us";
import Event from "@/components/landing/events";
import Glimpses from "@/components/landing/glimpses";
import Hero from "@/components/landing/hero";
import Sponsors from "@/components/landing/sponsers";
import Navbar from "@/components/layout/navbar";
import localFont from "next/font/local";
import TimeLine2 from "@/components/Timeline/TimeLine2";
import TimelinePage from "@/components/Timeline/Timeline"; 
// import Timeline from '@/components/Timeline/Timeline';

const sixtyfour = localFont({
  src: "../../public/font/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf"
})

export default function Home() {
  return (
    <main className={`${sixtyfour.className}`}>
      <Navbar />
      <Hero />
      <About />
      {/* <Event /> */}
      <Glimpses />
      {/* <TimelinePage /> */}
      <TimeLine2/>
      <Sponsors />
      {/* <ContactUs /> */}
    </main>
  );
}
