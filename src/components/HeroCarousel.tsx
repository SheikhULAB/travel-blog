import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  location: string;
};

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
      title: "Conquering the Himalayas",
      subtitle: "An incredible journey through Nepal's majestic peaks",
      location: "Nepal",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
      title: "Tropical Paradise Discovery",
      subtitle: "Island hopping in the crystal-clear waters of the Maldives",
      location: "Maldives",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
      title: "Sahara Desert Adventure",
      subtitle: "Camel trekking under the endless Moroccan sky",
      location: "Morocco",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white space-y-6 max-w-4xl px-4">
                <div className="text-sm font-medium tracking-widest uppercase opacity-80">
                  {slide.location}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 animate-slide-up">
                  {slide.subtitle}
                </p>
                <Button className="btn-primary text-lg px-8 py-4 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                  Explore This Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
