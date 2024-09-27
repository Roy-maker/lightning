import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import './css/contact.css';

const Contact = () => {
  const { t } = useTranslation("global");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envío de datos
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>{t('contact.title')}</h2> {/* Título traducido */}
        <p><strong>{t('contact.email')}: </strong> your-email@example.com</p>
        <p><strong>{t('contact.phone')}: </strong> +123 456 789</p>
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

      <div className="contact-form">
        <h2>{t('contact.contact_us')}</h2> {/* Título traducido */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">{t('contact.subject')}</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">{t('contact.send_message')}</button> {/* Texto del botón traducido */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
