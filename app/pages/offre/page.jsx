"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Postuler from "@/app/components/Postuler"

export default function Offre() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (formData) => {
    console.log("Informations soumises :", formData)
    setFormSubmitted(true)
  }

  return (
    <>
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Offre d'emploi</h1>
    </div>
     <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-[10%] py-8 font-sans  justify-start"
    >
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-700">Offre : Senior front-end engeneer</h3>
        <div>
          <h4 className="text-lg font-medium mb-2">Information du poste</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <span className="font-medium">Expérience professionelle :</span>
            </li>
            <li>
              <span className="font-medium">Niveau d'étude :</span>
            </li>
            <li>
              <span className="font-medium">Secteur d'activité :</span>
            </li>
          </ul>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-lg font-medium mb-2">Description du job</h4>
          <p className="text-gray-600">Description complète du poste à occuper</p>
        </div>
      </div>
       
    </motion.div>
    <div className="mx-[10%] mb-14 mt-4">
      <Postuler onSubmit={handleFormSubmit} />
      {formSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
        >
          Votre candidature a été soumise avec succès !
        </motion.div>
      )}
    </div>
    </>
  )
}
