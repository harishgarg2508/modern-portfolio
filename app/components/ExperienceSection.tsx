'use client'

import { motion, useReducedMotion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { TimelineConnector } from './TimelineConnector';
import { useEffect, useState, useMemo } from 'react';

const experiences = [
  {
    title: "Ai Training associate",
    company: "Outlier",
    period: "Sep 2024 - Present",
    description: "Reviewed and evaluated AI-generated responses based on given prompts, ensuring quality and relevance. Provided detailed ratings and constructive feedback to optimize model performance."
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Pixel Dev",
    period: "Nov 2024 - Present",
    description: "Work as a freelance Full Stack Developer, delivering projects on time and within budget. Take on a variety of projects, from building responsive and user-friendly websites to developing scalable and secure APIs."
  }
];

const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    randomX: Math.random() * 100,
    randomY: Math.random() * 100,
    delay: Math.random() * 2, // Reduced delay variation
    duration: 3 + Math.random() * 4 // Reduced duration range
  }));
};

const BackgroundGradient = () => (
  <motion.div
    className="absolute inset-0 opacity-30"
    style={{
      backgroundImage: 'radial-gradient(circle at 50% 50%, purple 1px, transparent 1px)',
      backgroundSize: '100px 50px',
    }}
    initial={{ opacity: 0.2 }}
    animate={{
      scale: [1, 1.05, 1], // Reduced scale range
      opacity: [0.2, 0.25, 0.2], // Reduced opacity range
    }}
    transition={{
      duration: 8, // Increased duration for smoother animation
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear"
    }}
  />
);

const ParticleEffect = ({ particle }: { particle: ReturnType<typeof generateParticles>[0] }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={particle.id}
      className="particle"
      style={{
        '--random-x': particle.randomX,
        '--random-y': particle.randomY,
      } as React.CSSProperties}
      initial={{ opacity: 0, scale: 0 }}
      animate={shouldReduceMotion ? { opacity: 0.5, scale: 1 } : {
        opacity: [0, 0.5, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: particle.delay,
      }}
    />
  );
};

export const ExperienceSection = () => {
  const [mounted, setMounted] = useState(false);
  const particles = useMemo(() => generateParticles(12), []); // Reduced particle count

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="min-h-screen bg-black/400 py-20 relative overflow-hidden">
      <BackgroundGradient />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mt-4 text-white "
            animate={{
              textShadow: [
                "0 0 20px rgba(168, 85, 247, 0.3)",
                "0 0 30px rgba(168, 85, 247, 0.3)",
                "0 0 20px rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
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

      {particles.map((particle) => (
        <ParticleEffect key={particle.id} particle={particle} />
      ))}
    </section>
  );
};