import React from 'react';
import './Home.css';
import ComingSoonBanner from '../components/ComingSoonBanner';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to TechTutor</h1>
        <p className="home-subtitle">Your friendly guide to phones and computers.</p>
        <p className="home-instruction">
          Select a topic from the navigation menu on the left to begin your learning journey!
        </p>
        <ComingSoonBanner />
      </div>
    </div>
  );
}

export default Home;