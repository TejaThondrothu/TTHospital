import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import VisionMissionValues from '../components/VisionMissionValues'
import WhyChooseUs from '../components/WhyChooseUs'

export const About = () => {
    
  return (
    <>  
        <Header/>
        <AboutUs/>
        <WhyChooseUs/>
        <VisionMissionValues/>
        <Footer/>
    
    </>
  )
}
