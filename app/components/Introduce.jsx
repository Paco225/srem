"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import weare from '../public/weare.png'

export default function Component() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="bg-white text-gray-900 p-6 md:p-12">
      <section className="mb-20 mt-4">
        <h2 className="text-lg uppercase mb-2 text-[#fd053f]">A propos de nous </h2>
        <div className="grid md:grid-cols-2 gap-14">
          <div className='w-[85%]'>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">SREM est le partenaire idéal pour votre business</h1>
            <p className="text-gray-700 mb-4 text-[17px]">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam maiores et illum autem. Libero corporis eius, deleniti quo quisquam sed unde earum nisi voluptas maiores reprehenderit aliquid quidem. Magni!
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam maiores et illum autem. Libero corporis eius, deleniti quo quisquam sed unde earum nisi voluptas maiores reprehenderit aliquid quidem. Magni!
            </p>
            <div className="h-1 w-12 bg-orange-500"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src={weare}
                alt="Person working on a laptop"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src={weare}
                alt="Two people shaking hands"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden col-span-2">
              <Image
                src={weare}
                alt="Woman smiling at laptop"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-14 items-center mb-24">
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-300 rounded-lg transform translate-x-2 translate-y-2 "></div>
          <div className="relative z-10 rounded-lg overflow-hidden">
            <Image
              src= {weare}
              alt="Smiling woman in an office"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg font- uppercase mb-2 text-[#fd053f]">Pourquoi nous choisir ?</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Grande avec expérience et expertise</h3>
          <p className="text-gray-600 mb-4 text-[1-px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, velit? Odio, eius, 
            pariatur vitae consectetur enim, est cumque sint ad molestias voluptas nam in eveniet tempora facilis. Blanditiis, voluptates accusamus.
          </p>
          <p className="text-gray-600 mb-4 text-[1-px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, velit? Odio, eius, 
            pariatur vitae consectetur enim, est cumque sint ad molestias voluptas nam in eveniet tempora facilis. Blanditiis, voluptates accusamus.
          </p>
          <div className="h-1 w-12 bg-[#fd053f]"></div>
        </div>
      </section>
      <section className="bg-gray-900 text-white p-8 mb-6 md:p-12 rounded-[18px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-4">Nos chiffres</h2>
            <p className="text-gray-400 text-lg">
              Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-5xl font-bold flex items-center">
                {isMounted && <CountUp end={40} duration={2.5} />}K
                <span className="text-[#f9c905] text-4xl ml-1">+</span>
              </h3>
              <p className="text-gray-400 mt-2">Clients satisfaits</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold flex items-center">
                {isMounted && <CountUp end={50} duration={2.5} />}K
                <span className="text-[#f9c905] text-4xl ml-1">+</span>
              </h3>
              <p className="text-gray-400 mt-2">Projets complètés</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold flex items-center">
                {isMounted && <CountUp end={245} duration={2.5} />}
                <span className="text-[#f9c905] text-4xl ml-1">+</span>
              </h3>
              <p className="text-gray-400 mt-2">Membres de l'équipe</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold flex items-center">
                {isMounted && <CountUp end={550} duration={2.5} />}
                <span className="text-[#f9c905] text-4xl ml-1">+</span>
              </h3>
              <p className="text-gray-400 mt-2">Partenaires</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}