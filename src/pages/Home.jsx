import React from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import HospitalInfo from '../components/HospitalInfo';
import AboutSection from '../components/AboutSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TT Hospital | Best Healthcare in Hyderabad</title>
  <meta name="description" content="APIC Hospital provides world-class healthcare services including Cardiology, Orthopedics, Pediatrics, and Emergency Care." />
  <meta name="keywords" content="APIC hospital, best hospital in Hyderabad, emergency care, cardiology" />
      </Helmet>
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