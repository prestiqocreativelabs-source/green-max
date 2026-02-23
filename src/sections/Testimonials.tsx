import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: 'Sami Greenmax has delivered excellent work with professionalism and attention to detail. Their team transformed our sites into green, vibrant spaces. Highly recommended for any landscaping project.',
      author: 'Municipal Corporation',
      role: 'Gurugram',
      rating: 5,
    },
    {
      text: 'A reliable and quality-driven company with a strong technical base and creative vision. Their expertise in landscape design is unmatched in the industry.',
      author: 'NDMC',
      role: 'New Delhi',
      rating: 5,
    },
    {
      text: 'Outstanding coordination and timely completion of all landscaping works. Highly dependable partner for our infrastructure projects. Their commitment to quality is commendable.',
      author: 'HSIIDC',
      role: 'Haryana Industrial Development',
      rating: 5,
    },
    {
      text: 'The team at Sami Greenmax brought our vision to life with their innovative designs and professional execution. Our corporate campus has never looked better.',
      author: 'ITC Group',
      role: 'Corporate Client',
      rating: 5,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-green-50/30 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-100 rounded-full blur-3xl opacity-40 -translate-x-1/2" />

      <div className="section-padding max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <Star className="w-4 h-4 text-green-brand fill-green-brand" />
            <span className="text-sm font-medium text-green-brand">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-brand">Clients Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-green-brand rounded-2xl flex items-center justify-center shadow-lg z-10">
            <Quote className="w-8 h-8 text-white" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-premium">
            <div className="text-center pt-8">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-light italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-display text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-green-brand">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center hover:bg-green-brand hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-green-brand w-8'
                        : 'bg-green-200 hover:bg-green-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center hover:bg-green-brand hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
