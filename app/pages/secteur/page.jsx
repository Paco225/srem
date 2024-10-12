"use client"

import Image from 'next/image'
import { Cog, Code } from 'lucide-react'
import { useState } from 'react'
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

export default function BusinessAgency() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <>
    <HeroBanner
      title="Secteur d'Activité"
      imageUrl={weare}
      />
    <div className=" bg-gray-200 mx-auto px-4 pt-16 pb-28 ">
    
    <header className="text-center mb-12">
      <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">Business Agency</p>
      <h1 className="text-4xl font-bold mb-4">We Are Niobis</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </header>

    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {secteur.map((secteur, index) => (
          <Link href={`../pages/secteurdetails/${secteur.id}`} key={index} passHref>
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
        ))}
      </div>
    </div>
  </div>
    </>
    
  )
}
