'use client'

import React, { useEffect, useState } from 'react';
import { Code2, Terminal, Cpu, Blocks, Sparkles, Github, Linkedin, Twitter } from 'lucide-react';

function ParallaxProjects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateRotation = (element: HTMLElement) => {
    if (!element) return '';
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const deltaX = mousePosition.x - x;
    const deltaY = mousePosition.y - y;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return `rotate(${angle}deg)`;
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-50" />
      
      {/* Floating elements
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.05
            }}
          >
            {i % 4 === 0 && <Code2 className="w-8 h-8" />}
            {i % 4 === 1 && <Terminal className="w-8 h-8" />}
            {i % 4 === 2 && <Cpu className="w-8 h-8" />}
            {i % 4 === 3 && <Blocks className="w-8 h-8" />}
          </div>
        ))}
      </div> */}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* <Sparkles className="absolute -top-12 -left-12 w-24 h-24 text-blue-500 animate-pulse" /> */}
            
            <h2 className="text-2xl font-bold text-blue-400 mb-4 tracking-wider animate-slideRight">
              Hello, I'm
            </h2>
            
            <h1 className="text-7xl font-bold text-white mb-6 tracking-tight animate-slideLeft">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Harish Garg
              </span>
            </h1>
            
            <p className="text-3xl text-gray-300 mb-8 leading-relaxed animate-fadeIn">
              Full Stack Developer & UI/UX Designer
              <span className="block mt-2 text-xl text-blue-400">
                Crafting digital experiences that make a difference
              </span>
            </p>

            <div className="flex gap-6 mb-12">
              {/* <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg overflow-hidden transition-all hover:scale-105 hover:bg-blue-700">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button> */}
              
               <a
                href="https://shorturl.at/fTDua" // Replace with the actual path or URL to your CV
                target="_blank"            // Opens the link in a new tab
                rel="noopener noreferrer"  // Ensures security for external links
                className="group relative inline-block px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg overflow-hidden transition-all"
              >
                <span
                  className="absolute inset-0 bg-indigo-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"
                ></span>
                <span className="relative z-10">Download CV</span>
              </a>
            </div>

           
          </div>
        </div>
      </div>

      {/* Mouse follower gradient */}
      <div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 70%)',
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}

export default ParallaxProjects;