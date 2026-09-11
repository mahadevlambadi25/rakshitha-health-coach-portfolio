import React, { useState } from 'react';
import { coachData, getWhatsAppLink } from '../../data/coachData';
import './ContactCTA.css';

export default function ContactCTA() {
  const [selectedGoal, setSelectedGoal] = useState("Weight Management & Nutrition");

  const goals = [
    "Weight Management & Nutrition",
    "PCOS / Hormonal Balance",
    "Gut Health & Bloating",
    "Chronic Fatigue & Energy",
    "Custom Discovery Call",
  ];

  const generatedWhatsAppLink = getWhatsAppLink(
    `Hi Rakshita! I visited your portfolio and I would like to consult with you about: ${selectedGoal}. How do we get started?`
  );

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-badge">
            <span>Direct WhatsApp Access</span>
          </div>

          <h2 className="contact-headline">
            Start Your Transformation Today.
          </h2>

          <p className="contact-subtext">
            No long waiting lists or complicated paperwork. Connect directly with Rakshita on WhatsApp to discuss your goals and schedule your initial consultation.
          </p>

          {/* Goal Selector */}
          <div className="goal-selector-wrapper">
            <label className="goal-label">What is your primary health focus?</label>
            <div className="goal-tags">
              {goals.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  className={`goal-tag ${selectedGoal === goal ? 'active' : ''}`}
                  onClick={() => setSelectedGoal(goal)}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Primary CTA Action */}
          <div className="contact-action-box">
            <a
              href={generatedWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg contact-whatsapp-btn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.952 3.71 1.453 5.711 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z"/>
              </svg>
              <span>Chat with Rakshita on WhatsApp</span>
            </a>
            <p className="response-time">⚡ Typically responds within 2 hours during consultation hours</p>
          </div>

          {/* Secondary Details */}
          <div className="contact-details-bar">
            <div className="detail-item">
              <span className="detail-icon">📞</span>
              <span><strong>WhatsApp / Phone:</strong> {coachData.contact.displayPhone}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">✉️</span>
              <span><strong>Email:</strong> {coachData.contact.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🕒</span>
              <span><strong>Hours:</strong> {coachData.contact.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
