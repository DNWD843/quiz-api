const { questions } = require('../store/questions');
const BadRequestError = require('../errors/BadRequest');
const NotFoundError = require('../errors/NotFound');

const getQuestionById = (req, res) => {
  const { questionId } = req.query;
  console.log(req);
  if (typeof questionId === 'undefined') {
    throw new BadRequestError('Необходимо передать айди вопроса');
  }
  if (questionId < 1 || (questionId > Object.keys(questions).length)) {
    throw new BadRequestError('Передан некорректный айди');
  }
  if (!questions[questionId]) {
    throw new NotFoundError(`Вопрос с айди ${questionId} не найден`);
  }

  res.send(questions[questionId]);
};

module.exports = {
  getQuestionById,
};
