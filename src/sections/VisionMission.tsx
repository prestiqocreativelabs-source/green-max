import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.vm-card');
      
      gsap.fromTo(
        cards || [],
        { opacity: 0, y: 60, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-50 to-transparent rounded-full opacity-50" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-brand rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-brand">Our Direction</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
            Vision & <span className="text-green-brand">Mission</span>
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="vm-card group relative bg-gradient-to-br from-green-brand to-green-800 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Icon */}
            <div className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Eye className="w-10 h-10 text-white" />
            </div>

            {/* Content */}
            <h3 className="relative font-display text-3xl lg:text-4xl font-bold mb-6">
              Our Vision
            </h3>
            <p className="relative text-lg text-white/90 leading-relaxed">
              To become India's leading landscape and environmental development company by
              promoting sustainable green solutions for a cleaner, healthier planet. We envision
              a future where every urban space is harmoniously integrated with nature.
            </p>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          </div>

          {/* Mission Card */}
          <div className="vm-card group relative bg-white rounded-3xl p-8 lg:p-12 border-2 border-green-100 overflow-hidden hover:border-green-300 transition-colors duration-500">
            {/* Icon */}
            <div className="relative w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-brand group-hover:scale-110 transition-all duration-500">
              <Target className="w-10 h-10 text-green-brand group-hover:text-white transition-colors duration-500" />
            </div>

            {/* Content */}
            <h3 className="relative font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-green-brand transition-colors duration-300">
              Our Mission
            </h3>
            <p className="relative text-lg text-gray-600 leading-relaxed">
              To deliver eco-friendly, innovative, and high-quality landscaping services through
              professionalism, technology, and teamwork — contributing to environmental balance
              and client satisfaction. We are committed to transforming spaces while preserving
              nature.
            </p>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
