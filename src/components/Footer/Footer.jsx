import React from 'react';
import { coachData } from '../../data/coachData';
import './Footer.css';

export default function Footer() {
  const { instagram, facebook } = coachData.links;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Purpose */}
          <div className="footer-col brand-col">
            <div className="footer-brand-title">
              <span className="brand-title-main">{coachData.name}</span>
              <span className="brand-title-sub">
                {coachData.title} | {coachData.organization}
              </span>
            </div>
            <p className="footer-mission-quote">
              "Making health simple, practical and sustainable."
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Rakshitha</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Social Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Social</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-footer-link"
                >
                  <span>Instagram</span>
                  <span className="footer-ext-icon">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-footer-link"
                >
                  <span>Facebook</span>
                  <span className="footer-ext-icon">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={coachData.links.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-footer-link"
                >
                  <span>Google Reviews</span>
                  <span className="footer-ext-icon">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={coachData.links.youtubeVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-footer-link"
                >
                  <span>YouTube Video</span>
                  <span className="footer-ext-icon">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Phone */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Inquiries</h4>
            <div className="footer-direct-contact">
              <p>
                <strong>Health Coach:</strong><br />
                {coachData.name}
              </p>
              <p>
                <strong>Organization:</strong><br />
                {coachData.organization}
              </p>
              <p>
                <strong>Phone & WhatsApp:</strong><br />
                <a href={`tel:${coachData.contact.whatsappNumber}`} className="footer-phone-link">
                  {coachData.contact.displayPhone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="footer-bottom-bar">
          <p className="footer-health-notice">
            <strong>Disclaimer:</strong> Health and lifestyle coaching provided through Rustic Wisdom focuses on holistic nutrition, habit formation, and lifestyle support using home-cooked meals and light activity. It is not intended as medical diagnosis, prescription, or a guarantee of medical cure. Always consult your medical doctor regarding clinical treatments.
          </p>
          <div className="footer-copyright-row">
            <p>© 2026 {coachData.name}. All rights reserved.</p>
            <p className="rustic-mention">Senior Health Coach • Rustic Wisdom</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
