import React, { useState } from 'react' // Add useState import here
import { motion, AnimatePresence } from 'framer-motion'

import { Facebook, Twitter, Instagram, LinkedinIcon as LinkedIn, GitlabIcon as GitHub, LinkedinIcon } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, color: '#1877F2', url: 'https://facebook.com/harishgarg2508', 
    gradient: 'from-yellow-500 to-blue-600' },
  { name: 'Twitter', icon: Twitter, color: '#1DA1F2', url: 'https://twitter.com/harishgarg2508',
    gradient: 'from-sky-400 to-sky-500' },
  { name: 'Instagram', icon: Instagram, color: '#E4405F', url: 'https://instagram.com/harishgarg2508',
    gradient: 'from-pink-500 via-purple-500 to-orange-500' },
  { name: 'LinkedIn', icon: LinkedinIcon, color: '#0A66C2', url: 'https://linkedin.com/in/harishgarg2508',
    gradient: 'from-blue-600 to-blue-700' },
  { name: 'GitHub', icon: GitHub, color: '#181717', url: 'https://github.com/harishgarg2508',
    gradient: 'from-gray-700 to-gray-800' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

const OrbitingDots = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8
            return (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white z-10"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: [0, Math.cos(angle) * 30],
                  y: [0, Math.sin(angle) * 30],
                }}
                exit={{ scale: 0, x: 0, y: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            )
          })}
        </>
      )}
    </AnimatePresence>
  )
}

const GlowingBackground = ({ isHovered, gradient }: { isHovered: boolean; gradient: string }) => {
  return (
    <motion.div
      className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 0.8 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ filter: 'blur(8px)' }}
    />
  )
}

const AnimatedSocialIcons: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <motion.div
    className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-50" // Increased z-index
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div 
      className="flex justify-center space-x-6"
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {socialLinks.map((social) => {
        const isHovered = hoveredIcon === social.name
        
        return (
          <motion.div
            key={social.name}
            className="relative z-50" // Increased z-index for individual icon container
            onHoverStart={() => setHoveredIcon(social.name)}
            onHoverEnd={() => setHoveredIcon(null)}
          >
            <motion.a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/50 backdrop-blur-lg z-50" // Increased z-index for icon
              variants={iconVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              {/* Glowing Background */}
              <GlowingBackground isHovered={isHovered} gradient={social.gradient} />
              
              {/* Orbiting Dots */}
              <OrbitingDots isHovered={isHovered} />
              
              {/* Icon */}
              <motion.div
                animate={{
                  color: isHovered ? '#ffffff' : social.color,
                }}
                transition={{ duration: 0.3 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.div>
            </motion.a>
  
            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 z-50" // Increased z-index for tooltip
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 blur-sm" />
                    <div className="relative bg-gray-900 text-white text-sm font-medium px-2 py-1 rounded-lg whitespace-nowrap">
                      {social.name}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  </motion.div>
  
  )
}

export default AnimatedSocialIcons
