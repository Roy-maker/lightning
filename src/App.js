import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/navbar'; 
import Home from './pages/home';
import Services from './pages/services'; 
import Projects from './pages/projects'
import Certifications from './pages/certifications'
import Clients from './pages/clients'
import Contact from './pages/contact';

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
