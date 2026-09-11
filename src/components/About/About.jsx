import React from 'react';
import { coachData } from '../../data/coachData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Professional Photo & Visual Badges */}
          <div className="about-visual-column">
            <div className="about-image-card">
              <div className="about-img-wrap">
                <img
                  src="/images/rakshitha-2.jpg"
                  alt="Rakshitha Dutt, Senior Health Coach sharing her holistic coaching philosophy"
                  className="about-coach-photo"
                  loading="lazy"
                />
              </div>

              {/* Experience Badge */}
              <div className="about-stat-badge">
                <span className="badge-big-num">6+</span>
                <span className="badge-lbl">Years of Dedicated Coaching</span>
              </div>
            </div>

            {/* Philosophy Highlight Strip */}
            <div className="philosophy-highlight-pill">
              <span className="pill-leaf">🌱</span>
              <span className="pill-text">{coachData.approachHighlight}</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content-column">
            <span className="section-badge earth">Meet Your Coach</span>
            <h2 className="section-title">Hi, I'm Rakshitha</h2>

            <div className="about-bio-lead">
              <p>{coachData.aboutBio}</p>
            </div>

            <div className="about-philosophy-box">
              <h3 className="philosophy-title">Health Coaching Philosophy</h3>
              <p className="philosophy-text">
                At Rustic Wisdom, we believe health is not built through punishment or restriction. True well-being comes from honoring the body with nutrient-dense, comforting home-cooked food, mindful daily movement, and consistent routines tailored to your modern work and personal life.
              </p>
            </div>

            {/* Key Pillars Summary */}
            <div className="about-highlights-grid">
              <div className="highlight-item">
                <span className="hl-icon">🍲</span>
                <div>
                  <strong>Home-Cooked Food</strong>
                  <p>No packaged shakes, powdered concoctions or starvation.</p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="hl-icon">🚶‍♀️</span>
                <div>
                  <strong>Light Physical Activity</strong>
                  <p>Simple movement routines without gym dependency.</p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="hl-icon">👥</span>
                <div>
                  <strong>500+ Clients Supported</strong>
                  <p>Guiding individuals and families toward lasting health.</p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="hl-icon">🌱</span>
                <div>
                  <strong>Long-Term Habits</strong>
                  <p>Building lifestyle changes that you can sustain for life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
