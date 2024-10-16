import React from 'react';
import { useTranslation } from "react-i18next";
import './css/contactInfo.css';
import logo from '../images/test.png';

const ContactInfo = () => {
  const { t } = useTranslation("global");

  return (
    <div className='contact-info-container'>
    
    <div className="contact-info">
      <h2>{t('contact.title')}</h2>
      <p><strong>{t('contact.email')}: </strong>your-email@example.com</p>
      <p><strong>{t('contact.phone')}: </strong>+123 456 789</p>
      <div className="social-media">
        <p><strong>{t('contact.follow_us')}:</strong></p>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
    <div>
    <img src={logo} alt="Logo" width="300" />  
    </div>
    </div>
  );
};

export default ContactInfo;