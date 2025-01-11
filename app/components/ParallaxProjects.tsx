"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Code2, Maximize2, Minimize2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Photographer Portfolio Website',
    description: 'A modern and visually stunning portfolio website for a photographer, built using Next.js and Tailwind CSS. Features include gallery display, client testimonials, and a responsive design optimized for all devices.',
    image: '/images/project1.png',
    tags: ['Next.js', 'Tailwind CSS', 'Portfolio'],
    github: 'https://github.com/harishgarg2508/hariomstudio',
    demo: 'https://hariomstudiobilaspur.in'
  },
  {
    id: 2,
    title: 'Data Entry Website',
    description: 'An efficient application designed for managing patient data records, built using Next.js and Tailwind CSS. Features include secure data entry, patient record maintenance, and a user-friendly interface optimized for healthcare professionals.',
    image: '/images/project2.png',
    tags: ['Next.js', 'Tailwind CSS', 'mongoDB'],
    github: 'https://github.com/harishgarg2508/dasboard',
    demo: 'https://dataentryapp.netlify.app/dashboard'
  },
  {
    id: 3,
    title: 'Dental Clinic Website',
    description: 'A comprehensive website for a dental clinic built with React. Includes appointment booking, service information, and a responsive design.',
    image: '/clinic.png',
    tags: ['React', 'Tailwind CSS'],
    github: 'https://github.com/harishgarg2508/dental-clinic-website',
    demo: 'https://sunrisedental.in/'
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website showcasing my skills, education, projects, social profiles, and other relevant information. Built with Next.js and Tailwind CSS, it features a responsive design and an easy-to-navigate interface.',
    image: '/images/Project4.png',
    tags: ['React', 'Tailwind CSS',"Next.js"],
    github: 'https://github.com/harishgarg2508/modern-portfolio',
    demo: 'https://harishgarg.tech'
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const baseTransform = `perspective(1000px) rotateY(${index % 2 === 0 ? '-15deg' : '15deg'})`;
  const hoverTransform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
  const expandedTransform = 'perspective(1000px) rotateY(0deg) scale(1.1)';

  return (
    <div
      className={`relative transition-all duration-700 ease-out ${
        isExpanded ? 'z-50' : 'z-0'
      }`}
      style={{
        transform: isExpanded ? expandedTransform : isHovered ? hoverTransform : baseTransform,
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-lg overflow-hidden border border-gray-700/30 transition-all duration-500 max-w-md mx-auto ${
          isExpanded
            ? 'shadow-2xl shadow-blue-500/20 border-blue-500/50'
            : 'hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30'
        }`}
      >
        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-3 left-3 z-20 p-1.5 bg-gray-900/80 hover:bg-gray-800 rounded-full text-white shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          {isExpanded ? (
            <Minimize2 className="w-4 h-4" />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
        </button>

        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered || isExpanded ? 'scale-110' : 'scale-100'
            }`}
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-opacity duration-500 ${
            isHovered || isExpanded ? 'opacity-90' : 'opacity-80'
          }`} />
          
          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-blue-500 hover:bg-blue-600 rounded-full text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-violet-600 hover:bg-violet-700 rounded-full text-white shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
              title="View Code"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className={`p-4 transition-all duration-500 ${isExpanded ? 'transform scale-105' : ''}`}>
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className={`text-gray-300 text-sm mb-3 transition-all duration-500 ${
            isExpanded ? 'line-clamp-none' : 'line-clamp-2'
          }`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-2">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <Code2 className="w-3.5 h-3.5" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1]"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section className="  min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}