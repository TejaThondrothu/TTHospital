import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";

const Footer = () => {
    const navigate= useNavigate();
  return (
    <footer className="bg-[#1d2a44] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div onClick={()=>navigate('/home')} className="cursor-pointer">
          <img
            src="https://apichospital.com/wp-content/uploads/2023/01/logo.png" // Replace with your logo path
            alt="APIC Hospital"
            className="h-12 mb-4"
          />
          <p className="text-sm text-gray-300 mb-4">
            At APIC Hospital, it is guaranteed that each and everyone receives
            the best customer and patient service with genuine regard to their
            insurance coverage and finance.
          </p>
          <a href="#appointment" className="text-teal-400 font-medium hover:underline">
            → Make Appointment
          </a>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Resources</li>
              <li>Health Information</li>
              <li>Research</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
              <li>News and Events</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 text-gray-300 text-sm md:flex md:flex-col">
              <NavLink to='/home' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Home</NavLink>
              <NavLink to='/about' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>About Us</NavLink>
              <NavLink to='/services' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Services</NavLink>
              <NavLink to='/location-hours' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Location & Hours</NavLink>
              <NavLink to='/doctors' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Doctors</NavLink>
              <NavLink to='/appointment' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Appointment</NavLink>
              <NavLink to='/contact-us' className={({isActive})=>isActive?"text-teal-500 cursor-pointer" : "hover:text-teal-500 cursor-pointer"}>Contact Us</NavLink>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-5 rounded-lg">
          <h3 className="font-semibold mb-3 text-[#0E204D] hover:text-teal-400">Quick Contacts</h3>
          <p className="text-sm text-gray-300 mb-2">
            If you have any questions or need help, feel free to contact us for
            medical assistance.
          </p>
          <p className="text-lg font-semibold text-[#0E204D] hover:text-teal-400">
            +91-7777-999-565
          </p>
          <p className="text-sm text-gray-300 mt-2">
            APIC Hospital <br />
            Opposite Sai Vijaya Diagnostic Center,<br />
            Sundariah Bhavan Road, Ongole,<br />
            Andhra Pradesh-523001
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
