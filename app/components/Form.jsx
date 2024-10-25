"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [alertVisible, setAlertVisible] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [captchaToken, setCaptchaToken] = useState(null)
  const recaptchaRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaToken) {
      alert('Veuillez valider le reCAPTCHA')
      return
    }
    console.log('Form submitted:', { name, email, message, captchaToken })
    setName('')
    setEmail('')
    setMessage('')
    setAlertVisible(true)
    recaptchaRef.current.reset()
    setCaptchaToken(null)

    setTimeout(() => {
      setAlertVisible(false)
    }, 3000)
  }

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token)
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
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="inline-block px-6 py-2 bg-red-100 rounded-full text-[#fd053f] font-semibold mb-6"
      >
        Contact
      </motion.div>

      <motion.h2 
        variants={itemVariants}
        className="mb-8 text-center text-3xl font-bold text-navy-900"
      >
        Contactez nous dès <br /> maintenant
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
      >
        <form onSubmit={handleSubmit} className="px-8 py-10 space-y-8">
          <div>
            <input
              type="text"
              required
              className="w-full px-4 py-3 text-lg border-b-2 border-gray-300 focus:border-[#fd053f] focus:outline-none transition-colors duration-300"
              placeholder="Nom & prénoms"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              required
              className="w-full px-4 py-3 text-lg border-b-2 border-gray-300 focus:border-[#fd053f] focus:outline-none transition-colors duration-300"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              required
              className="w-full px-4 py-3 text-lg border-b-2 border-gray-300 focus:border-[#fd053f] focus:outline-none resize-none transition-colors duration-300"
              placeholder="Message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdSO2wqAAAAAC-8UkKhU00VOW7vATD7rzoZqUMa"
              onChange={handleCaptchaChange}
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className={`w-full font-bold py-3 px-4 rounded-full transition-colors duration-300 ${
                captchaToken
                  ? 'bg-[#fd053f] text-white hover:bg-[#e0042f]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!captchaToken}
            >
              Envoyer
            </button>
          </div>
        </form>
      </motion.div>

      {/* Affichage de l'alerte dynamique */}
      {alertVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: -400 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
        >
          Votre message a bien été envoyé !
        </motion.div>
      )}
    </motion.div>
  )
}
