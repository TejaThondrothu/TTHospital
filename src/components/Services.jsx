import React from "react";
import { FaStethoscope, FaUserMd, FaAmbulance } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "General Consultation",
      description:
        "Our experienced doctors provide expert advice and consultation for all health concerns.",
      icon: <FaStethoscope className="text-4xl text-blue-600 mb-4" />,
    },
    {
      id: 2,
      title: "Specialist Doctors",
      description:
        "Consult with highly qualified specialists across various fields of medicine.",
      icon: <FaUserMd className="text-4xl text-green-600 mb-4" />,
    },
    {
      id: 3,
      title: "Emergency Services",
      description:
        "24/7 emergency care with quick ambulance support for critical patients.",
      icon: <FaAmbulance className="text-4xl text-red-600 mb-4" />,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
