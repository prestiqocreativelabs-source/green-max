import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Palette,
  Scissors,
  Droplets,
  Mountain,
  Home,
  Building2,
  Bug,
  Flower2,
  TreePine,
  LayoutGrid,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

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

      const cards = gridRef.current?.querySelectorAll('.service-card');
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
            trigger: gridRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Landscape Design & Planning',
      description:
        'We provide comprehensive landscape drawings, design, and planning services that transform your vision into reality. Our expert team creates detailed blueprints and 3D visualizations to help you envision your outdoor space before construction begins. From concept to completion, we ensure every element is perfectly planned.',
      image: '/images/services/landscape-design.jpg',
    },
    {
      icon: Scissors,
      title: 'Garden Maintenance',
      description:
        'Our professional garden maintenance services ensure your landscape remains pristine throughout the year. We offer regular pruning, fertilization, weed control, seasonal planting, and comprehensive care programs tailored to your specific garden needs. Our skilled horticulturists keep your green spaces thriving.',
      image: '/images/services/garden-maintenance.jpg',
    },
    {
      icon: Droplets,
      title: 'Irrigation System Design',
      description:
        'We design and install state-of-the-art irrigation systems that ensure optimal water distribution for your landscape. Our smart irrigation solutions include drip systems, sprinkler networks, and automated controls that conserve water while keeping your plants healthy. We also provide maintenance and repair services.',
      image: '/images/services/irrigation-new.jpg',
    },
    {
      icon: Mountain,
      title: 'Hardscaping',
      description:
        'Our hardscaping services add structure and functionality to your outdoor spaces. We specialize in designing and constructing patios, walkways, retaining walls, pergolas, outdoor kitchens, and water features using premium materials that complement your landscape design and withstand the test of time.',
      image: '/images/services/hardscaping.jpg',
    },
    {
      icon: Home,
      title: 'Farmhouse Development',
      description:
        'Transform your farmhouse into a luxurious retreat with our specialized development and renovation services. We create stunning outdoor living spaces, gardens, orchards, and recreational areas that enhance the beauty and value of your rural property while maintaining its natural charm.',
      image: '/images/services/farmhouse-development.jpg',
    },
    {
      icon: Building2,
      title: 'Terrace & Rooftop Gardens',
      description:
        'Maximize your urban space with our innovative terrace and rooftop garden designs. We create stunning green oases in the sky, complete with proper waterproofing, drainage systems, lightweight growing media, and a variety of plants that thrive in elevated environments.',
      image: '/images/services/rooftop-garden.jpg',
    },
    {
      icon: Bug,
      title: 'Pest & Disease Management',
      description:
        'Protect your plants with our eco-friendly pest and disease management services. Our experts identify, treat, and prevent plant health issues using integrated pest management techniques that minimize chemical use while ensuring healthy, vibrant plant growth.',
      image: '/images/services/pest-management.jpg',
    },
    {
      icon: Flower2,
      title: 'Lawn Development',
      description:
        'Create the perfect lawn with our comprehensive turf management services. From soil preparation and seeding to regular maintenance and seasonal care, we ensure your lawn remains lush, green, and healthy year-round. We work with various grass types suited to your climate and usage.',
      image: '/images/services/lawn-development.jpg',
    },
    {
      icon: TreePine,
      title: 'Interior & Exterior Green Décor',
      description:
        'Enhance your spaces with our biophilic design solutions. We create stunning indoor plant arrangements, living walls, and exterior green installations that bring nature into your environment, improving air quality and creating calming, beautiful spaces.',
      image: '/images/services/interior-decor.jpg',
    },
    {
      icon: LayoutGrid,
      title: 'Civil Infrastructure Landscaping',
      description:
        'We specialize in large-scale infrastructure projects including road medians, public parks, government buildings, and commercial complexes. Our team handles everything from design to execution, ensuring compliance with all regulations while creating beautiful, functional public spaces.',
      image: '/images/services/civil-infrastructure.jpg',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-green-50/30 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006039' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-brand rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-brand">What We Offer</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-brand">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide complete landscaping and horticultural solutions for both government and
            private sectors. From design to maintenance, we handle every aspect of your landscape
            needs.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-premium transition-all duration-500"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="grid lg:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-48 lg:h-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-t" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-brand transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-green-brand group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="font-display text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-brand transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p
                    className={`text-gray-600 text-sm leading-relaxed transition-all duration-500 ${
                      activeService === index ? 'line-clamp-none' : 'line-clamp-4'
                    }`}
                  >
                    {service.description}
                  </p>

                  <button className="mt-4 text-green-brand font-medium text-sm flex items-center gap-2 group/btn">
                    <span className="w-4 h-4 rounded-full bg-green-brand/10 flex items-center justify-center group-hover/btn:bg-green-brand group-hover/btn:text-white transition-all duration-300">
                      <svg
                        className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
