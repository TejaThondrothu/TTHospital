import React from 'react';

const AppointmentModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md p-8 w-full max-w-2xl relative shadow-xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
          Appointment
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Please note: Appointment by online to be done 24 hours prior
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
            />
          </div>

          {/* Phone & Date */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#04B8AC] hover:bg-[#039a91] text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
