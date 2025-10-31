import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const navigate = useNavigate();
    const { translate } = useLanguage();
  return (
    <footer className="bg-[#1d2a44] text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {/* Logo & About */}
        <div onClick={()=>navigate('/home')} className="cursor-pointer">
          {/* <img
            src="https://apichospital.com/wp-content/uploads/2023/01/logo.png" // Replace with your logo path
            alt="APIC Hospital"
            className="h-12 mb-4"
          /> */}
            <div className="mb-4">
              <h1 className="text-xl md:text-2xl font-bold text-teal-600">TNR</h1>
              <h2 className="text-lg md:text-xl font-semibold text-orange-500 -mt-1">
                HOSPITAL
              </h2>
              <p className="text-xs text-gray-500">{translate('header.tagline')}</p>
            </div>
          <p className="text-sm text-gray-300 mb-4">
            {translate('footer.description')}
          </p>
          <a href="#appointment" className="text-teal-400 font-medium hover:underline">
            {translate('footer.makeAppointment')}
          </a>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">{translate('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>{translate('footer.resources')}</li>
              <li>{translate('footer.healthInfo')}</li>
              <li>{translate('footer.research')}</li>
              <li>{translate('footer.privacy')}</li>
              <li>{translate('footer.careers')}</li>
              <li>{translate('footer.news')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{translate('footer.menu')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm md:flex md:flex-col">
              <NavLink to='/home' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.home')}</NavLink>
              <NavLink to='/about' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.about')}</NavLink>
              <NavLink to='/services' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.services')}</NavLink>
              <NavLink to='/location-hours' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.location')}</NavLink>
              <NavLink to='/doctors' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.doctors')}</NavLink>
              <NavLink to='/appointment' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.appointment')}</NavLink>
              <NavLink to='/contact-us' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.contact')}</NavLink>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-5 rounded-lg">
          <h3 className="font-semibold mb-3 text-[#0E204D] hover:text-teal-400">{translate('footer.quickContacts')}</h3>
          <p className="text-sm text-gray-300 mb-2">
            {translate('footer.contactDescription')}
          </p>
          <p className="text-lg font-semibold text-[#0E204D] hover:text-teal-400">
            {translate('header.phone')}
          </p>
          <p className="text-sm text-gray-300 mt-2" style={{whiteSpace: 'pre-line'}}>
            {translate('footer.address')}
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="cursor-pointer hover:text-teal-400 text-black" />
            <FaInstagram className="cursor-pointer hover:text-teal-400 text-black" />
            <FaYoutube className="cursor-pointer hover:text-teal-400 text-black" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
