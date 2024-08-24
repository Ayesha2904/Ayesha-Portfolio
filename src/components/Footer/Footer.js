import React from 'react'
import './Footer.css'
import gh from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section-padding'>
            <div className='sb__footer-links'>
                <div className='socialmedia'>
                    <p><a href='https://shrturl.app/XJpg_K' target='_blank' rel='noopener noreferrer'>
                        <img src={linkedin} alt='LinkedIn' className='social-icon'/>
                    </a></p>
                    <p><a href='https://github.com/Ayesha2904' target='_blank' rel='noopener noreferrer'>
                        <img src={gh} alt='GitHub' className='social-icon'/>
                    </a></p>
                    <p><a href='https://shorturl.at/zdwrf' target='_blank' rel='noopener noreferrer'>
                        <img src={insta} alt='Instagram' className='social-icon'/>
                    </a></p>
                </div>
            </div>            
            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        All rights reserved ©{new Date().getFullYear()} shaik-ayesha-tehseen.web.app 
                    </p>
                </div>
            </div>
        </div>
            <div className="wave-container">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </div>
        </div>
  );
};