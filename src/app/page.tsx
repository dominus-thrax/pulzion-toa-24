import ContactUs from "@/components/landing/contact-us";
import About from "@/components/landing/about-us";
import Event from "@/components/landing/events";
import Glimpses from "@/components/landing/glimpses";
import Hero from "@/components/landing/hero";
import Sponsors from "@/components/landing/sponsers";
import Navbar from "@/components/layout/navbar";
// import Timeline from '@/components/Timeline/Timeline';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      {/* <Event /> */}
      <Glimpses />
      {/* <Timeline /> */}
      <Sponsors />
      <ContactUs />
    </main>
  );
}
