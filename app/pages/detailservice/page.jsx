"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import image from '../../public/weare.png'

export default function Detailservice() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="container mx-auto px-4 md:px-16 py-16" ref={ref}>
      <div className="text-center mb-12">
        <h1 className='text-4xl font-bold text-gray-800'>Nos Services</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <motion.div 
          className="w-full md:w-1/2 p-8"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Services de Qualité</h2>
          <p className="mb-4 text-gray-600">
            Chez SREM, nous nous engageons à fournir des services de haute qualité adaptés à vos besoins spécifiques. Notre équipe d'experts travaille sans relâche pour garantir votre satisfaction.
          </p>
          <p className="mb-4 text-gray-600">
            Nous proposons une gamme complète de solutions, allant de la conception à la réalisation, en passant par la maintenance. Notre approche personnalisée assure que chaque projet est traité avec le plus grand soin et attention aux détails.
          </p>
          <p className="mb-4 text-gray-600">
            Faites confiance à SREM pour transformer vos idées en réalité. Avec notre expertise et notre dévouement, nous sommes prêts à relever tous les défis et à dépasser vos attentes.
          </p>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={image}
            alt="Image de service"
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}