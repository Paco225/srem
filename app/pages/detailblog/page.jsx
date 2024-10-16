"use client";

import React from 'react';
import Image from 'next/image';
import HeroBanner from '../../components/HeroBanner';
import bannerImage from '../../public/weare.png';
import Link from 'next/link';

const DetailBlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mb-6">
      <HeroBanner imageUrl={bannerImage} title="Détails du blog" />
      
      <article className="mt-8">
        <h1 className="text-3xl font-bold text-[#073EA2] mb-4">L'importance de l'eau potable dans le développement durable</h1>
        
        <div className="mb-4 text-gray-600">
          <span>Publié le 20 Juillet 2023</span> | <span>Par Kouassi Aya</span>
        </div>

        <div className="prose max-w-none">
          <p>
            L'accès à l'eau potable est un enjeu crucial pour le développement durable et la santé publique en Côte d'Ivoire.
          </p>
          
          <p>
            Dans de nombreuses régions du pays, l'accès à l'eau potable reste un défi majeur. Kadi Prestige s'engage à améliorer cette situation à travers ses projets de forage et d'adduction d'eau.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#073EA2] mt-6 mb-4">Pourquoi l'eau potable est-elle si importante ?</h2>
          
          <ul>
            <li>Elle réduit les risques de maladies hydriques</li>
            <li>Elle améliore la qualité de vie des communautés</li>
            <li>Elle favorise le développement économique local</li>
            <li>Elle contribue à l'éducation en réduisant l'absentéisme scolaire</li>
          </ul>
          
          <p>
            Chez Kadi Prestige, nous croyons que chaque citoyen mérite un accès à l'eau potable. C'est pourquoi nous continuons à investir dans des projets d'infrastructure hydraulique à travers le pays.
          </p>
        </div>
      </article>
      
      <div className="mt-8">
        <Link href="/" className="text-[#073EA2] hover:underline">
          Retour à l'actualité
        </Link>
      </div>
    </div>
  );
};

export default DetailBlogPage;