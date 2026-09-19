import React from 'react';
import { coachData } from '../../data/coachData';
import './VideoTestimonials.css';

/**
 * Single Video Testimonial Card
 * Supports:
 * - 'placeholder' (Default): Clean branded preview with prompt to add video
 * - 'youtube': YouTube embed with responsive 16:9 ratio
 * - 'vimeo': Vimeo embed with responsive 16:9 ratio
 * - 'html5': Native HTML5 video tag with player controls
 */
function VideoCard({ item }) {
  const { title, quote, clientName, tag, videoType, videoSrc, thumbnail } = item;

  const renderVideoPlayer = () => {
    if (videoType === 'youtube' && videoSrc) {
      return (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoSrc}?rel=0`}
          title={`${clientName} - ${title}`}
          className="video-embed-iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      );
    }

    if (videoType === 'vimeo' && videoSrc) {
      return (
        <iframe
          src={`https://player.vimeo.com/video/${videoSrc}`}
          title={`${clientName} - ${title}`}
          className="video-embed-iframe"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      );
    }

    if (videoType === 'html5' && videoSrc) {
      return (
        <video
          src={videoSrc}
          poster={thumbnail || undefined}
          controls
          playsInline
          className="video-embed-element"
          preload="metadata"
        >
          Your browser does not support HTML5 video.
        </video>
      );
    }

    // Default: Responsive 16:9 Placeholder Card
    return (
      <div
        className="video-placeholder-screen"
        role="img"
        aria-label={`Video placeholder for ${clientName}: ${title}`}
      >
        <div className="placeholder-badge-chip">16:9 Video</div>
        <div className="placeholder-play-circle" aria-hidden="true">
          <svg
            className="play-icon-svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="28"
            height="28"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="placeholder-overlay-copy">
          <span className="placeholder-main-label">Video Testimonial Placeholder</span>
          <span className="placeholder-sub-label">Ready for YouTube, Vimeo, or MP4</span>
        </div>
      </div>
    );
  };

  return (
    <article className="video-card">
      <div className="video-frame-container">
        {renderVideoPlayer()}
      </div>

      <div className="video-card-body">
        {tag && <span className="video-card-tag">{tag}</span>}
        <blockquote className="video-card-quote">
          "{quote}"
        </blockquote>
        <footer className="video-card-client">
          <span className="client-dash">—</span>
          <cite className="client-name">{clientName}</cite>
        </footer>
      </div>
    </article>
  );
}

export default function VideoTestimonials() {
  const testimonials = coachData.videoTestimonials || [];
  const cta = coachData.consultationCta || {
    heading: "Ready to Start Your Own Transformation?",
    subtext: "Take the first step towards a healthier and more sustainable lifestyle.",
    buttonText: "Book Your Free Consultation",
    buttonHref: "#contact",
  };

  return (
    <section id="video-testimonials" className="section video-testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge earth">Video Stories</span>
          <h2 className="section-title">Video Testimonials</h2>
          <p className="section-subtitle">
            Real stories and experiences from people who have transformed their health and lifestyle with Rustic Wisdom.
          </p>
        </div>

        {/* Responsive Video Cards Grid */}
        <div className="video-cards-grid">
          {testimonials.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>

        {/* Consultation CTA Banner immediately below Testimonials */}
        <div className="video-testimonials-cta">
          <div className="video-cta-card">
            <span className="section-badge">Take The First Step</span>
            <h3 className="video-cta-heading">{cta.heading}</h3>
            <p className="video-cta-subtext">{cta.subtext}</p>
            <div className="video-cta-action">
              <a
                href={cta.buttonHref}
                className="btn btn-primary btn-lg video-cta-btn"
                id="video-cta-consultation-btn"
              >
                <span>{cta.buttonText}</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
