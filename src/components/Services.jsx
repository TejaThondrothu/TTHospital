import React from "react";
import { FaStethoscope, FaUserMd, FaAmbulance } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { translate } = useLanguage();
  
  const services = [
    {
      id: 1,
      title: translate('services.general.title'),
      description: translate('services.general.description'),
      icon: <FaStethoscope className="text-3xl md:text-4xl text-blue-600 mb-4" />,
    },
    {
      id: 2,
      title: translate('services.specialist.title'),
      description: translate('services.specialist.description'),
      icon: <FaUserMd className="text-3xl md:text-4xl text-green-600 mb-4" />,
    },
    {
      id: 3,
      title: translate('services.emergency.title'),
      description: translate('services.emergency.description'),
      icon: <FaAmbulance className="text-3xl md:text-4xl text-red-600 mb-4" />,
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
          {translate('services.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {service.icon}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
