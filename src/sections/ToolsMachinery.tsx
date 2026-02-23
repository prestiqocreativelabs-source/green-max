import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wrench, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ToolsMachinery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll('.tool-card');
      gsap.fromTo(
        cards || [],
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tools = [
    { name: 'JCB', count: '01', image: '/images/tools/tool-1.jpg' },
    { name: 'Water Tanker', count: '02', image: '/images/tools/tool-2.jpg' },
    { name: 'Lawn Mower', count: '03', image: '/images/tools/tool-3.jpg' },
    { name: 'Leveler', count: '04', image: '/images/tools/tool-4.jpg' },
    { name: 'Dumper', count: '05', image: '/images/tools/tool-5.jpg' },
    { name: 'Tandem Roller', count: '06', image: '/images/tools/tool-6.jpg' },
    { name: 'Trolley', count: '07', image: '/images/tools/tool-7.jpg' },
    { name: 'Tractor', count: '08', image: '/images/tools/tool-8.jpg' },
    { name: 'Brush Cutter', count: '09', image: '/images/tools/tool-9.jpg' },
    { name: 'Earth Auger', count: '10', image: '/images/tools/tool-10.jpg' },
    { name: 'Truck & Trailer', count: '11', image: '/images/tools/tool-11.jpg' },
    { name: 'Generator Set', count: '12', image: '/images/tools/tool-12.jpg' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <Wrench className="w-4 h-4 text-green-brand" />
            <span className="text-sm font-medium text-green-brand">Our Equipment</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tools & <span className="text-green-brand">Machinery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our operations are supported by modern equipment ensuring efficiency and precision in
            every project we undertake.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            'JCB & Excavators',
            'Tractors & Tankers',
            'Levelers & Rollers',
            'Lawn Mowers',
            'Dumpers & Trolleys',
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full"
            >
              <Check className="w-4 h-4 text-green-brand" />
              <span className="text-sm font-medium text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className="tool-card group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-green-brand rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">{tool.count}</span>
              </div>

              <div className="relative h-32 lg:h-40 overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-medium text-gray-900 group-hover:text-green-brand transition-colors duration-300">
                  {tool.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsMachinery;