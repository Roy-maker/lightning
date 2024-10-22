import React from 'react';
import { useTranslation } from "react-i18next";
import ContactInfo from '../components/contactInfo';
import ContactForm from '../components/contactForm';
import './css/contact.css';

const Contact = () => {
  const { t } = useTranslation("global");
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>{t('contact.contact_us')}</h1>
        <p>{t('contact.main_message')}</p>
      </div>
      <div className="contact-container">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
