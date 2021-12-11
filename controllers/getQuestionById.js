const { questions } = require('../store/questions');

const getQuestionById = (req, res) => {
  const { questionId } = req.body;
  if (questionId < 1) {
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
