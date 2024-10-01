"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-3 lg:col-span-1"
        >
          <h2 className="text-2xl font-bold mb-2">Soyez prêt</h2>
          <p className="mb-4">Recevez des mises à jour exclusives directement dans votre boîte de réception.</p>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse Email"
              className="flex-grow bg-gray-100 text-gray-900 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#fd053f]"
              required
            />
            <button
              type="submit"
              className="bg-[#fd053f] hover:bg-[#e0042f] px-6 py-2 rounded-r-md transition duration-300 text-white font-bold"
            >
              →
            </button>
          </form>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 flex flex-col items-center">
          <h3 className="text-[16px] font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-center">
            <li>
              <a href="#" className="hover:text-[#fd053f] transition duration-300">
                Présentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fd053f] transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fd053f] transition duration-300">
                Réalisation
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-[#fd053f] transition duration-300">
                Carrière
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 lg:col-span-1">
          <h3 className="text-[16px] font-bold mb-4">Contactez nous</h3>
          <p>22 06 789 000</p>
          <p>srem@gmail.com</p>
          <p>Cote d'ivoire, Abidjan</p>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-8 pt-8 border-t border-gray-300 flex flex-col items-center"
      >
        <p className="font-bold text-sm mb-4 text-center">© designed by Agence MOSES ART. All Rights Reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
