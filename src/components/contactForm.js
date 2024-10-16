import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import './css/contactForm.css';

const ContactForm = () => {
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
    console.log(formData);
  };

  return (
    <div className="contact-form">
      <h2>{t('contact.form_title')}</h2>
      <p>{t('contact.form_main_message')}</p>
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
        <button type="submit">{t('contact.send_message')}</button>
      </form>
    </div>
  );
};

export default ContactForm;