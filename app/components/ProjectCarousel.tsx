'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Parallax } from 'react-scroll-parallax'

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
  { id: 3, title: 'Project 3', description: 'Description for Project 3' },
]

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  return (
    <Parallax translateY={[-20, 20]} opacity={[0.5, 1]} easing="easeInQuad">
      <div className="relative w-full h-64">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
              }),
              center: {
                zIndex: 1,
                x: 0,
                opacity: 1,
              },
              exit: (direction: number) => ({
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full flex items-center justify-center bg-secondary text-secondary-foreground rounded-lg shadow-lg"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </Parallax>
  )
}

