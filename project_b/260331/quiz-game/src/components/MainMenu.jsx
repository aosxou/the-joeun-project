import React from 'react';
import './MainMenu.css';

function MainMenu({ onStartGame }) {
  const handleKeyDown = (e, difficulty) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onStartGame(difficulty);
    }
  };

  return (
    <div className="main-menu" role="main" aria-label="개발자 퀴즈 게임 메인 메뉴">
      {/* Title */}
      <div className="menu-header">
        <div className="logo" aria-hidden="true">🦦</div>
        <h1 className="title">개발자 퀴즈</h1>
        <p className="subtitle">자료구조, 알고리즘, 코딩테스트, 시스템/네트워크</p>
      </div>

      {/* Character Welcome */}
      <div className="menu-character">
        <div className="character-large" aria-hidden="true">🦦</div>
        <p className="welcome-message" role="status">안녕! 나는 띠띠야. 함께 퀴즈를 풀어볼까?</p>
      </div>

      {/* Game Info */}
      <div className="game-info" role="region" aria-label="게임 정보">
        <div className="info-item">
          <span className="icon" aria-hidden="true">📝</span>
          <span className="text">총 40문제</span>
        </div>
        <div className="info-item">
          <span className="icon" aria-hidden="true">⏱</span>
          <span className="text">문제당 30초</span>
        </div>
        <div className="info-item">
          <span className="icon" aria-hidden="true">📊</span>
          <span className="text">즉시 피드백</span>
        </div>
      </div>

      {/* Difficulty Selection */}
      <div className="difficulty-section">
        <h2 id="difficulty-heading">난이도를 선택하세요</h2>

        <div className="difficulty-buttons" role="group" aria-labelledby="difficulty-heading">
          <button
            className="difficulty-btn easy"
            onClick={() => onStartGame('easy')}
            onKeyDown={(e) => handleKeyDown(e, 'easy')}
            aria-label="쉬움 난이도로 게임 시작, 초급자용"
            type="button"
          >
            <span className="difficulty-label" aria-hidden="false">쉬움</span>
            <span className="difficulty-desc">초급자용</span>
          </button>

          <button
            className="difficulty-btn normal"
            onClick={() => onStartGame('normal')}
            onKeyDown={(e) => handleKeyDown(e, 'normal')}
            aria-label="보통 난이도로 게임 시작, 중급자용 (추천)"
            type="button"
          >
            <span className="difficulty-label" aria-hidden="false">보통</span>
            <span className="difficulty-desc">중급자용 (추천)</span>
          </button>

          <button
            className="difficulty-btn hard"
            onClick={() => onStartGame('hard')}
            onKeyDown={(e) => handleKeyDown(e, 'hard')}
            aria-label="어려움 난이도로 게임 시작, 고급자용"
            type="button"
          >
            <span className="difficulty-label" aria-hidden="false">어려움</span>
            <span className="difficulty-desc">고급자용</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="menu-footer">
        <p>점수를 기록하고 다른 개발자들과 경쟁하세요! 🚀</p>
      </div>
    </div>
  );
}

export default React.memo(MainMenu);
