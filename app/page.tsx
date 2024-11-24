'use client'

import { useState, useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
// import ParticleBackground from './components/ParticleBackground'
import FuturisticBackground from './components/IceParticlesBackground'
// import DarkModeToggle from './components/DarkModeToggle'
import Navbar from './components/Navbar'
import ParallaxHero from './components/ParallaxHero'
import AnimatedSkillIcons from './components/AnimatedSkillIcons'
import { ExperienceSection } from './components/ExperienceSection'
import ParallaxProjects from './components/ParallaxProjects'
import EducationSection from './components/EducationSection'
import Contact from './components/contact'
import SocialLinks from './components/SocialLinks'

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false)

  // useEffect(() => {
  //   document.body.classList.toggle('dark', darkMode)
  // }, [darkMode])

  return (
    <ParallaxProvider>
      <div >
        <div className="relative">
          <FuturisticBackground />
          {/* <ParticleBackground /> */}
        </div>

        {/* <header className="fixed top-0 left-0 right-0 z-50 p-4">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </header> */}

        <Navbar />

        <main className="relative">
          <section id="home">
            <ParallaxHero />
          </section>

          <div className="container mx-auto px-4">
            <section id="tech-stack" className="py-20">
              <h2 className="text-4xl font-bold mb-10 text-center text-white">My Skills</h2>
              <AnimatedSkillIcons />
            </section>

            <section id="experience" className="py-20">
              <h2 className="text-4xl font-bold mb-10 text-center"></h2>
              <ExperienceSection />
            </section>

            <section id="project" className="py-20">
              <h2 className="text-4xl font-bold mb-10 text-center"></h2>
              <ParallaxProjects />
            </section>

            <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
              <EducationSection />
            </section>

            <section id="contact" className="py-20">
              <h2 className="text-4xl font-bold mb-10 text-center"></h2>
              <Contact />
              <SocialLinks />
            </section>
          </div>
        </main>
      </div>
    </ParallaxProvider>
  )
}

