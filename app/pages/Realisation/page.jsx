"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import image from '../../public/weare.png'



const mediaItems = [
  {
    id: 1,
    title: "Behind The Wall",
    description: "Dolor tempor, sit. Velit veniam dicta aliquid blanditiis, ullam quibusdam accusamus, eum quis molestiae nihil tempora fuga cum praesentium, in consequatur eius repellat. Velit veniam dicta aliquid blanditiis ullam quibusdam.",
    imageSrc: image,

  },
  {
    id: 2,
    title: "City Lights",
    description: "Amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
    imageSrc: image,

  },
  {
    id: 3,
    title: "Relationship Status: Online",
    description: "Dolor tempor, sit. Velit veniam dicta aliquid blanditiis, ullam quibusdam accusamus, eum quis molestiae nihil tempora fuga cum praesentium, in consequatur eius repellat. Velit veniam dicta aliquid blanditiis ullam quibusdam.",
    imageSrc: image,

  },
  {
    id: 4,
    title: "Beside The Road",
    description: "Dolor tempor, sit. Velit veniam dicta aliquid blanditiis, ullam quibusdam accusamus, eum quis molestiae nihil tempora fuga cum praesentium, in consequatur eius repellat. Velit veniam dicta aliquid blanditiis ullam quibusdam.",
    imageSrc: image,

  },
  {
    id: 5,
    title: "Mountain View",
    description: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    imageSrc: image,

  },
  {
    id: 6,
    title: "Ocean Breeze",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    imageSrc: image,

  },
  {
    id: 7,
    title: "Urban Jungle",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.",
    imageSrc: image,

  },
  {
    id: 8,
    title: "Sunset Boulevard",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.",
    imageSrc: image,

  },
  {
    id: 9,
    title: "Starry Night",
    description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
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
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -70, opacity: 0 },
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
  )
}