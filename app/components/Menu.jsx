'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Rice from '../public/Rice.png'

// Liste JSON dynamique pour les sections
const sections = [
  {
    title: 'BUSINESS LUNCH',
    description:
      'The more content you provide about you and your business, the more confident people will be when purchasing from your store.',
    image: Rice,
    bgColor: 'bg-orange-500',
  },
  {
    title: 'SIMPLE MENU',
    description:
      'The more content you provide about you and your business, the more confident people will be when purchasing from your store.',
    image: Rice,
    bgColor: 'bg-green-600',
  },
  {
    title: 'SIMPLE MENU',
    description:
      'The more content you provide about you and your business, the more confident people will be when purchasing from your store.',
    image: Rice,
    bgColor: 'bg-blue-600',
  },

]

export default function BusinessLunch() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col my-6">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Section Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Section Texte */}
          <div className={`w-full md:w-2/3 ${section.bgColor} text-white p-16 flex flex-col justify-center `}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
            <p className="mb-6">{section.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
