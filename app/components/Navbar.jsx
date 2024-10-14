"use client";

import logo from '../public/logo.png';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SimpleModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkHoverVariants = {
    rest: { opacity: 1 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const underlineVariants = {
    rest: { width: 0, opacity: 0 },
    hover: {
      width: '100%',
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };
  const buttonHoverVariants = {
    rest: { scale: 1, boxShadow: '0px 0px 0px rgba(255, 255, 255, 0)' },
    hover: {
      scale: 1.05,
      boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.8)',
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };
  return (
    <header className={`sticky top-0 z-50 w-full bg-white shadow-lg items-center transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-white/60' : ''}`}>
      <div className="container mx-auto px-4 items-center">
        <div className="flex h-16 items-center justify-between">
          <Link
          scroll={true}
           href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="w-24"
            />
          </Link>
          <nav
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } absolute left-0 right-0 top-16 flex-col items-center space-y-4 p-4 shadow-md md:static md:flex md:flex-row md:space-x-6 md:space-y-0 md:p-0 md:shadow-none text-[15px] text-gray-800`}
          >
            {['Accueil', 'Presentation', 'Services', 'Realisation', 'Carriere','Secteur'].map((item) => (
              <motion.div
                key={item}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={linkHoverVariants}
                className="relative "
              >
                <Link                
                 scroll={true}
                  href={item === 'Accueil' ? '/' : `../pages/${item.toLowerCase()}`}
                  className="text-gray-800 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-red-500"
                  variants={underlineVariants}
                />
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="../pages/contact">
              <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHoverVariants}
                className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 via-red-500 to-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 relative overflow-hidden"
              >
                <span className="relative z-10">Contactez nous</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-30"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </motion.button>
            </Link>

            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6 " /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
