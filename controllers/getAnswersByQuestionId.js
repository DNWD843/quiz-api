const questionsWithCorrectAnswers = require('../store/answers');
const totalAnswersStatistics = require('../store/chosenAnswers');
const getAnswerStatisticsInPercents = require('../helpers/getAnswerStatisticsInPercents');
const BadRequestError = require('../errors/BadRequest');
const NotFoundError = require('../errors/NotFound');

const getAnswersByQuestionId = (req, res) => {
  const { questionId, answerId } = req.body;
  if (typeof questionId === 'undefined') {
    throw new BadRequestError('Необходимо передать айди вопроса');
  }
  if (questionId < 1 || (questionId > Object.keys(questionsWithCorrectAnswers).length)) {
    throw new BadRequestError('Передан некорректный айди вопроса');
  }
  if (typeof answerId === 'undefined') {
    throw new BadRequestError('Необходимо передать айди ответа');
  }
  if ((answerId < 1) || (answerId > questionsWithCorrectAnswers[questionId].answers.length)) {
    throw new BadRequestError('Передан некорректный айди ответа');
  }
  if (!questionsWithCorrectAnswers[questionId]) {
    throw new NotFoundError(`Вопрос с айди ${questionId} не найден`);
  }

  totalAnswersStatistics[questionId].total += 1;
  totalAnswersStatistics[questionId][answerId] += 1;

  const percentage = getAnswerStatisticsInPercents(
    { statistics: totalAnswersStatistics, questionId },
  );
  questionsWithCorrectAnswers[questionId].answers.forEach((answer) => {
    // eslint-disable-next-line no-param-reassign
    answer.percent = percentage[answer.id] || 0;
  });

  res.send(questionsWithCorrectAnswers[questionId]);
};

module.exports = {
  getAnswersByQuestionId,
};
