import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { quizzes } from '../components/quizzes.js';
import './PrintableQuiz.css';

function PrintableQuiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes.find(q => q.id === quizId);

  const handlePrint = () => {
    window.print();
  };

  if (!quiz) {
    return (
      <div className="printable-quiz-container">
        <h2>Quiz not found</h2>
        <p>Sorry, we couldn't find the quiz you were looking for.</p>
        <Link to="/quizzes">Back to Quizzes</Link>
      </div>
    );
  }

  return (
    <div className="printable-quiz-container">
      <div className="printable-header no-print">
        <h1>Printable Quiz</h1>
        <div className="printable-actions">
          <button onClick={handlePrint} className="print-button">🖨️ Print</button>
          <button onClick={() => navigate(`/quiz/${quizId}`)} className="back-button">Back to Interactive Quiz</button>
        </div>
      </div>

      <div className="quiz-content">
        <h2>{quiz.title}</h2>
        <p><strong>Name:</strong> ___________________________</p>
        <p><strong>Date:</strong> ___________________________</p>
        <hr />

        {quiz.questions.map((question, index) => (
          <div key={index} className="printable-question">
            <p><strong>{index + 1}. {question.text}</strong></p>
            <ul className="printable-options">
              {question.options.map((option, i) => (
                <li key={i}>
                  <span className="option-letter">{String.fromCharCode(65 + i)}.</span> {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrintableQuiz;