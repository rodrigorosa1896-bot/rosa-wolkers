import CTA from "@/components/CTA";
import Stats from "../components/Stats";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Equipment from "../components/Equipment";

import WhyUs from "../components/WhyUs";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FadeIn>
        <Services />
      </FadeIn>

      <FadeIn>
        <Stats />
      </FadeIn>

      <FadeIn>
        <Equipment />
      </FadeIn>

      <FadeIn>
        <WhyUs />
      </FadeIn>

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <CTA />
      </FadeIn>

     <FadeIn>
      <Contact />
    </FadeIn>

      <Footer />

      <WhatsappButton />
    </>
  );
}