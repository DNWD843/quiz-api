const BadRequestError = require('../errors/BadRequest');
const questions = require('../store/questions');

const checkPlayerStatistics = (statistics) => {
  if (!statistics) {
    throw new BadRequestError('Некорректный запрос. Необходимо передать статистику игрока.');
  }

  if (statistics.length !== Object.keys(questions).length) {
    throw new BadRequestError('Некорректный запрос. Статистика игрока передана неполностью.');
  }

  const hasNotNullValues = statistics.every(
    ({ questionId, answerId }) => questionId && answerId,
  );

  if (!hasNotNullValues) {
    throw new BadRequestError('Переданы некорректные значения статистики игрока');
  }

  const hasCorrectQuestionIds = statistics
    .map(({ questionId }) => questionId)
    .sort((a, b) => a - b)
    .every((item, index) => item === (index + 1));

  if (!hasCorrectQuestionIds) {
    throw new BadRequestError('Переданы некорректные значения статистики игрока');
  }

  const hasValidAnswerIds = statistics
    .map(({ questionId, answerId }) => {
      if (questionId !== 8) {
        return ((answerId >= 1) && (answerId <= 3));
      }
      return ((answerId >= 1) && (answerId <= 4));
    })
    .every((item) => item);

  if (!hasValidAnswerIds) {
    throw new BadRequestError('Переданы некорректные значения статистики игрока');
  }
};

module.exports = checkPlayerStatistics;
