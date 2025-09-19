
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Peekaboo Interactive</h1>
        <nav className="nav">
          <a href="#apps" className="nav-link">Apps</a>
          <a href="#features" className="nav-link">Why Peekaboo?</a>
          <a href="https://apps.apple.com/us/developer/bhhc-llc/id1808485512" className="nav-link" target="_blank" rel="noopener noreferrer">Developer</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
