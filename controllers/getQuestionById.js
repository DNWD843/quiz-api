const { questions } = require('../store/questions');

const getQuestionById = (req, res) => {
  const { questionId } = req.body;
  res.send(questions[questionId]);
};

module.exports = {
  getQuestionById,
};
