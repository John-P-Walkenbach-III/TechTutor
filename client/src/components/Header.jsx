import React from 'react';
import './Header.css';

function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="app-header">
      <button
        className={`menu-toggle ${isSidebarOpen ? 'is-open' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="header-title">Your Guide to Digital Confidence</h1>
    </header>
  );
}

export default Header;