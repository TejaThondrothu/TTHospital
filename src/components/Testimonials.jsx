import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sivakumar S",
      role: "Accountant",
      message:
        "The services of APIC Hospital is of excellent quality. The doctors and nursing staff are caring & their behavior is very polite.",
    },
    {
      name: "Rahul Madhav",
      role: "Advocate",
      message:
        "I am writing to express my gratitude from my family for the care given to my mother. At APIC, there was care, compassion, and respect.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-teal-600 uppercase text-sm font-semibold">
          what our patients say about us
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Our Testimonials
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl text-gray-700"
            >
              <p className="mb-4">{t.message}</p>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
