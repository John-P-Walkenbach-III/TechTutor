import React from 'react';
import { Link } from 'react-router-dom';
import './StudyGuideList.css';

function StudyGuideList({ topics, isComplete, title = "Study Guides" }) {
  if (!topics || topics.length === 0) {
    return null;
  }

  return (
    <div className="list-section">
      <h3>{title}</h3>
      <ul className="item-list">
        {topics.map(topic => (
          <li key={topic.id}>
            <Link to={`/study/${topic.id}`}>
              {topic.title}
              {isComplete('topics', topic.id) && <span className="completion-check"> ✅</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudyGuideList;