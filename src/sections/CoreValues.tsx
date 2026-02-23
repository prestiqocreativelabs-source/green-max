import { useEffect, useRef, useState, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Leaf, Gem, Lightbulb, Users, Heart } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

/* ================= 3D ORGANIC CORE ================= */

function OrganicCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;

      const geometry = meshRef.current.geometry as THREE.SphereGeometry;
      const position = geometry.attributes.position;

      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const z = position.getZ(i);
        const noise =
          0.08 *
          Math.sin(x * 3 + t) *
          Math.sin(y * 3 + t) *
          Math.sin(z * 3 + t);
        position.setXYZ(i, x + noise, y + noise, z + noise);
      }
      position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#10b981"
        emissive="#34d399"
        emissiveIntensity={0.6}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
}

function FloatingLeaf({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#6ee7b7" />
      </mesh>
    </Float>
  );
}

/* ================= MAIN COMPONENT ================= */

const CoreValues = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.value-card');

      gsap.fromTo(
        cards || [],
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlight((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const values = [
    { icon: Shield, title: 'Integrity', description: 'We uphold honesty and transparency in all our operations.' },
    { icon: Leaf, title: 'Sustainability', description: 'Every project we undertake aims to protect and enhance the environment.' },
    { icon: Gem, title: 'Quality', description: 'We ensure premium standards in design, execution, and maintenance.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Our designs blend creativity with ecological responsibility.' },
    { icon: Users, title: 'Teamwork', description: 'Our success comes from the dedication of our skilled workforce.' },
    { icon: Heart, title: 'Commitment', description: 'Striving for long-term excellence in every landscape we build.' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-40 bg-gradient-to-b from-white via-green-50/40 to-white overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          <Suspense fallback={null}>
            <OrganicCore />
            <FloatingLeaf position={[2, 1, -1]} />
            <FloatingLeaf position={[-2, -1, 0]} />
            <FloatingLeaf position={[1.5, -2, 1]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-28">
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-brand">Core Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide every decision we make and every landscape we create.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            const isActive = spotlight === index;

            return (
              <div
                key={index}
                className={`value-card relative p-10 rounded-[32px]
                bg-white/70 backdrop-blur-xl
                border border-white/40
                transition-all duration-700
                ${isActive ? 'scale-105 shadow-2xl' : 'opacity-80'}
                hover:scale-105 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-40 pointer-events-none" />

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;