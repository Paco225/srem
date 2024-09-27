// components/BentoSection.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import weare from '../public/weare.png';

const BentoSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 sm:flex-row sm:justify-between px-6 sm:px-24 bg-gradient-to-r from-white via-white  to-pink-50">

      {/* Title Section */}
      <div className="mb-8 sm:mb-0 text-center sm:text-left max-w-lg">
        <h2 className="text-4xl sm:text-6xl font-bold mb-6">
          <span className="text-black">Lorem ipsum dolor sit </span>
          <span className="text-red-500">amet</span>
        </h2>
        <p className="text-lg sm:text-2xl text-gray-600">
          Lorem ipsum dolor sit amet ipsum loreù dolor ipsum amet sit lorem ipsum.
        </p>
      </div>

      {/* Bento Card with Image */}
      <motion.div
        className="relative w-80 h-60 sm:w-96 sm:h-72 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={weare} // Assure-toi que l'image est dans /public/weare.png
          alt="Bento Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </motion.div>
    </section>
  );
};

export default BentoSection;
