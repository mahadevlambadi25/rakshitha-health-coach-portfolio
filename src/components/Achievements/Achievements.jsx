import React from 'react';
import { coachData, getWhatsAppLink } from '../../data/coachData';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Track Record & Impact</span>
          <h2 className="section-title">Measurable Results, Lifelong Transformations</h2>
          <p className="section-subtitle">
            Coaching is not just about advice—it's about measurable milestones, lab-backed health improvements, and newfound daily energy.
          </p>
        </div>

        {/* Big Numbers Grid */}
        <div className="stats-grid">
          {coachData.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Differentiators Grid */}
        <div className="differentiators-box">
          <div className="diff-header">
            <h3 className="diff-title">Why Clients Choose Rakshita</h3>
            <p className="diff-subtitle">Unlike typical dietitians who hand you a rigid printed chart and send you on your way:</p>
          </div>

          <div className="diff-grid">
            <div className="diff-item">
              <span className="diff-icon">🔬</span>
              <h4>Root-Cause Science</h4>
              <p>We analyze blood markers, sleep cycles, and digestion rather than merely counting calories in vs. calories out.</p>
            </div>

            <div className="diff-item">
              <span className="diff-icon">🍛</span>
              <h4>Cultural Compatibility</h4>
              <p>Tailored for traditional Indian meals (dal, roti, rice, sabzi) as well as global cuisines so you don't cook separate meals.</p>
            </div>

            <div className="diff-item">
              <span className="diff-icon">📱</span>
              <h4>High-Touch WhatsApp Support</h4>
              <p>Got a party or wedding tonight? Take a photo of the buffet menu and receive instant guidance on WhatsApp.</p>
            </div>

            <div className="diff-item">
              <span className="diff-icon">🌱</span>
              <h4>Lifelong Independence</h4>
              <p>You won't depend on a coach forever. You'll master nutrition principles and navigate life effortlessly after graduation.</p>
            </div>
          </div>

          <div className="diff-footer">
            <span>Ready to see your own transformation?</span>
            <a
              href={getWhatsAppLink("Hi Rakshita! I would love to talk about starting my health transformation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              Message Rakshita on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
