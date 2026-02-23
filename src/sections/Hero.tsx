import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [logoRef.current, titleRef.current, subtitleRef.current, ctaRef.current],
        { opacity: 0, y: 30 }
      );

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      })
        .to(
          titleRef.current,
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.6'
        )
        .to(
          subtitleRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .to(
          ctaRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' },
          '-=0.4'
        );

      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover pointer-events-none"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          controls={false}
          disablePictureInPicture
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <img
          ref={logoRef}
          src="/images/logo.jpeg"
          alt="Sami Greenmax Landscape"
          className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 rounded-full shadow-2xl bg-white/10 backdrop-blur-sm p-2"
        />

        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Sustaining Nature,
          <br />
          <span className="text-green-300">Shaping Tomorrow</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto"
        >
          Sami Greenmax Landscape Pvt. Ltd.
          <br />
          <span className="text-base sm:text-lg text-white/70">
            India's Trusted Name in Integrated Landscape & Horticulture Solutions
          </span>
        </p>

        <button
          ref={ctaRef}
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-green-brand font-semibold rounded-full hover:bg-green-50 transition-all duration-300 shadow-premium hover:shadow-2xl hover:-translate-y-1"
        >
          Explore Our World
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;