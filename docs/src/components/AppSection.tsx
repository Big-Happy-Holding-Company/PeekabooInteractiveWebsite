
import React from 'react';
import './AppSection.css';

interface AppSectionProps {
  title: string;
  description: string;
  appStoreLink: string;
  imageAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
  key?: string;
}

const AppSection: React.FC<AppSectionProps> = ({ title, description, appStoreLink, imageAlt, children, reverse = false }) => {
  return (
    <section className={`app-section ${reverse ? 'reverse' : ''}`}>
      <div className="container">
        <div className={`app-content ${reverse ? 'reverse' : ''}`}>
          <div className="app-text">
            <h3 className="app-title">{title}</h3>
            <p className="app-description">{description}</p>
            {children}
            <a
              href={appStoreLink}
              className="download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on the App Store
            </a>
          </div>
          <div className="app-visual">
            <div className="visual-placeholder" aria-label={imageAlt}>
              {title} Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
