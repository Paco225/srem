// components/ServiceSection.js
'use client';

import { motion } from 'framer-motion';
import { FaUtensils } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Restauration',
    description: 'Nous vous proposons un service de restauration complet',
    icon: <FaUtensils size={40} className="text-yellow-400" />,
  },
  {
    id: 2,
    title: 'Restauration',
    description: 'Nous vous proposons un service de restauration complet',
    icon: <FaUtensils size={40} className="text-yellow-400" />,
  },
  {
    id: 3,
    title: 'Restauration',
    description: 'Nous vous proposons un service de restauration complet',
    icon: <FaUtensils size={40} className="text-yellow-400" />,
  },
];

const ServiceSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-6 sm:px-24 bg-white">
      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Nous proposons différents{' '}
        <span className="text-yellow-500">services</span>
      </h2>
      <p className="text-lg sm:text-2xl text-gray-500 mb-12 text-center">
        dolor ipsum amet sit lorem ipsum
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-700">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
