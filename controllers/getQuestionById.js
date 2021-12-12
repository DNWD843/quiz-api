const { questions } = require('../store/questions');

const getQuestionById = (req, res) => {
  const { questionId } = req.body;
  if (typeof questionId === 'undefined') {
    res.status(400).send({ message: 'Необходимо передать айди вопроса' });
  }
  if (questionId < 1 || (questionId > Object.keys(questions).length)) {
    res.status(400).send({ message: 'Передан некорректный айди' });
  }
  if (!questions[questionId]) {
    res.status(404).send({ message: `Вопрос с айди ${questionId} не найден` });
  }
  res.send(questions[questionId]);
};

module.exports = {
  getQuestionById,
};