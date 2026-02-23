import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CEOMessage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -80, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
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
      className="relative py-20 lg:py-32 bg-gradient-to-b from-green-50/50 to-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />

      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-premium">
                <img
                  src="/images/team/haider-khan.jpg"
                  alt="Er. Haider Khan - CEO"
                  className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Name Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <h3 className="font-display text-xl font-bold text-gray-900">Er. Haider Khan</h3>
                <p className="text-green-brand font-medium">CEO & Director</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-green-200 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-accent rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div ref={contentRef} className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
              <span className="w-2 h-2 bg-green-brand rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-brand">Leadership Message</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Message from our <span className="text-green-brand">CEO</span>
            </h2>

            {/* Quote Icon */}
            <div className="w-12 h-12 bg-green-brand rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                At Sami Greenmax, we believe that landscaping is not just about beautification —
                it's about creating balance between nature and development.
              </p>
              <p>
                Over the years, our focus has been to deliver projects that inspire harmony and
                sustainability. We take pride in our team's commitment, professionalism, and
                passion for excellence.
              </p>
              <p>
                Together, we aim to continue shaping a greener tomorrow for generations to come.
                Our journey is not just about growing a business; it's about nurturing the
                environment and creating spaces where people can connect with nature.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-gray-100">
              <p className="font-display text-2xl text-green-brand italic">Er. Haider Khan</p>
              <p className="text-gray-500">CEO & Director, Sami Greenmax Landscape Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
