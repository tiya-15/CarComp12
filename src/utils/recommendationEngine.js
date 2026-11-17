export function getRecommendations(
  answers,
  careers
) {
  const scores = {};

  answers.forEach((answer) => {
    if (!scores[answer.category]) {
      scores[answer.category] = 0;
    }

    scores[answer.category] += answer.value;
  });

  const rankedCareers = careers.map((career) => {
    return {
      ...career,
      score: scores[career.category] || 0,
    };
  });

  rankedCareers.sort((a, b) => b.score - a.score);

  return rankedCareers.slice(0, 3);
}