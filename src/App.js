import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CodeSnippet from './components/CodeSnippet';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

import {
  highlights,
  skillCategories,
  projects,
  experiences,
  codeSnippets,
  contactInfo,
} from './data/portfolioData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main className="portfolio-content">
        <About highlights={highlights} />
        <Skills skillCategories={skillCategories} />
        <CodeSnippet snippets={codeSnippets} />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
        <Contact contact={contactInfo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
