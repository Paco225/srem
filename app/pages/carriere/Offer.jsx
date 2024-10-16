"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

const jobListings = [
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/offre" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/offre" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/offre" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/offre" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/offre" },
  { title: "Senior backend developper", location: "Abidjan", link: "../pages/offre" },
]

export default function JobListings() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
     <motion.div 
       ref={ref}
       variants={containerVariants}
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       className="container mx-auto px-4 mb-14 bg-gray-100 py-8"
     >
      <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">Découvrez nos offres</motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {jobListings.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-xl mx-4 my-4 p-6 flex flex-col justify-between border-t-4 border-[#fd053f]"
            variants={itemVariants}
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
        variants={itemVariants}
      >

      </motion.div>
    </motion.div>
    </>
  )
}