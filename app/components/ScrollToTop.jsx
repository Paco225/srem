"use client"; // Indiquer que c'est un composant client

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname(); // Obtenir la route actuelle

  useEffect(() => {
    // Utiliser un "setTimeout" pour s'assurer que le défilement se réinitialise après que le contenu ait été monté
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    // S'assurer que le scroll est bien remis à zéro après la navigation
    handleScroll();

    return () => {
      // Optionnel : si tu veux nettoyer ou ajouter une logique supplémentaire à chaque démontage
    };
  }, [pathname]); // Ce hook s'exécute à chaque changement de route (pathname)

  return null; // Ce composant ne rend rien dans l'UI
}
