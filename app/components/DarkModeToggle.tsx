'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

interface DarkModeToggleProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps) {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-primary text-primary-foreground"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.div>
    </motion.button>
  )
}

