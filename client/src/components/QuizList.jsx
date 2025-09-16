import React from 'react';
import { Link } from 'react-router-dom';
import './QuizList.css';

function QuizList({ quizzes, isComplete }) {
  return (
    <ul className="item-list">
      {quizzes.map(quiz => (
        <li key={quiz.id}>
          {quiz.questions && quiz.questions.length > 0 ? (
            <Link to={`/quiz/${quiz.id}`}>
              {quiz.title}
              {isComplete('quizzes', quiz.id) && <span className="completion-check"> ✅</span>}
            </Link>
          ) : (
            <a href={quiz.url} target="_blank" rel="noopener noreferrer" className="external-link">
              {quiz.title} (External)
              <span className="external-link-icon">↗</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default QuizList;