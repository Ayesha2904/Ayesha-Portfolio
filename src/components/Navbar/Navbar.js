import React, { useEffect } from 'react';
import './Navbar.css';

export const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    const toggleMenu = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };
    
    hamburger.addEventListener("click", toggleMenu);
    
    document.querySelectorAll(".nav-link").forEach(n => 
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
    
    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      document.querySelectorAll(".nav-link").forEach(n => 
        n.removeEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        })
      );
    };
  }, []);
  
  return (
    <div className="nav-container">
      <nav className="navbar">
        <a href="#about" className="nav-branding">Ayesha</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link">Education</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
};
