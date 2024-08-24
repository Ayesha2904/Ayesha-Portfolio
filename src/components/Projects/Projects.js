import React from 'react';
import './Projects.css'; 
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export const Projects = () => {
  const projects = [
    {
      name: 'Rock Paper Scissors Game',
      description: 'Developed a Rock Paper Scissors game using HTML, CSS, React and JavaScript. The game features an interactive interface where users can play against the computer and show result.',
      image: project1,
      detailsLink: 'https://github.com/Ayesha2904/Rock-Paper-Scissors', 
      viewLink: 'https://rock-paper-scissor-gameapp.web.app/', 
    },
    {
      name: 'Portfolio Website',
      description: 'Developed a responsive portfolio using React, HTML, CSS, and JavaScript.The site showcases my projects, skills, and education. Its fully responsive and cross-browser compatible',
      image: project2,
      detailsLink: 'https://github.com/Ayesha2904/Ayesha-Portfolio',
      viewLink: 'https://shaik-ayesha-tehseen-portfolio.web.app/',
    },
    {
      name: 'Weather App',
      description: 'Developed a responsive weather app using React, HTML, CSS, and JavaScript, integrated with the OpenWeatherMap API. It displays real-time weather data with dynamic backgrounds.',
      image: project3,
      detailsLink: 'https://github.com/Ayesha2904/Weather-App',
      viewLink: 'https://weather-website-app.web.app/',
    },
  ];

  return (
    <div className="project-container">
      <h1>My Projects</h1>    
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={`${project.name} screenshot`} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.detailsLink} className="project-button">Details</a>
              <a href={project.viewLink} className="project-button">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
