const questionsWithCorrectAnswers = require('../store/answers');
const totalAnswersStatistics = require('../store/chosenAnswers');
const calculateAnswerStatisticsInPercents = require('../helpers/getAnswerStatisticsInPercents');
const BadRequestError = require('../errors/BadRequest');
const NotFoundError = require('../errors/NotFound');
const updateAnswerPercentValue = require('../helpers/updateAnswerPercentValue');

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

  updateAnswerPercentValue({
    percentage: calculateAnswerStatisticsInPercents(
      { statistics: totalAnswersStatistics, questionId },
    ),
    questionAnswers: questionsWithCorrectAnswers[questionId].answers,
  });

  res.send(questionsWithCorrectAnswers[questionId]);
};

module.exports = {
  getAnswersByQuestionId,
};
