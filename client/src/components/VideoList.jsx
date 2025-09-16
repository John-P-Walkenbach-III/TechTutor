import React from 'react';
import './VideoList.css';

function VideoList({ sections }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map(section => (
        <div key={section.title} className="list-section">
          <h3>{section.title}</h3>
          <ul className="item-list">
            {section.videos.map(video => (
              <li key={video.id}>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  {video.title}
                  <span className="external-link-icon">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default VideoList;