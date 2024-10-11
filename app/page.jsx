'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoSection from "./components/Weare";
import Service from "./components/Service";
import TestimonialCarousel from "./components/Testimonial";
import Partner from "./components/Partner";
import Newsletter from "./components/Newsletter";
import TourList from "./components/News";
import Footer from "./components/Footer";
import BusinessLunch from "./components/Menu";

export default function Home() {
  return (
    <>
       <BentoSection />
       <Service />
       <BusinessLunch/>
       <TestimonialCarousel />
       <Partner />
       <TourList />
       <Newsletter />
    </>

  );
}
