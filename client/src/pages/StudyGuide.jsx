import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { topics } from '../components/topics.js';
import './StudyGuide.css';
import { useProgress } from '../context/ProgressContext.jsx';

function StudyGuide() {
  // The useParams hook gets the dynamic part of the URL, in this case, the topicId.
  const { topicId } = useParams();
  // Find the topic from our data file that matches the topicId from the URL.
  const topic = topics.find(t => t.id === topicId);

  // Memoize the calculation for the next topic so it only runs when the topic changes.
  const nextTopic = useMemo(() => {
    if (!topic) return null;
    const topicsInCategory = topics.filter(t => t.category === topic.category);
    const currentIndex = topicsInCategory.findIndex(t => t.id === topicId);
    return currentIndex !== -1 && currentIndex < topicsInCategory.length - 1
      ? topicsInCategory[currentIndex + 1]
      : null;
  }, [topic, topicId]);

  const { markAsComplete, isComplete } = useProgress();
  const isTopicComplete = isComplete('topics', topicId);

  const handlePrint = () => {
    window.print();
  };

  if (!topic) {
    return (
      <div>
        <h2>Topic not found</h2>
        <p>Sorry, we couldn't find the topic you were looking for.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  // The "dangerouslySetInnerHTML" prop is used here to render the HTML content from our topics.js file.
  // It's safe in this case because we are the ones providing the HTML content.
  return (
    <div className="study-topic-container">
      <div className="study-topic-header">
        <h2>{topic.title}</h2>
        <div className="study-topic-actions">
          <button className="print-button" onClick={handlePrint}>
            🖨️ Print
          </button>
          {isTopicComplete ? (
            <span className="completed-badge">✅ Completed</span>
          ) : (
            <button className="complete-button" onClick={() => markAsComplete('topics', topicId)}>
              Mark as Complete
            </button>
          )}
        </div>
      </div>
      <div className="study-topic-content" dangerouslySetInnerHTML={{ __html: topic.content }} />

      {nextTopic && (
        <div className="navigation-footer">
          <Link to={`/study/${nextTopic.id}`} className="next-topic-button">
            Next Topic: {nextTopic.title} &rarr;
          </Link>
        </div>
      )}

    </div>
  );
}

export default StudyGuide;