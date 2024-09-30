"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


const jobListings = [
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/carriere/details" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/carriere/details" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/carriere/details" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/carriere/details" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/carriere/details" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/carriere/details" },
]

export default function JobListings() {
  return (
    <div className="container mx-auto px-4 mb-6 bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Decouvrez nos offres</h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {jobListings.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-xl mx-4 my-4 p-6 flex flex-col justify-between border-t-4 border-[#fd053f]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {job.location}
              </p>
            </div>
            <motion.div
              className="mt-4 flex justify-end"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href={job.link} className="text-yellow-400 hover:text-yellow-500 transition-colors">
                <ArrowRight size={24} />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link href="/all-jobs" className="bg-pink-200 text-pink-600 px-6 py-2 rounded-full font-semibold flex items-center hover:bg-pink-300 transition-colors">
          Voir plus
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </motion.div>
    </div>
  )
}