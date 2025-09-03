import React from "react";
//import doctorImage from "../assets/doctor.png"; // replace with your doctor image

const Appointment = () => {
  return (
    <section className="bg-teal-400 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Doctor Image */}
        <div className="flex justify-center">
          <img
            src="https://apichospital.com/wp-content/uploads/2023/01/Female-Doctor-PNG-Isolated-Photo1.png"
            alt="Doctor"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>

        {/* Appointment Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
          <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
            Book an Appointment
          </h2>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="3"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
                placeholder="Write your message"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
