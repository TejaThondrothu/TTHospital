import React, { useState } from "react";
import { Phone, MapPin, Clock, Globe, Menu, X, ChevronDown } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { translate, currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  const navigate = useNavigate();

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#253A6B] text-white text-sm flex flex-col md:flex-row md:justify-between items-center px-4 md:px-12 lg:px-24 py-4 space-y-2 md:space-y-0">
        <div className="flex flex-wrap items-center justify-center md:justify-start space-x-2 md:space-x-6 lg:space-x-14">         
          <span className="font-large bg-white text-black p-1 text-xs md:text-sm">{translate('header.emergency')}</span>  
          <div className="flex items-center space-x-1 md:space-x-2 font-large">
            <Phone size={14} className="md:w-4 md:h-4" />
            <span className="text-xs md:text-sm">{translate('header.phone')}</span>
          </div>
          <div className="hidden md:flex items-center space-x-2 font-large">
            <MapPin size={16} />
            <span>{translate('header.location')}</span>
          </div>
          <div className="hidden lg:flex items-center space-x-2 font-large">
            <Clock size={16} />
            <span>{translate('header.hours')}</span>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div 
              className="flex items-center space-x-1 cursor-pointer hover:text-teal-400"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              <Globe size={16} />
              <span className="text-xs md:text-sm">{availableLanguages.find(lang => lang.code === currentLanguage)?.name}</span>
              <ChevronDown size={12} className={`transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
            </div>
            {languageOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[120px]">
                {availableLanguages.map((language) => (
                  <div
                    key={language.code}
                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                      currentLanguage === language.code ? 'bg-teal-50 text-teal-600' : 'text-gray-800'
                    }`}
                    onClick={() => {
                      changeLanguage(language.code);
                      setLanguageOpen(false);
                    }}
                  >
                    {language.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <FaFacebook className="text-teal-400 cursor-pointer hover:text-teal-300" size={16} />
          <FaInstagram className="text-teal-400 cursor-pointer hover:text-teal-300" size={16} />
          <FaYoutube className="text-teal-400 cursor-pointer hover:text-teal-300" size={16} />
        </div>
      </div>

      {/* Logo and Navbar */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-12 lg:px-24 py-4">
          {/* Logo */}
          <div onClick={()=>navigate('/home')}  className="flex items-center space-x-2">
            {/* <img
              src="https://apichospital.com/wp-content/uploads/2023/01/logo.png"
              alt="APIC Hospital"
              className="h-12"
            /> */}
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-teal-600">TNR</h1>
              <h2 className="text-lg md:text-xl font-semibold text-orange-500 -mt-1">
                HOSPITAL
              </h2>
              <p className="text-xs text-gray-500">{translate('header.tagline')}</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4 lg:space-x-6 font-semibold text-sm lg:text-[16px] text-gray-800">
              <NavLink to='/home' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.home')}</NavLink>
              <NavLink to='/about' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.about')}</NavLink>
              <NavLink to='/services' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.services')}</NavLink>
              <NavLink to='/location-hours' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.location')}</NavLink>
              <NavLink to='/doctors' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.doctors')}</NavLink>
              <NavLink to='/appointment' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.appointment')}</NavLink>
              <NavLink to='/contact-us' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>{translate('header.nav.contact')}</NavLink>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden bg-gray-100 px-6 pb-4">
            <ul className="flex flex-col space-y-4 font-semibold text-gray-800">
              <NavLink to='/home' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"} onClick={() => setMenuOpen(false)}>{translate('header.nav.home')}</NavLink>
              <NavLink to='/about' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"} onClick={() => setMenuOpen(false)}>{translate('header.nav.about')}</NavLink>
              <NavLink to='/services' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"} onClick={() => setMenuOpen(false)}>{translate('header.nav.services')}</NavLink>
              <NavLink to='/location-hours' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"} onClick={() => setMenuOpen(false)}>{translate('header.nav.location')}</NavLink>
              <NavLink to='/doctors' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"} onClick={() => setMenuOpen(false)}>{translate('header.nav.doctors')}</NavLink>
              <NavLink to='/appointment' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"} onClick={() => setMenuOpen(false)}>{translate('header.nav.appointment')}</NavLink>
              <NavLink to='/contact-us' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"} onClick={() => setMenuOpen(false)}>{translate('header.nav.contact')}</NavLink>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default Header;
