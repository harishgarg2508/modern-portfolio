import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

interface AnimatedButtonProps {
  onClick: () => void;
}

export const AnimatedButton = ({ onClick }: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      onClick={onClick}
      className="relative group flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-purple-500 text-white rounded-full overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '0%' : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          opacity: isHovered ? 1 : 0,
        }}
      />

      <motion.span 
        className="relative flex items-center gap-2 font-semibold text-lg"
        animate={{
          textShadow: isHovered 
            ? '0 0 8px rgba(255,255,255,0.8)' 
            : '0 0 0px rgba(255,255,255,0)'
        }}
      >
        <Download className="w-5 h-5" />
        Download CV
      </motion.span>

      <motion.div
        className="absolute -inset-1 opacity-0 group-hover:opacity-20"
        style={{
          background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: isHovered 
            ? ['0% 0%', '200% 200%']
            : '0% 0%'
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    </motion.button>
  )
}