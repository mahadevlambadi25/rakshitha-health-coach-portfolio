import React, { useState, useEffect } from 'react';
import { coachData } from '../../data/coachData';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-leaf-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3C12 3 6 6 6 13C6 16.866 9.134 20 13 20C16.866 20 20 16.866 20 13C20 6 12 3 12 3Z"
                fill="currentColor"
                opacity="0.9"
              />
              <path
                d="M12 7V17M12 12L9 10M12 14L15 12"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">{coachData.name}</span>
            <span className="brand-role">
              {coachData.title} • {coachData.organization}
            </span>
          </div>
        </a>

        {/* Desktop Navigation - Simple, clean nav links including Contact */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#results" className="nav-link">Results</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link nav-contact-link">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#hero" onClick={closeMobileMenu}>Home</a>
          <a href="#about" onClick={closeMobileMenu}>About Rakshitha</a>
          <a href="#services" onClick={closeMobileMenu}>Services</a>
          <a href="#results" onClick={closeMobileMenu}>Results & Impact</a>
          <a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
