export default function AboutSection() {
    return (
      <section className="w-full px-6 md:px-16 lg:px-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 leading-snug">
            Improving The <span className="text-blue-700">Quality Of Your Life</span> <br />
            Through Better Health.
          </h2>
  
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Icon, Text, Button */}
            <div className="flex flex-col items-start space-y-6">
              {/* Icon */}
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zM20 21v-2c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v2" />
                </svg>
                <p className="text-gray-700 font-medium">
                  At APIC Hospital, it is guaranteed that each and everyone receives the best customer and patient service
                </p>
              </div>
  
              {/* Button */}
              <button className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-full shadow hover:bg-teal-600 transition">
                Appointment
              </button>
            </div>
  
            {/* Right Side - Paragraph */}
            <div className="text-gray-600 space-y-4 text-justify">
              <p>
                Establishment of APIC Hospital has been a vision of the doctors stationed there for 
                the sole purpose of providing the best medical services at reasonable costs at a 
                time where high prices are alienating the needy for availing necessary medical services.
              </p>
              <p>
                At APIC Hospital, it is guaranteed that each and everyone receives the best customer 
                and patient service with genuine regard to their insurance coverage and finance. For 
                APIC Hospital, profit comes after patient satisfaction because our doctors are who 
                they are only because of the continued support and faith of our clients.
              </p>
              <p>
                Our Vision, Mission and Values are aligned to the best interests of our patients and together, 
                we will work with our clients, doctors and society to make APIC Hospital one of the most 
                preferred and best destinations for quality medical advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  