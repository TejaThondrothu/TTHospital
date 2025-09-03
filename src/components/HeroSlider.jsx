import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://apichospital.com/wp-content/uploads/2023/02/bg_1.jpg.jpg", // replace with your image
    text: "Improving The Quality Of Your Life Through Better Health",
  },
  {
    id: 2,
    image: "https://apichospital.com/wp-content/uploads/2023/02/h1_slider1.jpg",
    text: "Providing The Best Medical Claim For The Community",
  },
  {
    id: 3,
    image: "https://apichospital.com/wp-content/uploads/2023/01/img-4-e1674723563138.jpg",
    text: "Your Health, Our Priority",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-medium mb-6 text-[#132C52]">
              {slide.text}
            </h2>
            <button className="bg-[#253A6B] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#1a2a50] transition border-2 border-white">
              Appointment
            </button>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
      >
        <ChevronLeft size={28} className="text-[#253A6B]" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
      >
        <ChevronRight size={28} className="text-[#253A6B]" />
      </button>
    </div>
  );
}

export default HeroSlider;
