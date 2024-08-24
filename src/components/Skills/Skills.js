import React, { useState } from 'react';
import './Skills.css';
import javaIcon from '../assets/java.png';
import cppIcon from '../assets/cpp.png';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import reactIcon from '../assets/react.png';
import javascriptIcon from '../assets/javascript.png';
import mysqlIcon from '../assets/mysql.png';
import rIcon from '../assets/r.png';
import excelIcon from '../assets/excel.png';
import programmingImg from '../assets/programming.jpg';
import webImg from '../assets/web.jpg';
import databaseImg from '../assets/database.jpg';
import othersImg from '../assets/others.jpg';

export const Skills = () => {
  const [visibleSkill, setVisibleSkill] = useState(null);

  const showDetailsTemporarily = (category) => {
    setVisibleSkill(category);
    setTimeout(() => {
      setVisibleSkill(null);
    }, 850);
  };

  const getDetailsContent = (category) => {
    switch (category) {
      case 'programming':
        return (
          <ul>
            <li><img src={javaIcon} alt="Java" /> Java</li>
            <li><img src={cppIcon} alt="C++" /> C++</li>
            <li><img src={pythonIcon} alt="Python" /> Python</li>
          </ul>
        );
      case 'web':
        return (
          <ul>
            <li><img src={htmlIcon} alt="HTML" /> HTML</li>
            <li><img src={cssIcon} alt="CSS" /> CSS</li>
            <li><img src={reactIcon} alt="React" /> React</li>
            <li><img src={javascriptIcon} alt="JavaScript" /> JavaScript</li>
          </ul>
        );
      case 'database':
        return (
          <ul>
            <li><img src={mysqlIcon} alt="Mysql" /> MySQL</li>
          </ul>
        );
      case 'others':
        return (
          <ul>
            <li><img src={rIcon} alt="Intro to R"/>Introduction to R</li>
            <li><img src={excelIcon} alt="Excel"/>Excel For Beginners</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <h1>My Skills</h1>
      <div className="skills-container">
        <div 
          className="skill programming" 
          onClick={() => showDetailsTemporarily('programming')}
          style={{ backgroundImage: `url(${programmingImg})` }}
        >
          <div className="skill-content">Programming Languages</div>
          <button className="details-btn">Open</button>
          <div className={`details ${visibleSkill === 'programming' ? 'visible' : ''}`}>
            {getDetailsContent('programming')}
          </div>
        </div>
        <div 
          className="skill web" 
          onClick={() => showDetailsTemporarily('web')}
          style={{ backgroundImage: `url(${webImg})` }}
        >
          <div className="skill-content">Web Development</div>
          <button className="details-btn">Open</button>
          <div className={`details ${visibleSkill === 'web' ? 'visible' : ''}`}>
            {getDetailsContent('web')}
          </div>
        </div>
        <div 
          className="skill database" 
          onClick={() => showDetailsTemporarily('database')}
          style={{ backgroundImage: `url(${databaseImg})` }}
        >
          <div className="skill-content">Database Management</div>
          <button className="details-btn">Open</button>
          <div className={`details ${visibleSkill === 'database' ? 'visible' : ''}`}>
            {getDetailsContent('database')}
          </div>
        </div>
        <div 
          className="skill others" 
          onClick={() => showDetailsTemporarily('others')}
          style={{ backgroundImage: `url(${othersImg})` }}
        >
          <div className="skill-content">Others</div>
          <button className="details-btn">Open</button>
          <div className={`details ${visibleSkill === 'others' ? 'visible' : ''}`}>
            {getDetailsContent('others')}
          </div>
        </div>
      </div>
    </div>
  );
};