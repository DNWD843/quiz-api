const questionsWithCorrectAnswers = require('../store/answers');

const filterCorrectAnswers = (playerStatistics) => playerStatistics
  .map(
    ({ questionId, answerId }) => questionsWithCorrectAnswers[questionId].answers
      .find((answer) => answer.id === answerId)
      .isCorrect,
  )
  .filter((item) => item);

module.exports = filterCorrectAnswers;
