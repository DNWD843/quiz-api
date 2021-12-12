const questionsWithCorrectAnswers = require('../store/answers');
const chosenAnswersStatistics = require('../store/chosenAnswers');
const getAnswerStatisticsInPercents = require('../helpers/getAnswerStatisticsInPercents');

const getAnswersByQuestionId = (req, res) => {
  const { questionId, answerId } = req.body;

  if (typeof questionId === 'undefined') {
    res.status(400).send({ message: 'Необходимо передать айди вопроса' });
    return;
  }
  if (questionId < 1 || (questionId > Object.keys(questionsWithCorrectAnswers).length)) {
    res.status(400).send({ message: 'Передан некорректный айди вопроса' });
    return;
  }
  if (typeof answerId === 'undefined') {
    res.status(400).send({ message: 'Необходимо передать айди ответа' });
    return;
  }
  if ((answerId < 1) || (answerId > questionsWithCorrectAnswers[questionId].answers.length)) {
    res.status(400).send({ message: 'Передан некорректный айди ответа' });
    return;
  }
  if (!questionsWithCorrectAnswers[questionId]) {
    res.status(404).send({ message: `Вопрос с айди ${questionId} не найден` });
    return;
  }

  chosenAnswersStatistics[questionId].total += 1;
  chosenAnswersStatistics[questionId][answerId] += 1;

  const percentage = getAnswerStatisticsInPercents(
    { statistics: chosenAnswersStatistics, questionId },
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
