import React from 'react';
import { coachData } from '../../data/coachData';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge earth">What We Offer</span>
          <h2 className="section-title">Personalised Health Coaching That Fits Your Life</h2>
          <p className="section-subtitle">
            We believe in making health simple and doable, no matter what stage of life you're in.
          </p>
        </div>

        {/* 4 Organized Service Cards */}
        <div className="services-grid-four">
          {coachData.services.map((service) => (
            <div key={service.id} className="service-category-card">
              <div className="card-top-header">
                <span className="card-icon">{service.icon}</span>
                <h3 className="category-title">{service.category}</h3>
              </div>

              <p className="category-summary">{service.summary}</p>

              {/* Badges for health concerns if present */}
              {service.concerns && (
                <div className="concerns-tags">
                  <span className="concerns-label">Support available for:</span>
                  <div className="tags-flex">
                    {service.concerns.map((c, i) => (
                      <span key={i} className="concern-tag">{c}</span>
                    ))}
                  </div>
                </div>
              )}

              <ul className="service-items-list">
                {service.items.map((item, idx) => (
                  <li key={idx} className="service-item">
                    <svg className="check-svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#EAF2ED"/>
                      <path d="M6 10.5L8.5 13L14 7.5" stroke="#244E3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {service.disclaimer && (
                <p className="service-disclaimer-note">{service.disclaimer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
