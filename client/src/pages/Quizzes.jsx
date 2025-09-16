import React, { useMemo } from 'react';
import { quizzes } from '../components/quizzes.js';
import { categories } from '../components/categories.js';
import { useProgress } from '../context/ProgressContext.jsx';
import QuizList from '../components/QuizList.jsx';
import './Quizzes.css';

function Quizzes() {
  const { isComplete } = useProgress();

  // Memoize the category map for performance
  const categoryIdToName = useMemo(() => {
    return categories.reduce((acc, cat) => {
      acc[cat.id] = cat.name;
      return acc;
    }, {});
  }, []); // Empty dependency array means this runs only once

  // Group quizzes by category ID
  const quizzesByCategory = useMemo(() => {
    return quizzes.reduce((acc, quiz) => {
      const categoryId = quiz.category || 'general';
      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }
      acc[categoryId].push(quiz);
      return acc;
    }, {});
  }, []); // quizzes is static, so this only needs to run once.

  return (
    <div className="quizzes-container">
      <h2>Quizzes</h2>
      <p>Test your knowledge on the topics you've studied.</p>

      {Object.entries(quizzesByCategory).map(([categoryId, quizList]) => (
        <div key={categoryId} className="quiz-category-section">
          <h3>{categoryIdToName[categoryId] || 'General'}</h3>
          <QuizList quizzes={quizList} isComplete={isComplete} />
        </div>
      ))}
    </div>
  );
}
export default Quizzes;