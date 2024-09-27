"use client";

import { motion } from "framer-motion";
import { ChartBar, Lock, FileText, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <ChartBar className="w-6 h-6 text-red-500" />, // Taille réduite de l'icône
    title: "Analytics",
    description: "Analytics for your cases and your files.",
  },
  {
    icon: <Lock className="w-6 h-6 text-red-500" />,
    title: "Security",
    description:
      "With bank-grade data protection, your confidential client files are secure.",
  },
  {
    icon: <FileText className="w-6 h-6 text-red-500" />,
    title: "Document Management",
    description:
      "Have full control over your documents. Create folders, upload files, move files, and even more.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Service() {
  return (
    <div className="bg-yellow-400 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 text-center mb-12"
          variants={itemVariants}
        >
          We offer the best experience
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function FeatureCard({ feature }) {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 max-w-xs" // Taille réduite du padding et limite la largeur
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background fill effect */}
      <motion.div
        className="absolute inset-0 bg-pink-100 opacity-0 rounded-lg z-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="relative w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-2 z-10"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="relative text-lg font-semibold text-gray-900 mb-1 z-10">
        {feature.title}
      </h3>
      <p className="relative text-gray-600 mb-2 z-10 text-sm">{feature.description}</p>
      <motion.a
        href="#"
        className="relative inline-flex items-center text-indigo-600 hover:text-indigo-800 z-10 text-sm"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Read More <ArrowRight className="ml-2 w-3 h-3" />
      </motion.a>
    </motion.div>
  );
}
