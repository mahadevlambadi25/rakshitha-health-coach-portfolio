import React from 'react';
import { coachData } from '../../data/coachData';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">The Roadmap</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A simple 4-step journey focused on building sustainable habits for a lifetime of vibrant health.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="steps-grid">
          {coachData.howItWorks.map((step) => (
            <div key={step.stepNumber} className="step-card">
              <div className="step-num-bubble">{step.stepNumber}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
