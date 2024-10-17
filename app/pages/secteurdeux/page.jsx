import React from 'react'
import Image from 'next/image'
import weare from '../../public/weare.png'

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <Image
          src={weare}
          alt="Femme souriante avec un téléphone"
          width={500}
          height={500}
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Nous tissons un design centré sur l'utilisateur avec des visuels époustouflants pour créer des sites web qui résonnent et convertissent.
        </h1>
        <p className="text-xl mb-6 text-gray-600">— Design de sites web et d'applications mobiles</p>
        <p className="text-lg mb-8 text-gray-700">
          Nous créons des sites web et des applications mobiles époustouflants qui produisent des résultats. Notre expertise en matière de design visuel et d'expérience utilisateur nous permet de créer une présence en ligne captivante et mémorable. Des designs qui attirent l'attention - des sites web et des applications qui génèrent des résultats.
        </p>
        <ul className="text-left">
          <li className="mb-2 text-gray-700">• Branding</li>
          {/* Ajoutez d'autres éléments de liste si nécessaire */}
        </ul>
      </div>
    </div>
  )
}

export default Page