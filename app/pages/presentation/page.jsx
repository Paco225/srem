import React from 'react'
import Component from '@/app/components/Introduce'
import CeoWord from '@/app/components/CeoWord'
import HeroBanner from '@/app/components/HeroBanner'
import weare from '../../public/weare.png'

const page = () => {
  return (
    <>
    <HeroBanner imageUrl={weare} />  {/* Hero banner */}
    <Component />
    <CeoWord />
    </>
  )
}

export default page