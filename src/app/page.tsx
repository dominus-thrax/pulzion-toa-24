import ContactUs from "@/components/Contact US/Contact-us";
import About from "@/components/About Us/About-us";
import Event from "@/components/Events/Events1";
import Glimpses from "@/components/Glimpses/Glimpses";
import Hero from "@/components/Hero/Hero";
import Sponsors from "@/components/Sponsers/Sponsers";
import Navbar from "@/components/Navbar/Navbar";
// import Timeline from '@/components/Timeline/Timeline';

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      {/* <Event></Event> */}
      <Glimpses></Glimpses>
      {/* <Timeline></Timeline> */}
      <Sponsors></Sponsors>
      <ContactUs></ContactUs>
    </main>
  );
}
