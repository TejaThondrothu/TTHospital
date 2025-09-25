import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { translate } = useLanguage();
    return (
      <section className="w-full px-4 md:px-16 lg:px-24 py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Title */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 leading-snug">
            {translate('about.title')}
          </h2>
  
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Side - Icon, Text, Button */}
            <div className="flex flex-col items-start space-y-4 md:space-y-6">
              {/* Icon */}
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 md:h-12 w-10 md:w-12 text-teal-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zM20 21v-2c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v2" />
                </svg>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  {translate('about.description1')}
                </p>
              </div>
  
              {/* Button */}
              <button className="px-4 md:px-6 py-2 bg-teal-500 text-white font-semibold text-sm md:text-base rounded-full shadow hover:bg-teal-600 transition">
                {translate('about.appointment')}
              </button>
            </div>
  
            {/* Right Side - Paragraph */}
            <div className="text-gray-600 space-y-3 md:space-y-4 text-justify text-sm md:text-base">
              <p>
                {translate('about.paragraph1')}
              </p>
              <p>
                {translate('about.paragraph2')}
              </p>
              <p>
                {translate('about.paragraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  