"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import imag from '../../public/weare.png'
import ContactForm from '@/app/components/Form'

export default function Contact() {
  const [suggestion, setSuggestion] = useState('')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Suggestion submitted:', suggestion)
    setSuggestion('')
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto items-center">
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-block bg-pink-100 rounded-full px-4 py-2 text-pink-600 font-semibold text-sm mb-4">
            Contactez nous
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Prenez contact avec nous
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="text-yellow-500 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Telephone</h3>
                  <p className="text-gray-600">22279300443</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-yellow-500 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">SREM@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-yellow-500 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Adresse</h3>
                  <p className="text-gray-600">divo cotedivoire</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-60 md:h-80 lg:h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126744.10863101986!2d-4.784346589607108!3d5.818823548754847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc2b9f73b303b2d%3A0xe33a7db4a10aa90!2sDivo!5e0!3m2!1sen!2sci!4v1696086173172!5m2!1sen!2sci"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div>
      </div>
      <motion.div variants={itemVariants} className="bg-yellow-200 p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              src={imag}
              alt="Équipe en réunion"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Boîte à suggestion</h3>
            <p className="text-gray-600 mb-4">
              Vous avez des suggestions à nous faire part ?
            </p>
            <p className="text-gray-600 mb-6">
              Envoyez nous vos suggestions de façon anonyme
            </p>
            <form onSubmit={handleSubmit}>
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                rows={4}
                placeholder="Votre suggestion ici..."
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-500 transition duration-300"
              >
                Envoyer
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      <ContactForm />
    </motion.section>
  )
}