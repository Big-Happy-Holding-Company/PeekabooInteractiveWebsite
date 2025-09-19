
import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Calming, Educational Apps for Toddlers 0–4</h2>
        <p className="hero-description">
          Discover gentle interactive physics dioramas that turn small taps into peaceful discovery. No ads, no scores—just soothing colors, soft sounds, and cozy moments designed for little hands and sensory-sensitive kids.
        </p>
        <div className="hero-buttons">
          <a
            href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
            className="app-store-button calm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Peekaboo Calm
          </a>
          <a
            href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469?uo=2"
            className="app-store-button plunk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Peekaboo Plunk
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-placeholder">Gentle Peekaboo World</div>
      </div>
    </section>
  );
};

export default Hero;
