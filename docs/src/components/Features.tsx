
import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🎯',
      title: 'One-Tap Play',
      description: 'Simple interactions with large touch areas for little hands—no complicated controls, just gentle discovery.'
    },
    {
      icon: '🎨',
      title: 'Soothing Design',
      description: 'Soft sounds, calming colors, and peaceful visuals tailored for sensory-sensitive toddlers.'
    },
    {
      icon: '🎙️',
      title: 'Record Your Own Voice',
      description: 'Personalize with familiar voices from family, making every session feel warm and connected.'
    },
    {
      icon: '⏰',
      title: 'No Pressure Moments',
      description: 'No ads, scores, timers, or rush—ideal for short, cozy sessions during bedtime, transitions, or on-the-go.'
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Easy Co-Play',
      description: 'Designed for parents and kids to share quiet, cause-and-effect fun together.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="features-title">Why Choose Peekaboo?</h2>
        <p className="features-subtitle">These are not games—they're thoughtful tools for calm, educational exploration.</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
