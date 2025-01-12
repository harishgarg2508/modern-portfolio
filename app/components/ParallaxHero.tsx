'use client'

import React, { useEffect, useState } from 'react';

function ParallaxHero() {
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

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-50" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <h2 className="text-2xl font-bold text-blue-400 mb-4 tracking-wider animate-slideRight">
              Hello, I&apos;m
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
              <a
                href="https://docs.google.com/document/d/1n3Thmc6nc480EStdnFpBchT9Zhacl33p/edit?usp=sharing&ouid=106483141177534184864&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
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

export default ParallaxHero;