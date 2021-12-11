const { answers } = require('../store/answers');

const getAnswersByQuestionId = (req, res) => {
  const { questionId, answerId } = req.body;
  if (questionId < 1) {
    res.status(400).send({ message: 'Передан некорректный айди' });
  }
  if (!answers[questionId]) {
    res.status(404).send({ message: `Вопрос с айди ${questionId} не найден` });
  }
  if (typeof answerId === 'undefined') {
    res.status(400).send({ message: 'Необходимо передать айди ответа' });
  }
  if ((answerId < 1) || (answerId > 4)) {
    res.status(400).send({ message: 'Передан некорректный айди ответа' });
  }
  res.send(answers[questionId]);
};

module.exports = {
  getAnswersByQuestionId,
};
