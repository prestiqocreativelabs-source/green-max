import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Loader2, MapPin, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const OngoingProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.ongoing-card');
      
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

  const ongoingProjects = [
    {
      name: 'HSIIDC IMT Palwal',
      location: 'Haryana',
      status: 'In Progress',
      progress: 75,
      description: 'Industrial township landscaping project',
      image: '/images/ongoing/HSIIDC IMT Palwal.png',
    },
    {
      name: 'Municipal Corporation Moradabad',
      location: 'Uttar Pradesh',
      status: 'In Progress',
      progress: 60,
      description: 'Urban green infrastructure development',
      image: '/images/ongoing/Municipal Corporation Moradabad.png',
    },
    {
      name: 'AMU Aligarh',
      location: 'Uttar Pradesh',
      status: 'In Progress',
      progress: 45,
      description: 'University campus landscape development',
      image: '/images/ongoing/AMU Aligarh.png',
    },
    {
      name: 'Silver Glade Group',
      location: 'Gurugram',
      status: 'In Progress',
      progress: 80,
      description: 'Residential complex landscaping',
      image: '/images/ongoing/Silver Glade Group.png',
    },
    {
      name: 'Classic Golf Resorts',
      location: 'Gurugram',
      status: 'In Progress',
      progress: 55,
      description: 'Golf course maintenance and enhancement',
      image: '/images/ongoing/Classic Golf Resorts.png',
    },
    {
      name: 'Municipal Corporation Gurugram',
      location: 'Haryana',
      status: 'In Progress',
      progress: 70,
      description: 'City-wide green infrastructure project',
      image: '/images/ongoing/Municipal Corporation Gurugram.png',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <Loader2 className="w-4 h-4 text-green-brand animate-spin" />
            <span className="text-sm font-medium text-green-brand">Current Work</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ongoing <span className="text-green-brand">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Projects currently under execution, showcasing our continuous commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {ongoingProjects.map((project, index) => (
            <div
              key={index}
              className="ongoing-card group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-premium transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
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

                {/* Status Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 rounded-full flex items-center gap-1">
                  <Loader2 className="w-3 h-3 text-white animate-spin" />
                  <span className="text-xs font-medium text-white">{project.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-green-brand transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Progress
                    </span>
                    <span className="font-medium text-green-brand">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-brand to-green-light rounded-full transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
