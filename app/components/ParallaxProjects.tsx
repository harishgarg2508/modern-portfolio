import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ExternalLink, Github } from 'lucide-react';

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
    id: 3,
    title: 'Photographer Portfolio Website',
    description: 'A modern and visually stunning portfolio website for a photographer, built using Next.js and Tailwind CSS. Features include gallery display, client testimonials, and a responsive design optimized for all devices.',
    image: '/photography.png',
    tags: ['Next.js', 'Tailwind CSS', 'Portfolio'],
    github: 'https://github.com/harishgarg2508/photographer-portfolio',
    demo: 'https://photographyportfolio.netlify.app/'
  },
  {
    id: 2,
    title: 'Dental Clinic Website',
    description: 'A comprehensive website for a dental clinic built with React. Includes appointment booking, service information, and a responsive design.',
    image: '/clinic.png',
    tags: ['React', 'DnD', 'Redux'],
    github: 'https://github.com/harishgarg2508/dental-clinic-website',
    demo: 'https://sunrisedentalclinic.netlify.app/'
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl shadow-xl border border-gray-700/30 overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="relative aspect-[4/3] flex items-center justify-center">
          <div className="relative w-full max-w-full max-h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-white/20 text-white rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-300 text-sm mb-4">
            {project.description}
          </p>
          <div className="flex gap-2">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium text-center text-sm hover:opacity-90 transition-opacity"
            >
              View Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-violet-900 text-white rounded-lg font-medium text-center text-sm hover:bg-violet-800 transition-colors"
            >
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex p-8 h-full">
        <div className="w-1/2 pr-8 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              {project.title}
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg"
            >
              View Demo
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-violet-900 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-violet-800 transition-colors text-lg"
            >
              View Code
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="w-1/2 relative group flex items-center justify-center">
          <div className="aspect-[16/9] w-full max-w-full max-h-full relative overflow-hidden rounded-lg flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rest of the code remains the same (NavigationButton and ParallaxProjects components)

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === 'left' ? 'left-2 md:left-8' : 'right-2 md:right-8'
    } z-10 bg-white/10 p-2 md:p-4 rounded-full backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all duration-300 group`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:text-blue-400 transition-colors" />
    ) : (
      <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:text-blue-400 transition-colors" />
    )}
  </button>
);

const ParallaxProjects: React.FC = () => {
  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    const totalProjects = projects.length;
    let newIndex;
    
    if (newDirection === 1) {
      newIndex = currentIndex === totalProjects - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? totalProjects - 1 : currentIndex - 1;
    }
    
    setPage([newIndex, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div className="relative py-16 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl">
          Navigate through my latest work
        </p>
      </div>

      <div className="flex-grow relative overflow-hidden px-4 md:px-12">
        <NavigationButton
          direction="left"
          onClick={() => paginate(-1)}
        />
        
        <NavigationButton
          direction="right"
          onClick={() => paginate(1)}
        />

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <ProjectCard project={projects[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > currentIndex ? 1 : -1])}
            className={`w-3 h-3 rounded-full mx-2 transition-colors ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-500 hover:bg-blue-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxProjects;