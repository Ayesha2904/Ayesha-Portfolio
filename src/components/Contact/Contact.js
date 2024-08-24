import React, { useState, useEffect } from 'react';
import call from '../assets/call.png';
import email from '../assets/email.png';
import './Contact.css';

export const Contact = () => {
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d68c5b0b-8c15-4403-b8a7-7718bf6c13f5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setMessage('🎊Mail sent successfully🎊');
      setIsSubmitted(true);
      event.target.reset();
    } else {
      setMessage('Failed to send mail');
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setMessage('');
        setIsSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div className='contact-container'>
      <form onSubmit={onSubmit} className='contact-left'>
        <div className='contact-left-title'>
          <h2>Get in touch</h2>
          <hr />
        </div>
        <input type="text" name="user_name" placeholder='Your Name' className='contact-inputs' required />
        <input type="email" name="user_email" placeholder='Your Email' className='contact-inputs' required />
        <textarea name="message" placeholder='Your Message' className='contact-inputs' required />
        {isSubmitted ? (
          <div className='success-message'>{message}</div>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
      <div className='contact-right'>
        <div className='contact-item'>
          <img src={call} alt='callme' className='contact-icon' />
          <p>+91 8331855786</p>
        </div>
        <div className='contact-item'>
          <img src={email} alt='email' className='contact-icon' />
          <p>ayeshatehseen.kvs@gmail.com</p>
        </div>
      </div>
    </div>
  );
};