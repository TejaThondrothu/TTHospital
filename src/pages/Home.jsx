import React from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import HospitalInfo from '../components/HospitalInfo';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <>
      <Header/>
      <HeroSlider/>
      <HospitalInfo/>
      <AboutSection/>
      <Services/>
      <Appointment/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home