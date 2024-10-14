import React from 'react'
import Service from '@/app/components/Service'
import ServicesSection from '@/app/components/Titreservice'
import OurCustomers from '@/app/components/Partner'
import ContactForm from '@/app/components/Form'
import HeroBanner from '@/app/components/HeroBanner'
import image from '../../public/exposant.jpg'


const page = () => {
  return (
    <>
      <HeroBanner imageUrl={image} /> 
      <ServicesSection />
      <Service />
      <OurCustomers />
      <ContactForm />
    </>
  )
}
export default page