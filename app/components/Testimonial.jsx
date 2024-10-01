'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Pacome Brou',
    location: 'Data analyst Orange Bank',
    text: 'lorem ipsum dolor sit amet. Además fueron muy amables, pedimos una cama supletoria y nos la facilitaron sin problemas.',
  },
  {
    id: 2,
    name: 'Moise YAPO',
    location: 'CEO Agence MOSES ART',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, error amet ex asperiores magni reprehenderit illum et quaerat sequi natus?',
  },
  {
    id: 3,
    name: 'Yves NIAMBA',
    location: 'Production Manager',
    text: 'lorem psum dolor ispsd j. We couldn\'t have asked for a better experience. Highly recommended!',
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [nextTestimonial])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Ce qu'ils pensent de nous</h2>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg p-6 md:p-8"
          >
            <blockquote className="text-lg md:text-xl text-center mb-4 relative">
              <span className="absolute top-0 left-0 text-6xl text-pink-500 opacity-50">"</span>
              <p className="relative z-10 px-8">{testimonials[currentIndex].text}</p>
              <span className="absolute bottom-0 right-0 text-6xl text-pink-500 opacity-50">"</span>
            </blockquote>
            <p className="text-center font-semibold mt-6">
              {testimonials[currentIndex].name} - {testimonials[currentIndex].location}
            </p>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}