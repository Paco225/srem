import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import image from '../public/weare.png';
import Link from 'next/link';

const TourCard = ({ tour }) => {
  return (
    <Link href={`/pages/actualite`} passHref>
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
    </Link>
  );
};

const TourList = () => {
  const tours = [
    {
      id: 1, 
      title: 'Nourissez vous bien !',
      date: 'Samedi 12 mai 2024',
      image: image,
    },
    {
      id: 2,
      title: 'Un autre événement',
      date: 'Dimanche 13 mai 2024',
      image: image,
    },
    {
      id: 3,
      title: 'Un autre événement',
      date: 'Dimanche 13 mai 2024',
      image: image,
    },
    {
      id: 4,
      title: 'Un autre événement',
      date: 'Dimanche 13 mai 2024',
      image: image,
    },
    // Ajoutez d'autres événements ici...
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-3xl font-bold mb-14 text-center text-gray-700">Nos articles récents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default TourList;
