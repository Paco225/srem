import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import image from '../public/weare.png';

const TourCard = ({ tour }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image container */}
      <div className="relative h-64 w-full">
        <Image
          src={tour.image}
          alt={tour.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Animated Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-yellow-700 bg-opacity-50 opacity-0 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      >
        <div className="text-center text-white">
          <h3 className="text-xl font-bold">{tour.title}</h3>
          <p className="text-md mt-2">{tour.date}</p>
        </div>
      </motion.div>

      {/* Non-animated Text */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{tour.title}</h3>
        <p className="text-md text-gray-600">{tour.date}</p>
      </div>
    </motion.div>
  );
};

const TourList = () => {
  const tours = [
    {
      title: 'Nourissez vous bien !',
      date: 'Samedi 12 mai 2024',
      image: image,
    },
    {
      title: 'Nourissez vous bien !',
      date: 'Samedi 12 mai 2024',
      image: image,
    },
    {
      title: 'Nourissez vous bien !',
      date: 'Samedi 12 mai 2024',
      image: image,
    },
    {
      title: 'Nourissez vous bien !',
      date: 'Samedi 12 mai 2024',
      image: image,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold mb-14 text-center">Actualités</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tours.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <motion.button
          className="px-6 py-2 bg-red-100 text-[#fd053f] font-semibold rounded-full shadow-sm relative overflow-hidden"
          whileHover={{
            backgroundColor: '#fd053f', // Couleur de fond grise foncée lors du survol
            color: '#fff', // Couleur du texte blanche lors du survol
            transition: { duration: 0.3 },
          }}
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span>Voir tout</span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
          {/* Animation de remplissage */}
          <motion.div
            className="absolute inset-0 bg-gray-300 z-0"
            initial={{ width: '0%' }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </div>
  );
};

export default TourList;
