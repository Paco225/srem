"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import image from '../public/weare.png'

export default function CeoWord() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-gray-200  container mx-auto px-16 py-16 mb-20" ref={ref}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Message du Directeur Général</h2>
          <p className="mb-4">
            Chez SREM, notre mission est de fournir des services de restauration exceptionnels aux sites miniers, en mettant l'accent sur la qualité, la sécurité et l'efficacité.
          </p>
          <p className="mb-4">
            Notre équipe dévouée travaille sans relâche pour assurer que chaque repas servi répond aux plus hauts standards nutritionnels et gustatifs, tout en s'adaptant aux contraintes uniques de l'environnement minier.
          </p>
          <p className="mb-4">
            Nous sommes fiers de contribuer au bien-être des travailleurs miniers et nous nous engageons à innover constamment pour améliorer nos services et soutenir le développement durable de l'industrie minière.
          </p>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2 pl-5"
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Image
            src= {image}
            alt="Photo du Directeur Général"
            width={500}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  )
}