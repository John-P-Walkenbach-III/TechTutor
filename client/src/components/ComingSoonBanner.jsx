import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoonBanner.css';
import { zoomConfig } from '../config';

const ComingSoonBanner = () => {
  return (
    <div className="coming-soon-banner">
      <h2>Live Tech Chat is Here!</h2>
      <p>Join us {zoomConfig.schedule}. Click the link below to join.</p>
      <a
        href={zoomConfig.link}
        target="_blank"
        rel="noopener noreferrer"
        className="zoom-link-button"
      >
        Join Live Chat
      </a>
      <p className="banner-sub-text">
        For more details, see the <Link to="/study/how-to-use-zoom">How to Use Zoom guide</Link>.
      </p>
    </div>
  );
};

export default ComingSoonBanner;