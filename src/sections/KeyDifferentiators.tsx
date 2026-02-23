import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Palette, Building2, Headphones, BadgeIndianRupee, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const KeyDifferentiators = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.diff-card');
      
      gsap.fromTo(
        cards || [],
        { opacity: 0, y: 50, rotateY: -15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.12,
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

  const differentiators = [
    {
      icon: Clock,
      title: 'Timely Execution',
      description: 'Strong quality control with on-time project delivery guaranteed.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Palette,
      title: 'Art & Science Blend',
      description: 'Combination of art, science, and environmental design expertise.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Building2,
      title: 'End-to-End Solutions',
      description: 'Complete landscaping and civil infrastructure under one roof.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Headphones,
      title: 'Long-term Support',
      description: 'Maintenance and after-service support for all projects.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: BadgeIndianRupee,
      title: 'Competitive Pricing',
      description: 'Best rates with assured plant quality and service excellence.',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-green-50/30 to-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-green-brand" />
            <span className="text-sm font-medium text-green-brand">Why Choose Us</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Key <span className="text-green-brand">Differentiators</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What sets us apart from the competition and makes us the preferred choice for
            landscaping solutions.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="diff-card group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-premium transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-green-brand transition-colors duration-300">
                {item.title}
              </h3>
              <p className="relative text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Decorative Number */}
              <div className="absolute top-4 right-4 text-5xl font-display font-bold text-gray-100 group-hover:text-green-100 transition-colors duration-500">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators;
