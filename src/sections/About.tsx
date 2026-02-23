import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Calendar, TreePine } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats counter animation
      const statElements = statsRef.current?.querySelectorAll('.stat-number');
      statElements?.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Calendar, value: 15, suffix: '+', label: 'Years Experience' },
    { icon: Award, value: 150, suffix: '+', label: 'Projects Completed' },
    { icon: TreePine, value: 3500, suffix: '+', label: 'Plant Species' },
    { icon: Users, value: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-100 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2" />

      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img
                src="/images/about-image.jpg"
                alt="Planting a tree"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-brand rounded-full flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-green-brand">15+</p>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-green-200 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-accent rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div ref={contentRef} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
              <span className="w-2 h-2 bg-green-brand rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-brand">About Our Company</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About <span className="text-green-brand">Sami Greenmax</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Sami Greenmax Landscape Pvt. Ltd. is one of India's most trusted names in integrated
              landscape and horticulture solutions. With over 15 years of proven excellence, the
              company specializes in large-scale landscape design, execution, and maintenance for
              government, corporate, and institutional projects across the country.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Backed by advanced infrastructure, technical expertise, and a skilled team, Sami
              Greenmax consistently delivers high-quality, sustainable, and cost-effective green
              solutions. We believe that landscaping is not just about beautification — it's about
              creating balance between nature and development.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-green-brand">
                <Award className="w-5 h-5" />
                <span className="font-medium">Certified Company</span>
              </div>
              <div className="flex items-center gap-2 text-green-brand">
                <Users className="w-5 h-5" />
                <span className="font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-green-brand">
                <TreePine className="w-5 h-5" />
                <span className="font-medium">Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-premium transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-brand transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-green-brand group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-1">
                <span className="stat-number" data-target={stat.value}>
                  0
                </span>
                {stat.suffix}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
