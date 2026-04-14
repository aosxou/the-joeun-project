import React from 'react';
import './ResultScreen.css';

function ResultScreen({
  score,
  totalQuestions,
  categoryScores,
  difficulty,
  onRetry
}) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const categoryList = Object.keys(categoryScores);

  const getMessage = () => {
    if (percentage >= 90) return "천재네! 🏆";
    if (percentage >= 80) return "잘했어! 🌟";
    if (percentage >= 70) return "좋았어! 👍";
    if (percentage >= 60) return "괜찮았어! 💪";
    return "다시 도전해봐! 🚀";
  };

  const getPerformanceLevel = () => {
    if (percentage >= 90) return "excellence";
    if (percentage >= 80) return "great";
    if (percentage >= 70) return "good";
    if (percentage >= 60) return "fair";
    return "needsImprovement";
  };

  const getCategoryPercentage = (category) => {
    const scores = categoryScores[category];
    return scores.total > 0 ? Math.round((scores.correct / scores.total) * 100) : 0;
  };

  const getWeakCategories = () => {
    return categoryList.filter(category => getCategoryPercentage(category) < 70);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onRetry();
    }
  };

  const weakCategories = getWeakCategories();

  return (
    <div className="result-screen" role="main" aria-label={`퀴즈 결과 화면: ${percentage}% 정답률`}>
      {/* Character Celebration */}
      <div className="result-character">
        <div className="character-big" aria-hidden="true">🦦</div>
        <p className="result-message" role="status">{getMessage()}</p>
      </div>

      {/* Score Display */}
      <div className="score-box" aria-label={`정답 점수: ${score}점 중 ${totalQuestions}점`}>
        <div className="score-main">
          <span className="score-number">{score}</span>
          <span className="score-divider" aria-hidden="true">/</span>
          <span className="score-total">{totalQuestions}</span>
        </div>
        <p className="score-label">점수</p>
      </div>

      {/* Percentage */}
      <div className="percentage-box" aria-label={`정답률: ${percentage}%`}>
        <span className="percentage" id="percentage-result">{percentage}%</span>
        <div className="percentage-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" aria-labelledby="percentage-result">
          <div className="percentage-fill" style={{ width: `${percentage}%` }}></div>
        </div>
        <p className="performance-level" aria-label={`성적 등급: ${getPerformanceLevel()}`}>
          {getPerformanceLevel() === 'excellence' && '탁월한 성과'}
          {getPerformanceLevel() === 'great' && '우수한 성과'}
          {getPerformanceLevel() === 'good' && '좋은 성과'}
          {getPerformanceLevel() === 'fair' && '평범한 성과'}
          {getPerformanceLevel() === 'needsImprovement' && '개선 필요'}
        </p>
      </div>

      {/* Category Scores */}
      <div className="category-results">
        <h3 id="category-heading">카테고리별 성적</h3>
        <div className="category-list" role="region" aria-labelledby="category-heading">
          {categoryList.map((category) => {
            const categoryPercentage = getCategoryPercentage(category);
            const isWeak = categoryPercentage < 70;
            return (
              <div
                key={category}
                className={`category-item ${isWeak ? 'needs-improvement' : ''}`}
                role="status"
                aria-label={`${category}: ${categoryScores[category].correct}/${categoryScores[category].total} 정답, ${categoryPercentage}%${isWeak ? ' (개선 필요)' : ''}`}
              >
                <div className="category-header">
                  <div className="category-name">{category}</div>
                  {isWeak && <span className="improvement-badge" aria-label="개선 필요" title="개선이 필요한 영역">개선 필요</span>}
                </div>
                <div className="category-score-details">
                  <span className="category-score">
                    {categoryScores[category].correct}/{categoryScores[category].total}
                  </span>
                  <span className="category-percentage">{categoryPercentage}%</span>
                </div>
                <div className="category-bar" role="progressbar" aria-valuenow={categoryPercentage} aria-valuemin="0" aria-valuemax="100" aria-label={`${category} 정답률: ${categoryPercentage}%`}>
                  <div className="category-bar-fill" style={{ width: `${categoryPercentage}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {weakCategories.length > 0 && (
          <div className="weak-categories-summary" role="complementary" aria-label="개선이 필요한 카테고리 요약">
            <p>
              <strong>개선 필요 영역:</strong> {weakCategories.join(', ')}
            </p>
          </div>
        )}
      </div>

      {/* Difficulty Info */}
      <div className="difficulty-info">
        <span>난이도: <strong>{difficulty === 'easy' ? '쉬움' : difficulty === 'hard' ? '어려움' : '보통'}</strong></span>
      </div>

      {/* Action Buttons */}
      <div className="result-buttons">
        <button
          className="replay-btn"
          onClick={onRetry}
          onKeyDown={handleKeyDown}
          aria-label="메인 메뉴로 돌아가서 다른 난이도로 다시 풀기"
          type="button"
        >
          다시 풀기
        </button>
      </div>
    </div>
  );
}

export default React.memo(ResultScreen);
