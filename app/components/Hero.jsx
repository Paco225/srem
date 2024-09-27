// components/Hero.js
import React from 'react';
import banner from '../public/bannière.jpg';
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="relative h-screen bg-gray-100">
    {/* Image Container */}
    <div className="absolute inset-0">
      <Image
        src={banner}
        alt="Hero Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
  
    {/* Hero Content */}
    <div className="relative z-10 flex items-center justify-center h-full">
      <h1 className="text-5xl font-bold text-white animate-fade-in-up">
      </h1>
    </div>
 
  </div>
  
  );
};

export default Hero;
