import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { quizzes } from '../components/quizzes.js';
import { useProgress } from '../context/ProgressContext.jsx';
import './Quiz.css';

function Quiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { markAsComplete, isComplete } = useProgress();

  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const foundQuiz = quizzes.find(q => q.id === quizId);
    if (foundQuiz) {
      setQuiz(foundQuiz);
      if (isComplete('quizzes', quizId)) {
        // If the quiz is already complete, we can show a message.
        // A future improvement could be to store and show past results.
        setIsSubmitted(true);
      }
    } else {
      navigate('/quizzes'); // Redirect if quiz not found
    }
  }, [quizId, navigate, isComplete]);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quiz.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correctCount++;
      }
    });
    const finalScore = (correctCount / quiz.questions.length) * 100;
    setScore(finalScore);
    setIsSubmitted(true);
    markAsComplete('quizzes', quizId);
  };

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return <div className="quiz-container">This quiz is not yet available.</div>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  if (isSubmitted) {
    return (
      <div className="quiz-container quiz-results">
        <div className="quiz-header">
          <Link to={`/quiz/${quizId}/print`} className="printable-link">
            🖨️ View Printable Version
          </Link>
        </div>
        <h2>{quiz.title} - Results</h2>
        {score !== null ? (
          <>
            <p className="quiz-score">Your Score: {score.toFixed(0)}%</p>
            <div className="quiz-review">
              {quiz.questions.map((q, index) => (
                <div key={index} className="review-question">
                  <p><strong>{index + 1}. {q.text}</strong></p>
                  <ul className="review-options">
                    {q.options.map((option, i) => (
                      <li key={i} className={`
                          ${i === q.correctAnswer ? 'correct' : ''}
                          ${selectedAnswers[index] === i && i !== q.correctAnswer ? 'incorrect' : ''}
                        `}>
                        {option}
                        {i === q.correctAnswer && " (Correct Answer)"}
                        {selectedAnswers[index] === i && i !== q.correctAnswer && " (Your Answer)"}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        ) : (
           <p>You have already completed this quiz.</p>
        )}
        <button onClick={() => navigate('/quizzes')} className="quiz-nav-button">
          Back to Quizzes
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <Link to={`/quiz/${quizId}/print`} className="printable-link">
          🖨️ View Printable Version
        </Link>
      </div>
      <h2>{quiz.title}</h2>
      <div className="quiz-progress">
        Question {currentQuestionIndex + 1} of {quiz.questions.length}
      </div>
      <div className="quiz-question-card">
        <p className="quiz-question-text">{currentQuestion.text}</p>
        <div className="quiz-options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option-button ${selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(currentQuestionIndex, index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="quiz-navigation">
        <button onClick={handlePrev} disabled={currentQuestionIndex === 0} className="quiz-nav-button">
          Previous
        </button>
        {currentQuestionIndex < quiz.questions.length - 1 ? (
          <button onClick={handleNext} className="quiz-nav-button">
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} className="quiz-submit-button">
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;