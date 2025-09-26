import React from 'react'
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import { About } from './pages/About';
import Service from './pages/Service';
import Location from './pages/Location';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import { Helmet } from 'react-helmet-async';


 const App = () => {
  return (
    <>
      <Helmet>
              <title>TT Hospital | Best Healthcare in Hyderabad</title>
        <meta name="description" content="APIC Hospital provides world-class healthcare services including Cardiology, Orthopedics, Pediatrics, and Emergency Care." />
        <meta name="keywords" content="APIC hospital, best hospital in Hyderabad, emergency care, cardiology" />
            </Helmet>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Service/>} />
        <Route path='/location-hours' element={<Location/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/contact-us' element={<Location/>} />
      </Routes>
    </>
  )
}

export default App;
