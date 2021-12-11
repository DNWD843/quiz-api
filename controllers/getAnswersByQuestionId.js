const { answers } = require('../store/answers');

const getAnswersByQuestionId = (req, res) => {
  const { questionId, answerId } = req.body;
  console.log('answerId: ', answerId);
  res.send(answers[questionId]);
};

module.exports = {
  getAnswersByQuestionId,
};
