import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { topics } from '../components/topics.js';
import { categories } from '../components/categories.js';
import { videoSections } from '../components/videos.js';
import { useProgress } from '../context/ProgressContext.jsx';
import VideoList from '../components/VideoList.jsx';
import StudyGuideList from '../components/StudyGuideList.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import './LessonPage.css';

function LessonPage({ category, title, description }) {
  const { isComplete } = useProgress();

  // Find the category object by either its ID or name to ensure compatibility.
  const categoryId = useMemo(() => {
    const categoryObject = categories.find(c => c.id === category || c.name === category);
    return categoryObject ? categoryObject.id : null;
  }, [category]);

  const relevantVideoSections = useMemo(() => videoSections.filter(section => section.category === categoryId), [categoryId]);
  const relevantTopics = useMemo(() => topics.filter(topic => topic.category === categoryId), [categoryId]);

  // Memoize the progress calculation for performance.
  const progressPercentage = useMemo(() => {
    const completedTopicsCount = relevantTopics.filter(topic =>
      isComplete('topics', topic.id)
    ).length;
    const totalTopicsCount = relevantTopics.length;
    return totalTopicsCount > 0 ? (completedTopicsCount / totalTopicsCount) * 100 : 0;
  }, [relevantTopics, isComplete]);

  return (
    <div key={categoryId}>
      <h2>{title}</h2>
      <p>{description}</p>

      <ProgressBar percentage={progressPercentage} />

      <VideoList sections={relevantVideoSections} />
      <StudyGuideList topics={relevantTopics} isComplete={isComplete} />
    </div>
  );
}

export default LessonPage;