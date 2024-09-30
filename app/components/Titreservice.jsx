"use client"

import { motion } from "framer-motion"

export default function ServicesSection() {
  return (
    <section className="pt-16 pb-6 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="inline-block px-6 py-2 bg-red-100 rounded-full text-[#fd053f] font-semibold mb-6"
        >
          Nos services
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#393939] mb-4"
        >
          Voici comment on se différencie <br /> des autres
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Nous travaillons lorem ipsum dolor sita amet pour votre lorem
        </motion.p>
      </motion.div>
    </section>
  )
}