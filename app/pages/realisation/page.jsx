"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import image from '../../public/weare.png'
import HeroBanner from '@/app/components/HeroBanner'
import contact from '../../public/contact.png'



const mediaItems = [
  {
    id: 1,
    title: "Projet minier Tongon",
    description: "SREM a fourni des services de restauration complets pour le site minier de Tongon, assurant des repas nutritifs et variés pour plus de 1000 travailleurs quotidiennement. Notre gestion efficace de la cantine a contribué à améliorer la satisfaction et la productivité des employés sur le site.",
    imageSrc: image,

  },
  {
    id: 2,
    title: "Cantine mobile pour Endeavour Mining",
    description: "Nous avons conçu et mis en place une solution de cantine mobile innovante pour Endeavour Mining, permettant de servir des repas de qualité sur des sites d'exploration éloignés. Cette approche flexible a permis d'optimiser les opérations tout en maintenant des standards élevés de sécurité alimentaire.",
    imageSrc: image,

  },
  {
    id: 3,
    title: "Gestion alimentaire pour Randgold Resources",
    description: "SREM a pris en charge la gestion complète des services alimentaires pour Randgold Resources, incluant l'approvisionnement, la préparation et le service de repas pour plusieurs sites. Notre expertise a permis de réduire les coûts tout en améliorant la qualité et la diversité des menus proposés.",
    imageSrc: image,

  },
  {
    id: 4,
    title: "Programme nutritionnel pour Newcrest Mining",
    description: "En collaboration avec Newcrest Mining, nous avons développé un programme nutritionnel sur mesure pour leurs employés, intégrant des options de repas équilibrés et adaptés aux besoins énergétiques spécifiques des travailleurs miniers. Ce programme a contribué à améliorer la santé et le bien-être général du personnel.",
    imageSrc: image,

  },
  {
    id: 5,
    title: "Logistique alimentaire pour AngloGold Ashanti",
    description: "SREM a optimisé la chaîne d'approvisionnement alimentaire pour AngloGold Ashanti, mettant en place un système logistique efficace pour approvisionner plusieurs sites miniers isolés. Cette solution a permis de réduire les délais de livraison et d'assurer une fraîcheur constante des produits.",
    imageSrc: image,

  },
  {
    id: 6,
    title: "Formation HACCP pour Perseus Mining",
    description: "Nous avons conçu et dispensé un programme de formation HACCP (Hazard Analysis Critical Control Point) complet pour le personnel de cuisine de Perseus Mining. Cette initiative a renforcé les pratiques d'hygiène et de sécurité alimentaire sur l'ensemble de leurs sites d'exploitation.",
    imageSrc: image,

  },
  {
    id: 7,
    title: "Événements corporatifs pour Barrick Gold",
    description: "SREM a organisé et géré avec succès une série d'événements corporatifs pour Barrick Gold, incluant des dîners de gala et des réceptions pour les investisseurs. Notre expertise en restauration haut de gamme a permis de créer des expériences culinaires mémorables, renforçant l'image de marque de l'entreprise.",
    imageSrc: image,

  },
  {
    id: 8,
    title: "Optimisation des menus pour Resolute Mining",
    description: "En collaboration avec Resolute Mining, nous avons mené une refonte complète des menus de leurs cantines, intégrant des options plus saines et culturellement diversifiées. Cette initiative a significativement augmenté la satisfaction des employés et réduit le gaspillage alimentaire.",
    imageSrc: image,

  },
  {
    id: 9,
    title: "Gestion durable pour Gold Fields",
    description: "Pour Gold Fields, SREM a mis en place un programme de gestion alimentaire durable, privilégiant les fournisseurs locaux et réduisant l'empreinte environnementale des opérations de restauration. Ce projet a non seulement amélioré la durabilité, mais a aussi renforcé les relations avec les communautés locales.",
    imageSrc: image,

  }
]

export default function Realisation() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const totalPages = Math.ceil(mediaItems.length / itemsPerPage)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80
      }
    }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  }

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return mediaItems.slice(startIndex, startIndex + itemsPerPage)
  }

  return (
    <>
     <HeroBanner title="Nos réalisations" imageUrl={contact} />
     <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Nos réalisations</h1>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={pageTransition}
          className="space-y-12"
        >
          {getCurrentPageItems().map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p> 
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex justify-center space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    </>
   
  )
}