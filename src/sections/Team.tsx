import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.team-card');

      gsap.fromTo(
        cards || [],
        { opacity: 0, y: 50, scale: 0.9 },
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

  const team = [
    {
      name: 'Mrs. Shabana Begum',
      position: 'Founder',
      image: '/images/team/shabana-begum.jpg',
      description: 'Visionary leader with a passion for sustainable landscaping',
    },
    {
      name: 'Er. Haider Khan',
      position: 'CEO & Director',
      image: '/images/team/haider-khan.jpg',
      description: 'Driving growth and innovation in landscape solutions',
    },
    {
      name: 'Mr. Raghvendra Sharma',
      position: 'Director',
      image: '/images/team/raghvendra-sharma.jpg',
      description: 'Expert in project execution and client relations',
    },
    {
      name: 'Er. Amjad Khan',
      position: 'Director',
      image: '/images/team/amjad-khan.jpg',
      description: 'Technical expertise in landscape architecture',
    },
    {
      name: 'Er. Rajesh Rathore',
      position: 'Director',
      image: '/images/team/rajesh-rathore.jpg',
      description: 'Specialized in large-scale infrastructure projects',
    },
    {
      name: 'Mr. Mohd Kashif',
      position: 'HR Head',
      image: '/images/team/mohd-kashif.jpg',
      description: 'Building and nurturing our talented team',
    },
    {
      name: 'Mr. Janardan P. Kaphle',
      position: 'Field Manager',
      image: '/images/team/janardan-kaphle.jpg',
      description: 'Ensuring excellence in on-ground execution',
    },

    // ✅ NEW MEMBER — replace details below
    {
      name: 'Pankaj Kalonia',
      position: 'Finance Head',
      image: '/images/team/Pankaj Kalonia.jpg',
      description: 'Managing the funds with the elcellence',
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-50 to-transparent rounded-full opacity-50" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-brand rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-brand">Our People</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-green-brand">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Behind every successful project stands a dedicated and skilled team. Together, our
            professionals bring technical expertise, innovation, and commitment to every landscape
            we build.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-brand hover:text-white transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-brand hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-green-brand text-white text-xs font-medium rounded-full">
                    {member.position}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-green-brand transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
