import React, { useState } from 'react';
import { coachData, getWhatsAppLink } from '../../data/coachData';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Common Inquiries</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about working together, coaching formats, and what to expect.
          </p>
        </div>

        <div className="faq-container">
          {coachData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-more">
          <p>Still have a specific question about your health condition?</p>
          <a
            href={getWhatsAppLink("Hi Rakshita! I have a question before booking a consultation:")}
            target="_blank"
            rel="noopener noreferrer"
            className="faq-whatsapp-link"
          >
            Ask Rakshita Directly on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
