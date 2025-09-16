import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { quizzes } from '../components/quizzes.js';
import { categories } from '../components/categories.js';
import './PrintableAnswerKey.css';

function PrintableAnswerKey() {
  const handlePrint = () => {
    window.print();
  };

  const categoryIdToName = useMemo(() => {
    return categories.reduce((acc, cat) => {
      acc[cat.id] = cat.name;
      return acc;
    }, {});
  }, []);

  const quizzesByCategory = useMemo(() => {
    return quizzes.reduce((acc, quiz) => {
      const categoryId = quiz.category || 'general';
      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }
      acc[categoryId].push(quiz);
      return acc;
    }, {});
  }, []);

  return (
    <div className="printable-answer-key-container">
      <div className="printable-header no-print">
        <h1>Quiz Answer Key</h1>
        <div className="printable-actions">
          <button onClick={handlePrint} className="print-button">🖨️ Print</button>
          <Link to="/quizzes" className="back-button">Back to Quizzes</Link>
        </div>
      </div>

      <div className="answer-key-content">
        {Object.entries(quizzesByCategory).map(([categoryId, quizList]) => (
          <div key={categoryId} className="category-section">
            <h2>{categoryIdToName[categoryId] || 'General'}</h2>
            {quizList.map(quiz => (
              <div key={quiz.id} className="quiz-section">
                <h3>{quiz.title}</h3>
                {quiz.questions.map((question, index) => (
                  <div key={index} className="question-answer">
                    <p><strong>{index + 1}. {question.text}</strong></p>
                    <p className="correct-answer">
                      Answer: {question.options[question.correctAnswer]}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrintableAnswerKey;