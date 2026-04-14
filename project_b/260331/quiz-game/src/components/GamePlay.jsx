import { useState, useEffect, useRef } from 'react';
import React from 'react';
import './GamePlay.css';

function GamePlay({
  question,
  currentQuestionNum,
  totalQuestions,
  onAnswer,
  onSkip,
  onBack,
  canGoBack
}) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const isMountedRef = useRef(true);
  const optionsContainerRef = useRef(null);

  // Timer with audio alert
  useEffect(() => {
    if (timeLeft <= 0) {
      if (isMountedRef.current) {
        onSkip();
      }
      return;
    }

    // Audio alert for low time
    if (timeLeft === 5) {
      playTimerAlert();
    }

    const timer = setTimeout(() => {
      if (isMountedRef.current) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onSkip]);

  // Reset state for new question
  useEffect(() => {
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [question.id]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const playTimerAlert = () => {
    // Create simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  const handleSelectAnswer = (index) => {
    if (!showFeedback) {
      setSelectedAnswer(index);
      setShowFeedback(true);
    }
  };

  const handleNextQuestion = () => {
    if (showFeedback && selectedAnswer !== null) {
      onAnswer(selectedAnswer);
    }
  };

  const handleKeyDown = (e, index) => {
    // Enter/Space to select answer
    if ((e.key === 'Enter' || e.key === ' ') && !showFeedback) {
      e.preventDefault();
      handleSelectAnswer(index);
    }
    // Enter/Space to go to next after feedback
    if ((e.key === 'Enter' || e.key === ' ') && showFeedback && index === question.answer) {
      e.preventDefault();
      handleNextQuestion();
    }
  };

  const handleNextKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNextQuestion();
    }
  };

  const progressPercentage = ((currentQuestionNum - 1) / totalQuestions) * 100;
  const isAnswerCorrect = selectedAnswer === question.answer;

  return (
    <div className="game-play" role="main" aria-label={`퀴즈 게임: ${currentQuestionNum}번 문제`}>
      {/* Header */}
      <div className="game-header">
        <div className="progress-info">
          <span className="progress-text" aria-label={`${currentQuestionNum}번 문제, 총 ${totalQuestions}문제`}>
            {currentQuestionNum}/{totalQuestions}
          </span>
        </div>
        <div className="timer-box">
          <span
            className={`timer ${timeLeft <= 5 ? 'warning' : ''}`}
            role="status"
            aria-live="polite"
            aria-label={`남은 시간: ${timeLeft}초 ${timeLeft <= 5 ? '시간이 부족합니다' : ''}`}
          >
            ⏱ {timeLeft}s
            {timeLeft <= 5 && <span aria-hidden="false"> (긴급)</span>}
          </span>
        </div>
        <div className="category-badge" aria-label={`카테고리: ${question.category}`}>
          {question.category}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar" role="progressbar" aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax="100">
        <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      {/* Character */}
      <div className="character-section">
        <div className="character" aria-hidden="true">🦦</div>
        <p className="character-message" role="status" aria-live="polite">
          {!showFeedback ? "화이팅! 너라면 할 수 있어!" : isAnswerCorrect ? "오오! 정답이야! 🎉" : "아쉬워! 다음 문제 파이팅! 💪"}
        </p>
      </div>

      {/* Question */}
      <div className="question-box">
        <p className="question-text" id="question-text">
          {question.question}
        </p>
      </div>

      {/* Options */}
      <div className="options-container" role="group" aria-labelledby="question-text" ref={optionsContainerRef}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedAnswer === index ? (isAnswerCorrect ? 'correct' : 'incorrect') : ''
            } ${showFeedback && index === question.answer ? 'show-answer' : ''}`}
            onClick={() => handleSelectAnswer(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={showFeedback}
            aria-label={`${String.fromCharCode(65 + index)}번 선택지: ${option}${
              showFeedback && index === question.answer ? ' (정답)' : ''
            }${selectedAnswer === index && isAnswerCorrect ? ' (선택함, 정답)' : ''}${
              selectedAnswer === index && !isAnswerCorrect ? ' (선택함, 오답)' : ''
            }`}
            aria-pressed={selectedAnswer === index}
          >
            <span className="option-number" aria-hidden="true">{String.fromCharCode(65 + index)}.</span>
            <span className="option-text">{option}</span>
            {showFeedback && index === question.answer && <span className="checkmark" aria-hidden="true">✓</span>}
            {showFeedback && selectedAnswer === index && isAnswerCorrect && <span className="checkmark" aria-hidden="true">✓</span>}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showFeedback && (
        <div className={`explanation ${isAnswerCorrect ? 'correct' : 'incorrect'}`} role="status" aria-live="polite" aria-label={isAnswerCorrect ? '정답입니다' : '오답입니다'}>
          <div className="explanation-header">
            <span className="explanation-icon" aria-hidden="true">{isAnswerCorrect ? '✓' : '✗'}</span>
            <p className="result-indicator">
              {isAnswerCorrect ? '정답입니다' : '오답입니다'}
            </p>
          </div>
          <p className="explanation-text"><strong>설명:</strong> {question.explanation}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="action-buttons">
        {!showFeedback ? (
          <>
            <button
              className="skip-btn"
              onClick={onSkip}
              aria-label="이 문제를 건너뛰고 다음 문제로 이동"
            >
              건너뛰기
            </button>
            <button
              className="back-btn"
              onClick={onBack}
              disabled={!canGoBack}
              aria-label={canGoBack ? "이전 문제로 돌아가기" : "이전 문제가 없습니다"}
              aria-disabled={!canGoBack}
            >
              돌아가기
            </button>
          </>
        ) : (
          <>
            <button
              className="next-btn"
              onClick={handleNextQuestion}
              onKeyDown={handleNextKeyDown}
              aria-label="다음 문제로 이동"
            >
              다음 문제
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default React.memo(GamePlay);
