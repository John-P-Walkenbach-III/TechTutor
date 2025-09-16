import React, { useMemo } from 'react';
import { topics } from '../components/topics';
import StudyGuideList from '../components/StudyGuideList';
import { useProgress } from '../context/ProgressContext';
import './LessonPage.css'; // Re-using styles from LessonPage

const WebDevelopment = () => {
  const { isComplete } = useProgress();

  const webDevTopics = useMemo(() => topics.filter(t => t.category === 'web-development'), []);

  const htmlTopics = useMemo(() =>
    webDevTopics.filter(topic => topic.id.startsWith('html-') || topic.id === 'intro-to-html'),
    [webDevTopics]
  );

  const cssTopics = useMemo(() =>
    webDevTopics.filter(topic => topic.id.startsWith('css-') || topic.id === 'intro-to-css'),
    [webDevTopics]
  );

  const jsTopics = useMemo(() =>
    webDevTopics.filter(topic => topic.id.startsWith('javascript-') || topic.id === 'intro-to-javascript'),
    [webDevTopics]
  );

  const toolsTopics = useMemo(() =>
    webDevTopics.filter(topic => topic.id.startsWith('browser-')),
    [webDevTopics]
  );

  return (
    <div className="lesson-page-container">
      <h2>Web Development</h2>
      <p>Learn the building blocks of the web: HTML, CSS, and JavaScript.</p>

      <StudyGuideList topics={htmlTopics} isComplete={isComplete} title="HTML Foundations" />
      <StudyGuideList topics={cssTopics} isComplete={isComplete} title="CSS Foundations" />
      <StudyGuideList topics={jsTopics} isComplete={isComplete} title="JavaScript Foundations" />
      <StudyGuideList topics={toolsTopics} isComplete={isComplete} title="Tools and Debugging" />
    </div>
  );
};

export default WebDevelopment;