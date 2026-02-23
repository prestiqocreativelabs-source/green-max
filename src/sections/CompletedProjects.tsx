import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CompletedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card');
      
      gsap.fromTo(
        cards || [],
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
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

  const projects = [
    {
      name: 'Rashtrapati Bhavan',
      location: 'New Delhi',
      description: 'Prestigious landscaping project at the Presidential Residence',
      image: '/images/projects/bhawan.png',
    },
    {
      name: 'Sagar Smart City',
      location: 'Madhya Pradesh',
      description: 'Comprehensive urban green infrastructure development',
      image: '/images/projects/sagar smart city.png',
    },
    {
      name: 'B.L.K. Super Specialty Hospital',
      location: 'New Delhi',
      description: 'Healing gardens and therapeutic landscape design',
      image: '/images/projects/bkl.png',
    },
    {
      name: 'Tarudhan Valley Golf & Villas',
      location: 'Gurgaon',
      description: 'Luxury golf course and villa landscaping',
      image: '/images/projects/golf.png',
    },
    {
      name: 'FMDA Project',
      location: 'Faridabad',
      description: 'Municipal infrastructure landscaping',
      image: '/images/projects/FMDA.png',
    },
    {
      name: 'Delhi University',
      location: 'New Delhi',
      description: 'Campus-wide landscape development and maintenance',
      image: '/images/projects/du.png',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-green-50/30 overflow-hidden"
    >
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-green-brand" />
            <span className="text-sm font-medium text-green-brand">Our Portfolio</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Successfully <span className="text-green-brand">Completed Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of our landmark projects that demonstrate our expertise and commitment to
            excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-premium transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Location Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <MapPin className="w-3 h-3 text-green-brand" />
                  <span className="text-xs font-medium text-gray-700">{project.location}</span>
                </div>

                {/* Completed Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-brand rounded-full">
                  <span className="text-xs font-medium text-white">Completed</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-green-brand transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
