import React, { useMemo } from 'react';
import { useProgress } from '../context/ProgressContext';
import { topics } from '../components/topics.js';
import { quizzes } from '../components/quizzes.js';
import { badgeData } from '../components/badges.js';
import ProgressBar from '../components/ProgressBar';
import './Badges.css';

function Badges() {
  const { completedItems, resetProgress } = useProgress();

  // Memoize the overall progress calculation for performance
  const { overallPercentage, completedItemsCount, totalItems } = useMemo(() => {
    const totalTopics = topics.length;
    const completedTopics = completedItems.topics.length;
    const totalQuizzes = quizzes.filter(q => q.questions && q.questions.length > 0).length;
    const completedQuizzes = completedItems.quizzes.length;
    const total = totalTopics + totalQuizzes;
    const completed = completedTopics + completedQuizzes;
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    return { overallPercentage: percentage, completedItemsCount: completed, totalItems: total };
  }, [completedItems]);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all your progress? This action cannot be undone.")) {
      resetProgress();
    }
  };

  return (
    <div className="badges-container">
      <h2>My Badges & Progress</h2>
      <p>You'll earn badges here as you complete sections of the course and pass quizzes.</p>

      <div className="overall-progress-section">
        <h3>Overall Course Progress</h3>
        <ProgressBar percentage={overallPercentage} />
        <p>{completedItemsCount} of {totalItems} items completed.</p>
      </div>

      <div className="badges-grid">
        {badgeData.map(badge => {
          const earned = badge.condition(completedItems);
          return (
            <div key={badge.id} className={`badge-card ${earned ? 'earned' : ''}`}>
              <div className="badge-icon">{earned ? badge.icon : '❓'}</div>
              <h3 className="badge-name">{badge.name}</h3>
              <p className="badge-description">{badge.description}</p>
            </div>
          );
        })}
      </div>

      <div className="reset-section">
        <h3>Reset Progress</h3>
        <p>This will clear all your completed topics and quizzes, and reset your progress. Use with caution!</p>
        <button className="reset-button" onClick={handleReset}>
          Reset All Progress
        </button>
      </div>
    </div>
  );
}

export default Badges;