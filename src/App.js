import React from 'react';
import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Education } from './components/Education/Education';
import { Footer } from './components/Footer/Footer';
import { Skills } from './components/Skills/Skills';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
