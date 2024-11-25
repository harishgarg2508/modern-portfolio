'use client'

import dynamic from 'next/dynamic'
import { ParallaxProvider } from 'react-scroll-parallax'
import Navbar from './components/Navbar'
import ParallaxProjects from './components/ParallaxHero'
import AnimatedSkillIcons from './components/AnimatedSkillIcons'
import { ExperienceSection } from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ContactForm from './components/contact'
import SocialLinks from './components/SocialLinks'
import ParallaxHero from './components/ParallaxHero'

const FuturisticBackground = dynamic(() => import('./components/IceParticlesBackground'), { ssr: false })

export default function Home() {
  return (
    <ParallaxProvider>
      <div>
        <div className="relative">
          <FuturisticBackground />
        </div>

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
              <ContactForm />
              <SocialLinks />
            </section>
          </div>
        </main>
      </div>
    </ParallaxProvider>
  )
}