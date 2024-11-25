'use client'

import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { TimelineConnector } from './TimelineConnector';
import { useEffect, useState } from 'react';

const experiences = [
  {
    title: "Ai Training associate",
    company: "Outlier",
    period: "2024 - Present",
    description: "Reviewed and evaluated AI-generated responses based on given prompts, ensuring quality and relevance. Provided detailed ratings and constructive feedback to optimize model performance."
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Dental Care Solutions",
    period: "2024 - Present",
    description: "Built a responsive and user-friendly website for a dental clinic as a freelance project. Utilized React and Node.js for development, integrated MongoDB for secure data management, and implemented features like online appointment scheduling to streamline operations."
  }
];

const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    randomX: Math.random() * 100,
    randomY: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10
  }));
};

export const ExperienceSection = () => {
  const [particles, setParticles] = useState(() => generateParticles(20));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="min-h-screen bg-black/400 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, purple 1px, transparent 1px)',
          backgroundSize: '100px 50px',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(168, 85, 247, 0.5)",
                "0 0 40px rgba(168, 85, 247, 0.5)",
                "0 0 20px rgba(168, 85, 247, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Professional Experience
          </motion.h2>
          <p className="text-purple-400 text-lg">My journey in tech so far</p>
        </motion.div>

        <div className="relative pl-8">
          <TimelineConnector />
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      {particles.map(({ id, randomX, randomY, delay, duration }) => (
        <motion.div
          key={id}
          className="particle"
          style={{
            '--random-x': randomX,
            '--random-y': randomY,
          } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay,
          }}
        />
      ))}
    </section>
  );
};