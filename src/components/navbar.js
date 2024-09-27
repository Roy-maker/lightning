import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faLanguage } from '@fortawesome/free-solid-svg-icons'; 
import './css/navbar.css'
import logo from '../images/logo.jpeg';

const Navbar = ({ toggleTheme, currentTheme }) => {
  const { t, i18n } = useTranslation("global");
  const [language, setLanguage] = useState(i18n.language); 
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Abre o cierra el menú
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src={logo} alt="Logo" width="50" />
        </Link>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
      </div>

      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/home">{t('navbar.home')}</Link></li>
        <li><Link to="/services">{t('navbar.services')}</Link></li>
        <li><Link to="/projects">{t('navbar.projects')}</Link></li>
        <li><Link to="/certifications">{t('navbar.certifications')}</Link></li>
        <li><Link to="/clients">{t('navbar.clients')}</Link></li>
        <li><Link to="/contact">{t('navbar.contact')}</Link></li>
      </ul>
      
      <div className={`navbar-actions ${menuOpen ? 'open' : ''}`}>
      <button onClick={toggleTheme}>
          <FontAwesomeIcon icon={currentTheme === 'light' ? faMoon : faSun} />
        </button>

        <button onClick={toggleLanguage}>
          <FontAwesomeIcon icon={faLanguage} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
