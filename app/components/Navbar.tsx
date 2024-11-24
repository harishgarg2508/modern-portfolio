'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home,
  Layers,
  Briefcase,
  GraduationCap,
  Mail,
  Menu,
  X,
  FolderGit2
} from 'lucide-react'

const menuItems = [
  { title: 'Home', icon: Home, sectionId: 'home', component: 'ParallaxHero' },
  { title: 'Tech Stack', icon: Layers, sectionId: 'tech-stack', component: 'AnimatedSkillIcons' },
  { title: 'Experience', icon: Briefcase, sectionId: 'experience' },
  { title: 'Projects', icon: FolderGit2, sectionId: 'project', component: 'ParallaxProjects' },
  { title: 'Education', icon: GraduationCap, sectionId: 'education' },
  { title: 'Contact', icon: Mail, sectionId: 'contact' }
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = menuItems.map(item => item.sectionId)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top >= -100 && rect.top <= window.innerHeight / 2
        }
        return false
      })

      if (currentSection) {
        setActiveItem(menuItems.findIndex(item => item.sectionId === currentSection))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (sectionId: string, index: number) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveItem(index)
      setIsMobileMenuOpen(false)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  const DesktopNav = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-40 hidden md:block ${
        isScrolled ? 'py-2' : 'py-4'
      } transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className={`
          relative backdrop-blur-lg rounded-2xl 
          ${isScrolled ? 'bg-black/70' : 'bg-black/40'} 
          border border-white/10 shadow-lg
          transition-all duration-300
        `}>
          <div className="flex justify-center items-center p-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.title}
                className="relative px-6 py-3 group"
                onHoverStart={() => setActiveItem(index)}
                onClick={() => handleNavClick(item.sectionId, index)}
                data-section={item.sectionId}
              >
                {activeItem === index && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                )}

                <div className="relative flex flex-col items-center gap-1">
                  <motion.div
                    initial={false}
                    animate={{
                      scale: activeItem === index ? 1.2 : 1,
                      color: activeItem === index ? "#3b82f6" : "#fff"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <item.icon size={20} />
                  </motion.div>
                  
                  <span className={`
                    text-sm font-medium
                    ${activeItem === index ? 'text-blue-500' : 'text-white/70'}
                    transition-colors duration-200
                  `}>
                    {item.title}
                  </span>

                  <motion.div
                    className="absolute -inset-3 bg-blue-500/20 rounded-full blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeItem === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ zIndex: -1 }}
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )

  return (
    <>
      {/* Desktop Navigation */}
      <DesktopNav />

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="fixed top-4 right-4 z-[60] p-3 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
            >
              <div className="flex min-h-screen items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-6 p-8">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.sectionId, index)}
                      className={`flex items-center gap-4 px-8 py-4 rounded-xl transition-colors
                        ${activeItem === index 
                          ? 'bg-blue-500/20 text-blue-500' 
                          : 'text-white hover:bg-white/10'}`}
                    >
                      <item.icon size={24} />
                      <span className="text-lg font-medium">{item.title}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}