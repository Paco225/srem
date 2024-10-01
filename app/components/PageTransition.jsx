"use client"; // Indiquer que c'est un composant client

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({ children }) {
  const pathname = usePathname(); // Obtenir la route actuelle

  // Transition de "reveal" pour afficher la page depuis le haut
  const pageTransition = {
    initial: { opacity: 0, y: 50 },  // Commence avec opacité 0 et glisse depuis 50px plus bas
    animate: { opacity: 1, y: 0 },   // Devient visible avec opacité 1 et revient à la position normale
    exit: { opacity: 0, y: -50 },    // Lors de la sortie, glisse vers le haut avec opacité 0
    transition: { duration: 0.8 },   // Durée de la transition (0.8 secondes ici)
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Change la clé à chaque changement de route
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition} // Applique la transition définie plus haut
        transition={pageTransition.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
