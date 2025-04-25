// page.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Define certificate type
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
}

// Sample certificates data
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Advanced React Development",
    issuer: "Meta",
    date: "March 2025",
    description: "Comprehensive training on advanced React concepts including hooks, context API, and performance optimization techniques.",
    imageUrl: "/celesta.png"
  },
  {
    id: 2,
    title: "TypeScript Mastery",
    issuer: "Microsoft",
    date: "January 2025",
    description: "In-depth TypeScript course covering advanced types, generics, decorators, and integration with modern frameworks.",
    imageUrl: "/mern.png"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "November 2024",
    description: "Comprehensive training in front-end and back-end development including Node.js, Express, MongoDB, and React.",
    imageUrl: "/projectcompletion.png"
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    issuer: "Udemy",
    date: "September 2024",
    description: "Course covering design thinking, user research, wireframing, prototyping, and usability testing.",
    imageUrl: "/cloud.png"
  },
];

const CertificatesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { scrollTop, clientHeight } = document.documentElement;
      const scrollPosition = scrollTop / (document.documentElement.scrollHeight - clientHeight);
      const newIndex = Math.min(
        Math.floor(scrollPosition * certificates.length * 1.5),
        certificates.length - 1
      );
      
      setActiveIndex(newIndex);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className=" min-h-screen text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            My Certificates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Scroll to explore my professional certifications and achievements
          </p>
        </div>
        
        <div ref={containerRef} className="relative min-h-screen">
          {certificates.map((cert, index) => (
            <CertificateCard 
              key={cert.id}
              certificate={cert}
              isActive={index === activeIndex}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CertificateCardProps {
  certificate: Certificate;
  isActive: boolean;
  index: number;
  activeIndex: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, isActive, index, activeIndex }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [50, -50]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 0]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95]
  );
  
  const isVisible = index <= activeIndex;
  const stackPosition = activeIndex - index;
  
  return (
    <motion.div
      ref={cardRef}
      className="sticky top-10 mx-auto mb-40 w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        zIndex: isVisible ? 100 - stackPosition : -1,
        y: isVisible ? stackPosition * -20 : 0,
      }}
    >
      <motion.div 
        className="bg-indigo-950 shadow-2xl rounded-2xl overflow-hidden mx-auto"
        style={{
          scale: isActive ? 1 : 0.98 - stackPosition * 0.02,
          y,
          height: "80vh",
          width: "90%",
          maxWidth: "1200px",
         
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow p-8 flex flex-col md:flex-row">
            {/* Certificate Image */}
            <div className="w-full md:w-3/5 p-4 flex items-center justify-center">
              <div className="relative w-full h-full md:h-5/6 max-h-96 md:max-h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-lg"></div>
                <img 
                  src={certificate.imageUrl} 
                  alt={certificate.title} 
                  className="w-full h-full object-contain rounded-lg border-2 border-gray-700 shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  VERIFIED
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-blue-400">{certificate.title}</h3>
                <div className="flex items-center mb-6">
                  <div className="text-gray-300 text-lg">
                    Issued by <span className="text-purple-400 font-semibold">{certificate.issuer}</span>
                  </div>
                  <div className="mx-3 text-gray-500">•</div>
                  <div className="text-gray-300 text-lg">{certificate.date}</div>
                </div>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{certificate.description}</p>
              </div>
              
              <div className="mt-auto">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition duration-300 transform hover:scale-105">
                  View Full Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Certificate Footer */}
          <div className="bg-gray-900/70 p-4 flex justify-between items-center">
            <div className="text-gray-400">Certificate #{certificate.id}</div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-green-400">Validated</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificatesPage;