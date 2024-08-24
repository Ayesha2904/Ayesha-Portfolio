import React, { useState } from 'react';
import './About.css';

export const About = () => {
    const [buttonText, setButtonText] = useState('RESUME');

    const downloadResume = () => {
        setButtonText('DOWNLOADED');     
        window.open('https://drive.google.com/file/d/1wmBRXp_fHq6zswjL9ZlH8MIN1YvwRuhB/view?usp=sharing', '_blank');
    };

    const handleMouseEnter = () => {
        if (buttonText === 'RESUME') {
            setButtonText('DOWNLOAD');
        }
    };

    const handleMouseLeave = () => {
        if (buttonText === 'DOWNLOAD') {
            setButtonText('RESUME');
        }
    };

    return (
        <div className="container">
            <div className="textContainer">
                <div className="textBlock">
                    <p className="smallText">Hi! My Name Is</p>
                    <h1 className="largeText">Ayesha Tehseen</h1>
                </div>
                <hr className="horizontalLine" />
                <p className="description">
                    I want to use my technical skills to provide great service to clients,
                    improve my abilities, and succeed in a workplace that fosters growth and innovation.
                </p>
                <button 
                    onClick={downloadResume} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    className="button"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};