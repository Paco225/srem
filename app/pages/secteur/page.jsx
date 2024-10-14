"use client"

import Image from 'next/image'
import { Cog, Code } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import image from '../../public/weare.png'
import Link from 'next/link'
import HeroBanner from '@/app/components/HeroBanner'
import weare from '../../public/weare.png'

const secteur = [
  {
    id : 1,
    title: 'Business Management',
    icon: Cog,
    image: image
  },
  {
    id : 2,
    title: 'Research & Development',
    icon: Code,
    image: image
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
}

export default function BusinessAgency() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <>
    <HeroBanner
      title="Secteur d'Activité"
      imageUrl={weare}
      />
    <div className="bg-gray-50 mx-auto px-4 pt-16 pb-28">
    
    <motion.header 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Nos secteurs d'activités</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
      "Spécialisés dans la restauration sur sites miniers, nous offrons des services de gestion de cantines et de livraison de repas adaptés aux besoins des travailleurs"
      </p>
    </motion.header>

    <motion.div 
      className="flex justify-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {secteur.map((secteur, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link href={`../pages/secteurdetails/${secteur.id}`} passHref>
              <div 
                className="flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h2 className="text-xl font-semibold mb-4 text-center">{secteur.title}</h2>
                <div className="relative w-full">
                  <Image
                    src={secteur.image}
                    alt={secteur.title}
                    objectFit="cover"
                    className="rounded-lg transition-all duration-300 ease-in-out"
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-[#fd053f]/50 to-transparent rounded-lg transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                    <div className="bg-[#c7a72a] rounded-full p-4">
                      <secteur.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
    </>
    
  )
}
