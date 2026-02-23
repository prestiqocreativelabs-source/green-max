import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, FileCheck, BadgeCheck, TrendingUp, X, Eye, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; type: string } | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.cert-card');

      gsap.fromTo(
        cards || [],
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certifications = [
    {
      icon: FileCheck,
      title: 'Company Registration',
      description:
        'Sami Greenmax Landscape Pvt. Ltd. is a legally registered company under the Companies Act, 2013.',
      status: 'Verified',
      docType: 'company-registration',
      docAvailable: true,
    },
    {
      icon: BadgeCheck,
      title: 'GST Registration',
      description:
        'Registered under GST with complete tax compliance for all business operations.',
      status: 'Active',
      docType: 'gst-registration',
      docAvailable: true,
    },
    {
      icon: Award,
      title: 'PAN Card',
      description:
        'Permanent Account Number registered with the Income Tax Department of India.',
      status: 'Valid',
      docType: 'pan-card',
      docAvailable: true,
    },
    {
      icon: TrendingUp,
      title: 'Financial Information',
      description:
        'Annual financial reports and audited statements showcasing company stability.',
      status: 'Available',
      docType: 'financial-info',
      docAvailable: true,
    },
  ];

  const strengths = [
    '15+ Years of Industry Experience',
    'In-house Production Units in Uttar Pradesh',
    'Dedicated Design, Execution, and Maintenance Teams',
    'Proven Record with Government & Corporate Clients',
    'Focus on Sustainable & Eco-Friendly Landscaping',
    'Over 3,500 Plant Species in Regular Supply',
  ];

  const openDocument = (title: string, docType: string) => {
    setSelectedDoc({ title, type: docType });
    document.body.style.overflow = 'hidden';
  };

  const closeDocument = () => {
    setSelectedDoc(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-green-50/30 to-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40 translate-x-1/2" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <Award className="w-4 h-4 text-green-brand" />
            <span className="text-sm font-medium text-green-brand">Credentials</span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Certifications & <span className="text-green-brand">Compliance</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of compliance and quality assurance in all our
            operations. Click on any certification to view the document.
          </p>
        </div>

        {/* Certification Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => cert.docAvailable && openDocument(cert.title, cert.docType)}
              className={`cert-card group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                cert.docAvailable ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-green-brand transition-colors duration-300">
                <cert.icon className="w-7 h-7 text-green-brand group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-green-brand transition-colors duration-300">
                {cert.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">{cert.description}</p>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-brand text-xs font-medium rounded-full">
                  <BadgeCheck className="w-3 h-3" />
                  {cert.status}
                </span>

                {cert.docAvailable && (
                  <span className="flex items-center gap-1 text-xs text-green-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 h-3" />
                    View
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-br from-green-brand to-green-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                All projects are executed under strict quality standards, ensuring premium-grade
                materials and healthy plants.
              </p>
            </div>

            <div className="space-y-3">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Document Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-green-brand" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    {selectedDoc.title}
                  </h3>
                  <p className="text-sm text-gray-500">Official Document</p>
                </div>
              </div>

              <button
                onClick={closeDocument}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="p-6 bg-gray-50">
              <iframe
                src={`/documents/${selectedDoc.type}.pdf`}
                title={selectedDoc.title}
                className="w-full h-[70vh] rounded-xl border"
              />
            </div>

            <div className="p-6 border-t border-gray-100 bg-white">
              <p className="text-center text-sm text-gray-500">
                This document is displayed for verification purposes.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;