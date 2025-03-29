'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  result: string;
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jennifer Martinez",
      position: "CEO",
      company: "TechSpark Solutions",
      image: "/images/testimonial-1.jpg",
      quote: "ApexNova's AI-driven marketing strategy completely transformed our lead generation. Their team's deep understanding of technology and marketing psychology created an approach that resonated with our target audience.",
      result: "105% increase in qualified leads"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "COO",
      company: "Global Retail Group",
      image: "/images/testimonial-2.jpg",
      quote: "The operational efficiency consulting we received from ApexNova helped us identify bottlenecks we didn't even know existed. Their AI analysis of our workflows led to concrete, actionable improvements.",
      result: "32% reduction in operational costs"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "HealthPlus",
      image: "/images/testimonial-3.jpg",
      quote: "Our website redesign with ApexNova was seamless and the results speak for themselves. They incorporated advanced AI features that personalize the experience for each visitor and drive conversions.",
      result: "87% increase in conversion rate"
    },
    {
      id: 4,
      name: "David Williams",
      position: "Founder",
      company: "Innovate Financial",
      image: "/images/testimonial-4.jpg",
      quote: "As a startup, we needed strategic guidance that would maximize our limited resources. ApexNova delivered insights backed by AI data analysis that helped us focus our efforts where they would have the most impact.",
      result: "Secured $2.5M in funding"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <div className="relative bg-white rounded-xl shadow-xl p-8 overflow-hidden">
      <div className="absolute top-6 right-6 text-5xl text-accent opacity-20">"</div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:w-1/3">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary">
              {/* Fallback image if the testimonial image doesn't load */}
              <div className="bg-primary-100 w-full h-full flex items-center justify-center text-2xl text-primary font-semibold">
                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-secondary-900">{currentTestimonial.name}</h4>
              <p className="text-secondary-600">{currentTestimonial.position}, {currentTestimonial.company}</p>
              
              <div className="mt-4 bg-accent-50 text-accent-700 px-4 py-2 rounded-full inline-block font-semibold">
                {currentTestimonial.result}
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-lg italic text-secondary-800 mb-6">"{currentTestimonial.quote}"</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={handlePrevClick}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-secondary-600 hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNextClick}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-secondary-600 hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 