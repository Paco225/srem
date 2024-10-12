'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import weare from '../public/weare.png';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BentoSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50  },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8,},
    },
  };

  return (
    <>
      <motion.h1
        className="text-4xl sm:text-3xl font-semibold text-center text-gray-600 mb-4 mt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8,  }}
      >
        Qui sommes-nous ?
      </motion.h1>

      <motion.section
        ref={ref}
        className="flex flex-col items-center justify-center py-12 sm:flex-row sm:justify-between px-6 sm:px-24 bg-gradient-to-r from-white via-white to-pink-50"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        {/* Title Section */}
        <div className="mb-8 sm:mb-0 text-center sm:text-left max-w-lg">
            <span className="text-black font-bold text-3xl">SREM - votre partenaire de  </span>
            <span className="text-[#fd053f] text-3xl ">confiance</span>
          <p className="text-lg sm:text-[18px] text-gray-600 pt-4">
          Chez SREM, nous comprenons les besoins uniques des travailleurs du secteur minier. C'est pourquoi nous proposons des solutions de restauration adaptées, offrant des repas sains, équilibrés et savoureux directement sur site. Nous garantissons une qualité exceptionnelle et un service rapide pour que vos équipes restent toujours performantes.
          </p>
        </div>

        {/* Bento Card with Image */}
        <motion.div
          className="relative w-80 h-60 sm:w-96 sm:h-72 rounded-lg overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={weare}
            alt="Bento Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default BentoSection;
