import React from 'react';
import { coachData } from '../../data/coachData';
import './Credentials.css';

export default function Credentials() {
  return (
    <section id="credentials" className="section credentials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Credibility & Quality</span>
          <h2 className="section-title">Credentials & Trust</h2>
          <p className="section-subtitle">
            {coachData.credentialsNotice}
          </p>
        </div>

        {/* 5 Trust Badges */}
        <div className="credentials-grid-five">
          {coachData.credentials.map((cred, index) => (
            <div key={index} className="trust-badge-card">
              <div className="badge-card-icon">{cred.icon}</div>
              <h3 className="badge-card-title">{cred.title}</h3>
              <p className="badge-card-desc">{cred.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
