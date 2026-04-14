import { useState, useEffect } from 'react';
import './App.css';
import GamePlay from './components/GamePlay';
import ResultScreen from './components/ResultScreen';
import MainMenu from './components/MainMenu';
import { questions_data as questions, categories } from './constants/questions';

export default function App() {
  const [gameState, setGameState] = useState('menu'); // menu, playing, result
  const [difficulty, setDifficulty] = useState('normal');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [categoryScores, setCategoryScores] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validate questions data on mount
  useEffect(() => {
    try {
      if (!questions || typeof questions !== 'object') {
        throw new Error('게임 데이터를 불러올 수 없습니다.');
      }
      ['easy', 'normal', 'hard'].forEach(diff => {
        if (!Array.isArray(questions[diff]) || questions[diff].length === 0) {
          throw new Error(`${diff} 난이도 문제를 찾을 수 없습니다.`);
        }
      });
      setError(null);
    } catch (err) {
      setError(err.message || '알 수 없는 오류가 발생했습니다.');
    }
  }, []);

  const handleStartGame = (selectedDifficulty) => {
    // Validate difficulty
    if (!['easy', 'normal', 'hard'].includes(selectedDifficulty)) {
      setError('유효하지 않은 난이도입니다.');
      return;
    }

    // Validate questions data exists
    if (!questions[selectedDifficulty] || questions[selectedDifficulty].length === 0) {
      setError(`${selectedDifficulty} 난이도 문제를 찾을 수 없습니다.`);
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate data loading
    setTimeout(() => {
      try {
        setDifficulty(selectedDifficulty);
        setGameState('playing');
        setCurrentQuestion(0);
        setScore(0);
        setAnswers([]);
        setCategoryScores(
          categories.reduce((acc, cat) => {
            acc[cat] = { correct: 0, total: 0 };
            return acc;
          }, {})
        );
        setLoading(false);
      } catch (err) {
        setError('게임 시작 중 오류가 발생했습니다.');
        setLoading(false);
      }
    }, 300);
  };

  const handleAnswerQuestion = (selectedIndex) => {
    const questionData = questions[difficulty][currentQuestion];
    const isCorrect = selectedIndex === questionData.answer;

    // Update score
    if (isCorrect) {
      setScore(score + 1);
    }

    // Update category scores
    setCategoryScores(prev => ({
      ...prev,
      [questionData.category]: {
        correct: prev[questionData.category].correct + (isCorrect ? 1 : 0),
        total: prev[questionData.category].total + 1
      }
    }));

    // Store answer
    setAnswers([...answers, {
      questionId: questionData.id,
      selected: selectedIndex,
      correct: questionData.answer,
      isCorrect
    }]);

    // Move to next question or finish
    if (currentQuestion < questions[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('result');
    }
  };

  const handleSkipQuestion = () => {
    const questionData = questions[difficulty][currentQuestion];

    // Store answer as skipped
    setAnswers([...answers, {
      questionId: questionData.id,
      selected: -1,
      correct: questionData.answer,
      isCorrect: false
    }]);

    // Update category scores
    setCategoryScores(prev => ({
      ...prev,
      [questionData.category]: {
        correct: prev[questionData.category].correct,
        total: prev[questionData.category].total + 1
      }
    }));

    // Move to next question
    if (currentQuestion < questions[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('result');
    }
  };

  const handleBackQuestion = () => {
    if (currentQuestion > 0) {
      // Remove last answer
      const lastAnswer = answers[answers.length - 1];
      const questionData = questions[difficulty][currentQuestion - 1];

      // Batch update all state changes together
      setAnswers(answers.slice(0, -1));

      if (lastAnswer.isCorrect) {
        setScore(score - 1);
      }

      setCategoryScores(prev => ({
        ...prev,
        [questionData.category]: {
          correct: prev[questionData.category].correct - (lastAnswer.isCorrect ? 1 : 0),
          total: prev[questionData.category].total - 1
        }
      }));

      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRetryGame = () => {
    setGameState('menu');
  };

  return (
    <div className="app">
      {error && (
        <div className="error-overlay" role="alert" aria-live="assertive">
          <div className="error-box">
            <h2>오류 발생</h2>
            <p>{error}</p>
            <button
              onClick={() => {
                setError(null);
                setGameState('menu');
              }}
              className="error-close-btn"
              type="button"
            >
              메인 메뉴로 돌아가기
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="loading-overlay" role="status" aria-live="polite">
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <p>게임을 시작하고 있습니다...</p>
          </div>
        </div>
      )}

      {gameState === 'menu' && !error && (
        <MainMenu onStartGame={handleStartGame} />
      )}

      {gameState === 'playing' && !error && (
        <GamePlay
          question={questions[difficulty][currentQuestion]}
          currentQuestionNum={currentQuestion + 1}
          totalQuestions={questions[difficulty].length}
          onAnswer={handleAnswerQuestion}
          onSkip={handleSkipQuestion}
          onBack={handleBackQuestion}
          canGoBack={currentQuestion > 0}
        />
      )}

      {gameState === 'result' && !error && (
        <ResultScreen
          score={score}
          totalQuestions={questions[difficulty].length}
          categoryScores={categoryScores}
          difficulty={difficulty}
          onRetry={handleRetryGame}
        />
      )}
    </div>
  );
}
