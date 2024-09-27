import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext'; 
import Navbar from './components/navbar'; 
import Home from './components/home';
import Services from './components/services'; 
import Projects from './components/projects'
import Certifications from './components/certifications'
import Clients from './components/clients'
import Contact from './components/contact';

import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Router>
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
