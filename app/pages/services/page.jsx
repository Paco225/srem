import React from 'react'
import Services from '@/app/components/Services'
import ServicesSection from '@/app/components/Titreservice'
import OurCustomers from '@/app/components/Partner'
import ContactForm from '@/app/components/Form'


const page = () => {
  return (
    <>
      <ServicesSection  />
     <Services /> 
      <OurCustomers />
      <ContactForm /> 
    </>
  )
}

export default page