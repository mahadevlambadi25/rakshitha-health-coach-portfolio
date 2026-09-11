import React from 'react';
import { coachData } from '../../data/coachData';
import './VideoSection.css';

export default function VideoSection() {
  const videoId = coachData.links.youtubeVideoId;

  return (
    <section id="approach-video" className="section video-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Watch The Approach</span>
          <h2 className="section-title">How We Help</h2>
          <p className="section-subtitle">
            Take a few minutes to understand our simple and practical approach to health and lifestyle.
          </p>
        </div>

        {/* Responsive Video Frame */}
        <div className="video-player-wrapper">
          <div className="video-responsive-container">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
              title="Rustic Wisdom Health Coaching Approach"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="video-iframe"
            ></iframe>
          </div>
        </div>

        <div className="video-caption-box">
          <p>
            Learn why home-cooked nutrition, sustainable micro-habits, and light activity create lifelong health without extreme routines.
          </p>
        </div>
      </div>
    </section>
  );
}
