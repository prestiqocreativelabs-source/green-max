import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.client-card');

      gsap.fromTo(
        cards || [],
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 18 Clients
  const clients = [
    { name: 'HSIIDC, IMT Palwal', type: 'Government', logo: '/images/clients/client-1.png' },
    { name: 'Municipal Corporation, Moradabad', type: 'Government', logo: '/images/clients/client-2.png' },
    { name: 'AMU Aligarh', type: 'Educational', logo: '/images/clients/client-3.png' },
    { name: 'Silver Glade Group, Gurugram', type: 'Private', logo: '/images/clients/client-4.png' },
    { name: 'Classic Golf Resorts', type: 'Private', logo: '/images/clients/client-5.png' },
    { name: 'ITC Group', type: 'Corporate', logo: '/images/clients/client-6.png' },
    { name: 'Municipal Corporation Gurugram', type: 'Government', logo: '/images/clients/client-7.png' },
    { name: 'UNDP, New Delhi', type: 'International', logo: '/images/clients/client-8.png' },
    { name: 'Municipal Corporation Sonipat', type: 'Government', logo: '/images/clients/client-9.png' },
    { name: 'NDMC, New Delhi', type: 'Government', logo: '/images/clients/client-10.png' },
    { name: 'Tarudhan Valley Golf & Villas', type: 'Private', logo: '/images/clients/client-11.png' },
    { name: 'B.L.K. Super Specialty Hospital', type: 'Healthcare', logo: '/images/clients/client-12.png' },
    { name: 'Rashtrapati Bhavan, New Delhi', type: 'Government', logo: '/images/clients/client-13.png' },
    { name: 'Sagar Smart City, MP', type: 'Government', logo: '/images/clients/client-14.png' },
    { name: 'FMDA', type: 'Government', logo: '/images/clients/client-15.png' },
    { name: 'Municipal Corporation of Faridabad', type: 'Government', logo: '/images/clients/client-16.png' },
    { name: 'Delhi University', type: 'Educational', logo: '/images/clients/client-17.png' },
    { name: 'Senso E Biz Solutions Ltd', type: 'Corporate', logo: '/images/clients/client-18.png' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="section-padding max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <Users className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">
              Our Clients
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted By <span className="text-green-brand">Leading Institutions</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly collaborate with government bodies, corporate organizations,
            and private institutions across India.
          </p>
        </div>

        {/* Clients Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-card bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="h-14 object-contain mb-4"
              />

              <h3 className="text-sm font-medium text-gray-800 leading-tight mb-1">
                {client.name}
              </h3>

              <span className="text-xs text-gray-500">
                {client.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;