// pages/secteurdetails/[id].js

'use client'

import { useRouter } from 'next/router'
import Image from 'next/image'
import { Cog, Code } from 'lucide-react'
import image from '../../../public/weare.png'

const secteurs = [
  {
    id: 1,
    title: 'Business Management',
    icon: Cog,
    description: 'Gestion des affaires et optimisation des processus commerciaux.',
    image: image
  },
  {
    id: 2,
    title: 'Research & Development',
    icon: Code,
    description: 'Recherche et développement technologique pour innover et progresser.',
    image: image
  }
]

export default function SecteurDetails() {
  const router = useRouter()
  const { id } = router.query

  const secteur = secteurs.find((secteur) => secteur.id === parseInt(id))

  if (!secteur) {
    return <div className="text-center py-20">Secteur introuvable</div>
  }

  return (
    <div className="bg-gray-200 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{secteur.title}</h1>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-lg">
            <Image
              src={secteur.image}
              alt={secteur.title}
              objectFit="cover"
              className="rounded-lg mb-6"
            />
            <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 translate-y-1/2">
              <div className="bg-[#c7a72a] rounded-full p-4">
                <secteur.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-lg text-center mt-4">{secteur.description}</p>
        </div>
      </div>
    </div>
  )
}
