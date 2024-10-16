"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebook } from "react-icons/fa";
import { LinkedinIcon } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-gray-100 text-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
        <motion.div
          variants={itemVariants}
          className="col-span-1 sm:col-span-2 lg:col-span-1"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Soyez prêt</h2>
          <p className="mb-4 text-sm sm:text-base">Recevez des mises à jour exclusives directement dans votre boîte de réception.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse Email"
              className="flex-grow bg-white border-gray-200 border-2 text-gray-900 px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-1 focus:ring-[#fd053f]"
              required
            />
            <button
              type="submit"
              className="bg-[#fd053f] hover:bg-[#e0042f] px-6 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md transition duration-300 text-white font-bold"
            >
              →
            </button>
          </form>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 flex flex-col items-center  pl-10">
          <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-center sm:text-left">
            <li>
              <a href="pages/presentation" className="hover:text-[#fd053f] transition duration-300">
                Présentation
              </a>
            </li>
            <li>
              <a href="pages/services" className="hover:text-[#fd053f] transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="pages/realisation" className="hover:text-[#fd053f] transition duration-300">
                Réalisation
              </a>
            </li>
            <li>
              <a href="pages/carriere" className="hover:text-[#fd053f] transition duration-300">
                Carrière
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Contactez nous</h3>
          <p className="text-sm sm:text-base">22 06 789 000</p>
          <p className="text-sm sm:text-base">srem@gmail.com</p>
          <p className="text-sm sm:text-base">Cote d'ivoire, Abidjan</p>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Nos réseaux</h3>
          <div className="flex justify-center sm:justify-start">
            <a href="#" className="mr-4">
              <FaFacebook size={24} color="#fd053f"/>
            </a>
            <a href="#">
              <LinkedinIcon size={24} color="#fd053f" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-8 pt-8 border-t border-gray-300 flex flex-col items-center"
      >
        <p className="font-bold text-xs sm:text-sm text-center">© designed by Agence MOSES ART. All Rights Reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
