'use client'

import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { 
    FaReact, FaNodeJs, FaDatabase, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare, 
    FaFigma 
  } from 'react-icons/fa'
  import { SiTailwindcss, SiTypescript, SiNextdotjs, SiCanva, SiCplusplus, SiFramer } from 'react-icons/si'
const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Database', icon: FaDatabase, color: '#336791' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
    { name: 'Framer', icon: SiFramer, color: '#0055FF' },
  ]

export default function AnimatedSkillIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5   gap-8">
      {skills.map((skill, index) => (
        <Parallax
          key={skill.name}
          translateY={[50, -50]}
          opacity={[0, 1]}
          easing="easeOutQuad"
          className="flex flex-col items-center text-white"
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <skill.icon className="w-16 h-16 mb-4" style={{ color: skill.color }} />
          </motion.div>
          <span className="text-lg font-semibold">{skill.name}</span>
        </Parallax>
      ))}
    </div>
  )
}

