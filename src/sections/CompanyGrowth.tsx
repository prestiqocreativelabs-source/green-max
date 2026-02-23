import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Building, FileCheck, Wallet } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CompanyGrowth = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const totalRef = useRef<HTMLDivElement>(null);

  const revenueData = [
    { year: '2019-20', revenue: 42.55, color: '#0b3d2e' },
    { year: '2020-21', revenue: 50.80, color: '#115c42' },
    { year: '2021-22', revenue: 74.67, color: '#1d7a57' },
    { year: '2022-23', revenue: 101.13, color: '#2e9b6e' },
    { year: '2023-24', revenue: 71.23, color: '#47b787' },
    { year: '2024-25', revenue: 50.79, color: '#6fd0a6' },
    { year: '2025-26', revenue: 105.10, color: '#9fe4c4' },
  ];

  const maxRevenue = Math.max(...revenueData.map(r => r.revenue));
  const totalRevenue = revenueData.reduce((sum, r) => sum + r.revenue, 0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 65%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();
          const bars = gsap.utils.toArray<HTMLElement>('.bar-inner');

          // Animate bar heights safely
          tl.to(bars, {
            height: (_: number, el: HTMLElement) => {
              return el.getAttribute('data-height') || '0%';
            },
            duration: 1.2,
            ease: 'expo.out',
            stagger: 0.08,
          });

          // Animate labels
          tl.fromTo(
            '.year-label, .revenue-label',
            { y: 6, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.04,
              ease: 'power2.out',
            },
            '-=0.8'
          );

          // Animate total revenue counter
          if (totalRef.current) {
            const counter = { value: 0 };

            gsap.to(counter, {
              value: totalRevenue,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => {
                if (totalRef.current) {
                  totalRef.current.innerText =
                    `₹${counter.value.toFixed(1)} Cr`;
                }
              },
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [totalRevenue]);

  const strengths = [
    { icon: Building, title: 'Multiple Projects', description: 'Supported by municipal & private projects' },
    { icon: FileCheck, title: 'Reliable Track Record', description: 'Transparent accounting & payments' },
    { icon: Wallet, title: 'High-Value Contracts', description: 'Government & corporate scale capability' },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-green-brand" />
            <span className="text-sm font-medium text-green-brand">Our Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Company <span className="text-green-brand">Growth</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Financial evolution and operational strength visualized through our yearly turnover.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 sm:gap-20 items-center">

          {/* Graph Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden">

            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center tracking-wide">
              Revenue Distribution
            </h3>

            <div className="text-center mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                Total Revenue
              </p>
              <div
                ref={totalRef}
                className="text-2xl sm:text-3xl font-bold text-green-brand mt-2"
              >
                ₹0.0 Cr
              </div>
            </div>

            <div className="relative">
              {/* Axis */}
              <div className="absolute left-0 top-0 bottom-6 w-[1px] bg-gray-300" />
              <div className="absolute left-0 right-0 bottom-6 h-[1px] bg-gray-300" />

              {/* Bars */}
              <div className="flex items-end gap-3 sm:gap-6 h-[240px] sm:h-[300px] pl-6 pb-6">

                {revenueData.map((item) => {
                  const heightPercent =
                    (item.revenue / maxRevenue) * 100;

                  return (
                    <div key={item.year} className="flex-1 flex flex-col items-center">

                      <div className="relative w-full h-[180px] sm:h-[240px]">
                        <div
                          className="bar-inner absolute bottom-0 left-0 w-full"
                          data-height={`${heightPercent}%`}
                          style={{
                            height: 0,
                            background: item.color,
                            borderRadius: '4px 4px 0 0',
                            boxShadow:
                              'inset 0 -8px 16px rgba(0,0,0,0.35)',
                          }}
                        />
                      </div>

                      <p className="year-label text-[10px] sm:text-xs mt-3 font-bold text-center">
                        {item.year}
                      </p>

                      <p className="revenue-label text-[9px] sm:text-xs text-gray-500 mt-1 text-center">
                        ₹{item.revenue} Cr
                      </p>

                    </div>
                  );
                })}

              </div>
            </div>
          </div>

          {/* Strength Section */}
          <div className="space-y-6">
            {strengths.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border shadow-sm">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-green-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-green-brand">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-green-brand">3,500+</p>
                <p className="text-sm text-gray-600">Plant Species</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyGrowth;