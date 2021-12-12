const { answers } = require('../store/answers');

const getAnswersByQuestionId = (req, res) => {
  const { questionId, answerId } = req.body;
  if (typeof questionId === 'undefined') {
    res.status(400).send({ message: 'Необходимо передать айди вопроса' });
  }
  if (questionId < 1 || (questionId > Object.keys(answers).length)) {
    res.status(400).send({ message: 'Передан некорректный айди вопроса' });
  }
  if (typeof answerId === 'undefined') {
    res.status(400).send({ message: 'Необходимо передать айди ответа' });
  }
  if ((answerId < 1) || (answerId > answers[questionId].answers.length)) {
    res.status(400).send({ message: 'Передан некорректный айди ответа' });
  }
  if (!answers[questionId]) {
    res.status(404).send({ message: `Вопрос с айди ${questionId} не найден` });
  }
  // TODO: здесь надо обновить счетчики ответов, посчитать проценты, добавить их в объект ответов и
  //  отправить ответ
  res.send(answers[questionId]);
};

module.exports = {
  getAnswersByQuestionId,
};
