import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PvpImage from '../assets/pvpsit.png';
import NarayanaImage from '../assets/narayana.png';
import KennedyImage from '../assets/kennedy.png';
import KvafsImage from '../assets/kvs.png';

export const Education = () => {
  return (
    <div className="education-section">
      <h1 className="education-title">My Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            icon={<img src={PvpImage} alt="PVP" className="timeline-icon" />}
          >
            <h3 className="vertical-timeline-element-title">Prasad V. Potluri Siddhartha Institute Of Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree(2021 - 2025)</h4>
            <p>
              I am currently pursuing a Bachelor's degree in Information Technology at Prasad V. Potluri Siddhartha Institute Of Technology.
              I have completed 6 semesters and have a CGPA of 8.93. The college is located at Chalasani Nagar, Kanuru, Vijayawada, Andhra Pradesh.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            icon={<img src={NarayanaImage} alt="Narayana" className="timeline-icon" />}
          >
            <h3 className="vertical-timeline-element-title">Narayana Junior College</h3>
            <h4 className="vertical-timeline-element-subtitle">Intermediate Course(2019 - 2021)</h4>
            <p>
              I have done my Intermediate course from NARAYANA Jr. COLLEGE and secured 95%. 
              The college is located at Benz Circle, Vijayawada, Andhra Pradesh.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            icon={<img src={KennedyImage} alt="Kennedy" className="timeline-icon" />}
          >
            <h3 className="vertical-timeline-element-title">Kennedy High School</h3>
            <h4 className="vertical-timeline-element-subtitle">High School(2016 - 2019)</h4>
            <p>
              I completed my 8th to 10th class from Narayana group of schools and secured 86%. 
              The school is located in Vijayawada, Andhra Pradesh.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            icon={<img src={KvafsImage} alt="KVAFS" className="timeline-icon" />}
          >
            <h3 className="vertical-timeline-element-title">Kendriya Vidyalaya Sanghatan Air Force Station</h3>
            <h4 className="vertical-timeline-element-subtitle">Schooling(2009 - 2016)</h4>
            <p>
            I have done my schooling from 1st class to 8th class in KENDRIYA VIDHYALAYA SANGHATAN AIR FORCE STATION BEGUMPET. 
            This school is located at Air Force Station, Begumpet, Balanagar Road New Bowenpally (Post), Tirumalgiri Telangana .
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
  </div>      
  );
};

export default Education;
