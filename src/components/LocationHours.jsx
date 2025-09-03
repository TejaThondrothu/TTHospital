import React from 'react';

const LocationHours = () => {
  return (
    <div className="bg-white font-sans min-h-screen px-4 py-12 sm:px-6 lg:px-20">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Location and hours
      </h2>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 bg-white">

        {/* Left Section */}
        <div className="lg:col-span-2">
          <div className="bg-white text-gray-700 rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">

            {/* Description */}
            <p>
              APIC Hospital has its location in the state of Andhra Pradesh where help is ensured to not make
              language and distance obstacles to receiving world-class care.
            </p>
            <p>
              Our arms are never closed for any person in need and will always strive to accommodate anyone
              anytime. We are open for 24 hours and for ease of meeting with our doctors and faster service,
              prior appointment or pre-booking at a convenient time slot is advised.
            </p>

            {/* Address Box */}
            <div className="bg-blue-100 text-blue-900 font-semibold p-4 rounded">
              <p>
                APIC Hospital,<br />
                Opposite Sai Vijaya Diagnostic Center,<br />
                Sundaraiah Bhavan Road,<br />
                Ongole, Andhra Pradesh - 523001
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6 rounded overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="APIC Hospital Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.392715773311!2d80.04155841461865!3d15.500264989233664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a065b09df2db5%3A0xd7bd4795e9a009ea!2sAPIC%20Hospital%20-%20Best%20Diabetes%20%26%20General%20Hospital!5e0!3m2!1sen!2sin!4v1693662938046!5m2!1sen!2sin"
              className="w-full h-72"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Call Us */}
          <div className="bg-gradient-to-b from-teal-400 to-teal-500 text-white p-6 rounded shadow-md text-center">
            <div className="flex justify-center mb-3">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 15a2 2 0 01-2 2h-3l-3 3v-3H9a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-2xl font-bold">+91-7777-999-565</p>
          </div>

          {/* Working Hours */}
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-gray-600 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 8h18M3 16h18M8 3v2M16 3v2M4 11h16" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Emergency:</strong> 24 x 7</li>
              <li><strong>Mon – Sat:</strong> 9 am to 8 pm</li>
              <li><strong>Sunday:</strong> 9 am to 2 pm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHours;
