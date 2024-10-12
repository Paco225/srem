import React from 'react'
import Career from '@/app/components/Career'
import JobListings from '@/app/pages/carriere/Offer'
import WhatsAppButton from '@/app/components/Whatsapp'
import Offer from '../carriere/Offer'
import HeroBanner from '@/app/components/HeroBanner'
import contact from '../../public/contact.png'

const Carriere = () => {
  return (
    <div>
      <HeroBanner title="Carrière" imageUrl={contact} />
      <Career />
      <Offer />
    </div>
  )
}

export default Carriere