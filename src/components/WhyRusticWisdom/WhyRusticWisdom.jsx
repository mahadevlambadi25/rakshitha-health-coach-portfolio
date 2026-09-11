import React from 'react';
import { coachData } from '../../data/coachData';
import './WhyRusticWisdom.css';

export default function WhyRusticWisdom() {
  return (
    <section id="why-rustic-wisdom" className="section why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">The Rustic Wisdom Philosophy</span>
          <h2 className="section-title">A Simpler Approach to Better Health</h2>
          <p className="section-subtitle">
            Most diets fail because they demand unsustainable sacrifices. We replace extreme restrictions with gentle, practical routines that work within your daily life.
          </p>
        </div>

        {/* Wellness & Health Coaching Spotlight featuring rakshitha-3.jpg */}
        <div className="wellness-spotlight-card">
          <div className="wellness-spotlight-img-wrap">
            <img
              src="/images/rakshitha-3.jpg"
              alt="Rakshitha Dutt, Senior Health Coach guiding clients through natural wellness routines and home-cooked nutrition"
              className="wellness-spotlight-img"
              loading="lazy"
            />
          </div>
          <div className="wellness-spotlight-content">
            <span className="spotlight-tag">Wellness Through Real Habits</span>
            <h3 className="spotlight-title">Health That Fits Into Your Everyday Life</h3>
            <p className="spotlight-text">
              "We believe true vitality shouldn't feel like a second job or an endless battle with willpower. When you nourish your body with comforting, balanced home-cooked meals and gentle daily movement, lasting wellness follows naturally."
            </p>
            <div className="spotlight-trust-tags">
              <span className="spotlight-badge">✓ Simple Home-Cooked Food</span>
              <span className="spotlight-badge">✓ Sustainable Micro-Habits</span>
              <span className="spotlight-badge">✓ No Gym Dependency</span>
            </div>
          </div>
        </div>

        {/* 5 Core Cards */}
        <div className="why-cards-grid">
          {coachData.whyRusticWisdom.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-card-icon">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="why-trust-banner-wrap">
          <div className="trust-strip-banner">
            <span>No supplements</span>
            <span className="trust-dot">•</span>
            <span>No shakes</span>
            <span className="trust-dot">•</span>
            <span>No pills</span>
            <span className="trust-dot">•</span>
            <span>No rigorous workouts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
