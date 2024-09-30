'use client'

import { Clock, Globe, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Career() {
  const features = [
    {
      icon: Clock,
      title: "Flexibilité",
      description: "lorem ipsum dolor sit amet consortium, dolor sit amet consortium"
    },
    {
      icon: Globe,
      title: "Flexibilité",
      description: "lorem ipsum dolor sit amet consortium, dolor sit amet consortium"
    },
    {
      icon: Users,
      title: "Flexibilité",
      description: "lorem ipsum dolor sit amet consortium, dolor sit amet consortium"
    }
  ]

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div 
      className="container mx-auto px-4 py-12 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-primary mb-4"
        variants={itemVariants}
      >
        Carrière
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        Decouvrez nos différentes offres d'emploi
        <br />
        et intégrer notre équipe
      </motion.p>

      <motion.h2 
        className="text-3xl md:text-4xl font-semibold mb-12"
        variants={itemVariants}
      >
        Pourquoi travailler avec nous ?
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-[#fd053f]/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <IconComponent className="w-8 h-8 text-[#fd053f]" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}