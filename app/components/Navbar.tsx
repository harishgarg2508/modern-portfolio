'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  { title: 'Home', icon: Home, sectionId: 'home' },
  { title: 'Tech Stack', icon: Layers, sectionId: 'tech-stack' },
  { title: 'Experience', icon: Briefcase, sectionId: 'experience' },
  { title: 'Projects', icon: FolderGit2, sectionId: 'project' },
  { title: 'Education', icon: GraduationCap, sectionId: 'education' },
  { title: 'Contact', icon: Mail, sectionId: 'contact' }
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isManualScroll = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Don't update active section if this is a manual scroll
      if (isManualScroll.current) return

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
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Set manual scroll flag
    isManualScroll.current = true
    
    // Update active item immediately
    setActiveItem(index)

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)

      // Reset manual scroll flag after scroll animation completes
      timeoutRef.current = setTimeout(() => {
        isManualScroll.current = false
      }, 1000) // Adjust timing based on your scroll animation duration
    }
  }

  const DesktopNav = () => (
    <nav className={`fixed w-full z-40 hidden md:block ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`
          relative backdrop-blur-lg rounded-2xl 
          ${isScrolled ? 'bg-black/70' : 'bg-black/40'} 
          border border-white/10 shadow-lg
        `}>
          <div className="flex justify-center items-center p-2">
            {menuItems.map((item, index) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.sectionId, index)}
                className={`
                  px-6 py-3 relative
                  ${activeItem === index ? 'bg-white/10 rounded-xl' : ''}
                `}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className={activeItem === index ? 'text-blue-500' : 'text-white'}>
                    <item.icon size={20} />
                  </div>
                  <span className={`
                    text-sm font-medium
                    ${activeItem === index ? 'text-blue-500' : 'text-white/70'}
                  `}>
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )

  return (
    <>
      <DesktopNav />

      <div className="block md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 right-4 z-[60] p-3 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md">
            <div className="flex min-h-screen items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-6 p-8">
                {menuItems.map((item, index) => (
                  <button
                    key={item.title}
                    onClick={() => handleNavClick(item.sectionId, index)}
                    className={`
                      flex items-center gap-4 px-8 py-4 rounded-xl
                      ${activeItem === index 
                        ? 'bg-blue-500/20 text-blue-500' 
                        : 'text-white hover:bg-white/10'}
                    `}
                  >
                    <item.icon size={24} />
                    <span className="text-lg font-medium">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}