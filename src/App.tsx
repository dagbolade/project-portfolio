import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Publications from './components/Publications';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Background />
      
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">David Agbolade</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Publications />
        <Contact />
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">© 2024 David Agbolade. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/dagbolade" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/dagbolade" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:dagbolade72@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;