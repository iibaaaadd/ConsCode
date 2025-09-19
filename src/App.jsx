import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <main className="min-h-screen bg-[#09032A] relative">
      <Navbar />
      <section id="home" className="relative">
        <Hero />
      </section>
      <section id="about" className="relative">
        <About />
      </section>
      <section id="services" className="relative">
        <Services />
      </section>
      <section id="portfolio" className="relative">
        <Portfolio />
      </section>
      <section id="reviews" className="relative">
        <Reviews />
      </section>
      <section id="faq" className="relative">
        <FAQ />
      </section>
      <section id="contact" className="relative">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

export default App
