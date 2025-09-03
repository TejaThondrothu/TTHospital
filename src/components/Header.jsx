import React, { useState } from "react";
import { Phone, MapPin, Clock, Globe, Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#253A6B] text-white text-sm flex flex-col md:flex-row md:justify-between items-center px-24 py-4 space-y-2 md:space-y-0">
        <div className="flex flex-wrap items-center justify-center md:justify-start space-x-14">         
          <span className="font-large bg-white text-black p-1">24/7 Emergency</span>  
          <div className="flex items-center space-x-2 font-large">
            <Phone size={16} />
            <span>+91-7777-999-565</span>
          </div>
          <div className="flex items-center space-x-2 font-large">
            <MapPin size={16} />
            <span>Ongole, Andhra Pradesh</span>
          </div>
          <div className="flex items-center space-x-2 font-large">
            <Clock size={16} />
            <span>Mon-Sat: 9-8, Sun: 9-2</span>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 cursor-pointer">
            <Globe size={16} />
            <span>English</span>
          </div>
          <FaFacebook className="text-teal-400 cursor-pointer" size={18} />
          <FaInstagram className="text-teal-400 cursor-pointer" size={18} />
          <FaYoutube className="text-teal-400 cursor-pointer" size={18} />
        </div>
      </div>

      {/* Logo and Navbar */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-24 py-4">
          {/* Logo */}
          <div onClick={()=>navigate('/home')}  className="flex items-center space-x-2">
            <img
              src="https://apichospital.com/wp-content/uploads/2023/01/logo.png"
              alt="APIC Hospital"
              className="h-12"
            />
            <div>
              <h1 className="text-2xl font-bold text-teal-600">APIC</h1>
              <h2 className="text-xl font-semibold text-orange-500 -mt-1">
                HOSPITAL
              </h2>
              <p className="text-xs text-gray-500">Committed to Quality Care</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 font-semibold text-[16px] text-gray-800">
              <NavLink to='/home' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Home</NavLink>
              <NavLink to='/about' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>About Us</NavLink>
              <NavLink to='/services' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Services</NavLink>
              <NavLink to='/location-hours' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Location & Hours</NavLink>
              <NavLink to='/doctors' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Doctors</NavLink>
              <NavLink to='/appointment' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Appointment</NavLink>
              <NavLink to='/contact-us' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Contact Us</NavLink>
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
              <li className="text-teal-500 cursor-pointer">Home</li>
              <li className="hover:text-teal-500 cursor-pointer">About Us</li>
              <li className="hover:text-teal-500 cursor-pointer">Services</li>
              <li className="hover:text-teal-500 cursor-pointer">Location & Hours</li>
              <li className="hover:text-teal-500 cursor-pointer">Doctors</li>
              <li className="hover:text-teal-500 cursor-pointer">Appointment</li>
              <li className="hover:text-teal-500 cursor-pointer">Contact Us</li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default Header;
