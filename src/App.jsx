import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-blue selection:text-paper font-sans">
      {/* Editorial Notebook paper grid & left margin line */}
      <BackgroundEffects />

      {/* Primary Fixed Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main id="main" className="relative z-10 flex flex-col space-y-16 sm:space-y-24">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
