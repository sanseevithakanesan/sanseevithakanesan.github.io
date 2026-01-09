import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}
         style={{ transition: 'all 0.3s ease' }}>
      <div className="container">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="navbar-brand fw-bold"
          style={{ fontSize: '1.5rem' }}
        >
          Portfolio
        </Link>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item mx-1" key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`nav-link px-3 ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    fontWeight: activeSection === item.id ? '600' : '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
{/* 
          <div className="d-flex align-items-center ms-3">
            <button 
              onClick={toggleDarkMode} 
              className="btn btn-link p-2 theme-toggle"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ fontSize: '1.2rem' }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;