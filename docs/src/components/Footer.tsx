
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Peekaboo Interactive. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506" target="_blank" rel="noopener noreferrer">Peekaboo Calm</a>
            <a href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469?uo=2" target="_blank" rel="noopener noreferrer">Peekaboo Plunk</a>
            <a href="https://apps.apple.com/us/developer/bhhc-llc/id1808485512" target="_blank" rel="noopener noreferrer">App Store Developer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
