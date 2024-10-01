'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const floatingVariants = {
  animate: {
    y: [0, -20, 0], // Déplacement vertical de 0 à -20px puis retour à 0
    transition: {
      duration: 3, // Durée de l'animation
      repeat: Infinity, // Répète à l'infini
      repeatType: "loop", // L'animation recommence en boucle
    },
  },
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/+2250584583936" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variants={floatingVariants}
      animate="animate"
      style={{ zIndex: 1000 }}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </motion.a>
  );
};

export default WhatsAppButton;
