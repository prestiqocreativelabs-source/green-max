import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-info',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.contact-form',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Enquiry from ${formData.name}: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:samigreenmax1980@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Project Office',
      content: 'House No 417, Opp. Gyan Devi School, Sector-10, Gurugram (Haryana) 122001',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98103 22073',
      href: 'tel:+919810322073',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'samigreenmax1980@gmail.com',
      href: 'mailto:samigreenmax1980@gmail.com',
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.samigreenmax.com',
      href: 'https://www.samigreenmax.com',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <Send className="w-4 h-4 text-green-brand" />
            <span className="text-sm font-medium text-green-brand">Get In Touch</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-green-brand">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your journey with us. Reach out for inquiries, quotes, or to discuss your
            landscaping needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="contact-info space-y-6">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-green-brand rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-600 hover:text-green-brand transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-green-brand mx-auto mb-2" />
                <p className="text-gray-600">Gurugram, Haryana, India</p>
                <a
                  href="https://maps.google.com/?q=Gurugram,Haryana,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-brand hover:underline text-sm mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white rounded-3xl p-8 shadow-premium border border-gray-100">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-brand" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">
                    Your message has been sent. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-brand focus:ring-2 focus:ring-green-brand/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-brand focus:ring-2 focus:ring-green-brand/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-brand focus:ring-2 focus:ring-green-brand/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-brand focus:ring-2 focus:ring-green-brand/20 outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Landscape Design">Landscape Design</option>
                        <option value="Maintenance Services">Maintenance Services</option>
                        <option value="Project Quote">Project Quote</option>
                        <option value="Career">Career Opportunity</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-brand focus:ring-2 focus:ring-green-brand/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-green-brand text-white font-semibold rounded-xl hover:bg-green-800 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, your email client will open with a pre-filled message.
                    You can then send the email directly to us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
