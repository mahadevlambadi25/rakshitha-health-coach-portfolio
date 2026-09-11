import React from 'react';
import { coachData } from '../../data/coachData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>Senior Health Coach • Rustic Wisdom</span>
          </div>

          <h1 className="hero-title">
            Make Health Simple. <span className="title-serif">Make It Sustainable.</span>
          </h1>

          <p className="hero-description">
            Personalised health coaching for busy professionals who want sustainable lifestyle changes using simple home-cooked food and light physical activity.
          </p>

          {/* Single Primary CTA */}
          <div className="hero-cta-group">
            <a
              href="#contact"
              className="btn btn-primary btn-lg"
              id="hero-primary-cta"
            >
              <span>Start Your Health Journey</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>

          {/* Trust Statement */}
          <div className="hero-trust-box">
            <span className="trust-icon">🌿</span>
            <p className="trust-text">
              <strong>Our Promise:</strong> {coachData.trustStatement}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="hero-quick-stats">
            <div className="quick-stat">
              <span className="quick-stat-num">6+</span>
              <span className="quick-stat-lbl">Years of Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="quick-stat">
              <span className="quick-stat-num">500+</span>
              <span className="quick-stat-lbl">Clients Supported</span>
            </div>
            <div className="stat-divider"></div>
            <div className="quick-stat">
              <span className="quick-stat-num">100%</span>
              <span className="quick-stat-lbl">Home-Cooked Food Focus</span>
            </div>
          </div>
        </div>

        {/* Right: Prominent Professional Photo */}
        <div className="hero-media">
          <div className="coach-portrait-frame">
            <div className="portrait-image-wrapper">
              <img
                src="/images/rakshitha-1.jpg"
                alt="Rakshitha Dutt, Senior Health Coach at Rustic Wisdom - Professional Portrait"
                className="coach-portrait-img"
                loading="eager"
              />
              <div className="portrait-overlay-gradient"></div>
            </div>

            {/* Floating Trust Cards */}
            <div className="hero-float-card float-card-coach">
              <div className="float-card-avatar">🌿</div>
              <div>
                <strong className="float-card-title">Rakshitha Dutt</strong>
                <p className="float-card-subtitle">Senior Health Coach • Rustic Wisdom</p>
              </div>
            </div>

            <div className="hero-float-card float-card-highlight">
              <span className="float-badge-icon">✓</span>
              <div>
                <strong className="float-card-title">Real Food & Habits</strong>
                <p className="float-card-subtitle">No Crash Diets • No Rigorous Gym</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
