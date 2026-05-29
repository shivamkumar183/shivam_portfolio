import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import YouTubeCarousel from './components/YouTubeCarousel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App(){
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-20">
        <section id="hero" className="pt-24"><Hero /></section>
        <section id="about" className="py-16"><About /></section>
        <section className="py-16">
          <div className="md:flex justify-center gap-12 px-4 md:px-8">
            <div id="education" className="md:w-1/2 scroll-mt-24"><Education /></div>
            <div id="experience" className="md:w-1/2 scroll-mt-24"><Experience /></div>
          </div>
        </section>
        <section id="skills" className="py-16"><Skills /></section>
        <section id="projects" className="py-16"><Projects /></section>
        <section id="certifications" className="py-16"><Certifications /></section>
        <section id="youtube" className="py-16"><YouTubeCarousel /></section>
        <section id="contact" className="py-16"><Contact /></section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
