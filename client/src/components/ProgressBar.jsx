import React from 'react';
import './ProgressBar.css';

function ProgressBar({ percentage }) {
  const roundedPercentage = Math.round(percentage);
  return (
    <div className="progress-bar-container" title={`${roundedPercentage}% Complete`}>
      <div
        className="progress-bar"
        style={{ width: `${percentage}%` }}
      >
        {roundedPercentage > 5 && `${roundedPercentage}%`}
      </div>
    </div>
  );
}

export default ProgressBar;