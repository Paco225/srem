'use client'
import Navbar from "./components/Navbar";
import BentoSection from "./components/Weare";
import Services from "./components/Services";
import TestimonialCarousel from "./components/Testimonial";
import Partner from "./components/Partner";
import Newsletter from "./components/Newsletter";
import TourList from "./components/News";
import Footer from "./components/Footer";
import BusinessLunch from "./components/Menu";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
    <Hero/>
       <BentoSection />
       <Services />
       <BusinessLunch/>
       <TestimonialCarousel />
       <Partner />
       <TourList />
       <Newsletter />
    </>

  );
}
