import React from 'react'
import Services from '@/app/components/Services'
import ServicesSection from '@/app/components/Titreservice'
import OurCustomers from '@/app/components/Partner'
import ContactForm from '@/app/components/Form'
import HeroBanner from '@/app/components/HeroBanner'
import image from '../../public/exposant.jpg'


const page = () => {
  return (
    <>
     <HeroBanner imageUrl={image} />  {/* Hero banner */}
      <ServicesSection  />
     <Services /> 
      <OurCustomers />
      <ContactForm /> 
    </>
  )
}

export default page