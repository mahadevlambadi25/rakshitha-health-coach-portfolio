import React from 'react';
import { coachData } from '../../data/coachData';
import './Results.css';

export default function Results() {
  return (
    <section id="results" className="section results-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge earth">Impact & Experience</span>
          <h2 className="section-title">Results & Milestones</h2>
          <p className="section-subtitle">
            Sustainable transformation built on consistent guidance, daily plate reviews, and simple everyday choices.
          </p>
        </div>

        {/* 4 Statistics Cards */}
        <div className="results-stats-grid">
          {coachData.stats.map((stat, index) => (
            <div key={index} className="result-stat-card">
              <div className="result-stat-number">{stat.number}</div>
              <h3 className="result-stat-label">{stat.label}</h3>
              <p className="result-stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Achievement Statement Box */}
        <div className="achievement-highlight-card">
          <div className="achievement-icon">🌱</div>
          <div className="achievement-content">
            <h3 className="achievement-heading">Dedicated Client Support</h3>
            <p className="achievement-text">
              "{coachData.achievementStatement}"
            </p>
            <span className="achievement-subtext">
              * Individual health goals are supported through personalized nutrition and lifestyle habits without medical claims.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
