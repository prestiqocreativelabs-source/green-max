import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import CoreValues from './sections/CoreValues';
import VisionMission from './sections/VisionMission';
import CEOMessage from './sections/CEOMessage';
import FounderMessage from './sections/FounderMessage';
import Services from './sections/Services';
import ToolsMachinery from './sections/ToolsMachinery';
import KeyDifferentiators from './sections/KeyDifferentiators';
import CompanyGrowth from './sections/CompanyGrowth';
import CompletedProjects from './sections/CompletedProjects';
import OngoingProjects from './sections/OngoingProjects';
import Clients from './sections/Clients';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect Lenis to ScrollTrigger
    lenisRef.current.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <VisionMission />
        <CEOMessage />
        <FounderMessage />
        <Services />
        <ToolsMachinery />
        <KeyDifferentiators />
        <CompanyGrowth />
        <CompletedProjects />
        <OngoingProjects />
        <Clients />
        <Team />
        <Testimonials />
        <Gallery />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
