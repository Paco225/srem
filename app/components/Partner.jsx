"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import logo from '../public/logo.png'

const customers = [
  { name: "Zapier", logo: logo },
  { name: "Spotify", logo: logo },
  { name: "Zoom", logo: logo },
  { name: "Amazon", logo: logo },
  { name: "Adobe", logo: logo },
]

const floatingAnimation = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -10, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    },
  },
}

const advancedAppearAnimation = {
  initial: { opacity: 0, scale: 0.8, rotate: -10, y: 50 },
  whileInView: {
    opacity: 1,
    scale: [1, 1.05, 1],
    rotate: [0, 5, 0],
    y: 0,
    transition: {
      type: "faded",
      stiffness: 100,
      damping: 20,
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
}

const textAnimation = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "faded",
      stiffness: 120,
      damping: 20,
      duration: 1,
    },
  },
}

export default function OurCustomers() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <motion.div
        variants={textAnimation}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Nos Partenaires</h2>
        <p className="text-lg text-gray-600 mb-8">
          Ils nous ont fais confiance et on été satisfait
        </p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto bg-white">
        {customers.map((customer, index) => (
          <motion.div
            key={customer.name}
            variants={advancedAppearAnimation}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
            >
              <Image
                src={customer.logo}
                alt={`${customer.name} logo`}
                width={140}
                height={50}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
