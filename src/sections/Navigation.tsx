import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAV WRAPPER (Safe Centering) */}
      <nav className="fixed top-4 inset-x-0 z-50 flex justify-center transition-all duration-500">
        <div
          className={`w-full max-w-6xl mx-4 sm:mx-6
          rounded-full
          bg-white/100 backdrop-blur-xl
          border border-white/30
          shadow-lg
          transition-all duration-500
          ${isScrolled ? 'shadow-2xl bg-white/90' : ''}`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">

            {/* Left Links - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-gray-700 hover:text-green-brand transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-green-brand transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </button>
              ))}
            </div>

            {/* Logo + Company Name */}
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-3 mx-2 lg:mx-8"
            >
              <img
                src="/images/logo.jpeg"
                alt="Sami Greenmax"
                className="h-10 sm:h-12 lg:h-14 w-auto max-w-[140px]"
              />

              {/* Mobile Company Name */}
              <div className="flex flex-col text-left lg:hidden">
                <span className="text-sm font-semibold text-gray-800 leading-tight">
                  Sami Greenmax
                </span>
                <span className="text-[10px] text-green-brand leading-tight">
                  Landscape Pvt. Ltd.
                </span>
              </div>

              {/* Desktop Tagline */}
              <span className="hidden lg:block text-[10px] font-medium text-green-brand mt-0.5 tracking-wider">
                Sustaining Nature
              </span>
            </button>

            {/* Right Links - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.slice(3).map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-gray-700 hover:text-green-brand transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-green-brand transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-green-brand transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-display font-medium text-gray-800 hover:text-green-brand transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;