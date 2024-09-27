import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoSection from "./components/Weare";
import Service from "./components/Service";
import TestimonialCarousel from "./components/Testimonial";
import Partner from "./components/Partner";

export default function Home() {
  return (
    <>
       <Navbar />
       <Hero />
       <BentoSection />
       <Service />
       <TestimonialCarousel />
       <Partner />
    
    </>

  );
}
