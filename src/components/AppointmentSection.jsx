import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal';


const AppointmentSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-white via-[#e6f5f5] to-white py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Appointment
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Doctor Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <img
            src="https://apichospital.com/wp-content/uploads/2023/01/Female-Doctor-PNG-Isolated-Photo1-600x911.png"
            alt="Doctor"
            className="w-[300px] sm:w-[350px] md:w-[400px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-md text-emerald-800 font-semibold">
            To book an appointment at APIC Hospital, please call
          </p>

          <div className="flex justify-center lg:justify-start">
            <a
              href="tel:+917777999565"
              className="inline-flex items-center bg-[#04B8AC] hover:bg-[#039a91] text-white font-semibold px-6 py-3 rounded-lg text-lg transition"
            >
              +91-7777-999-565
            </a>
          </div>

          {/* Description */}
          <div className="text-sm text-gray-700 space-y-4">
            <p>
              Upon being allotted a specific time, please give the Reception or Recorder of the Appointment a brief...
            </p>
            <p>
              In order to cancel an appointment, kindly contact the above mentioned contact number...
            </p>
          </div>

          {/* Open Modal Button */}
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#04B8AC] hover:bg-[#039a91] text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Submit Appointment Request
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <AppointmentModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default AppointmentSection;
