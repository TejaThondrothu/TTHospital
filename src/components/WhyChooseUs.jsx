"use client";

const features = [
  { title: "Medical Advices & Check Ups", icon: "💊" },
  { title: "Trusted Medical Treatment", icon: "🏥" },
  { title: "Emergency Help Available 24/7", icon: "🚑" },
  { title: "Medical Research Professionals", icon: "🔬" },
  { title: "Only Qualified Doctors", icon: "👨‍⚕️" },
  { title: "Cutting Edge Facility", icon: "⚙️" },
  { title: "Affordable Prices For All Patients", icon: "💰" },
  { title: "Quality Care For Every Patient", icon: "❤️" },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-teal-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          <span className="font-semibold">Because we make seamless care accessible.</span> <br />
          At APIC Hospital, it is guaranteed that each and everyone receives the best customer
          and patient service with genuine regard to their insurance coverage and finance. 
          Profit comes after patient satisfaction because our doctors are who they are only 
          because of the continued support and faith of our clients.
          <br /><br />
          Where healthcare is becoming a luxury that is depriving many of the opportunity to
          get the care they deserve, we at APIC strive to bring the care facilities to them 
          without the hassles of corporate channels and intermediaries. Together, we will make 
          APIC Hospital one of the most preferred and best destinations for quality medical advice.
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-gray-700 font-medium text-center text-sm md:text-base">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
