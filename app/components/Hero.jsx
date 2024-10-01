"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import banner1 from '../public/bannière.jpg'; // Replace with your actual images
import banner2 from '../public/bannière2.jpg';
import banner3 from '../public/bannière3.jpg';

const images = [banner1, banner2, banner3];
const texts = [
  "Discover the beauty of the outdoors",
  "Experience the serenity of nature",
  "Unleash your inner explorer"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence>
          {images.map((image, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60, scale: 0.90 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute inset-0">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>      
    </div>
  );
};
export default Hero;
