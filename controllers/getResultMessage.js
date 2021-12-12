const questionsWithCorrectAnswers = require('../store/answers');
const resultConfig = require('../store/resultConfig');

const getResultMessage = (req, res) => {
  const { playerStatistics } = req.query;
  const resultStatistics = playerStatistics
    .map(
      ({ questionId, answerId }) => questionsWithCorrectAnswers[questionId].answers
        .find((answer) => answer.id === answerId)
        .isCorrect,
    )
    .filter((item) => item);

  switch (resultStatistics.length) {
    case (0):
    case (1):
    case (2):
      return res.send(resultConfig.looser);
    case (3):
    case (4):
      return res.send(resultConfig.bad);
    case (5):
    case (6):
      return res.send(resultConfig.good);
    case (7):
    case (8):
      return res.send(resultConfig.great);
    default:
      return res.send({
        title: 'Хммм... случай непростой.',
        text: 'Предлагаем вам сыграть еще раз!',
      });
  }
};

module.exports = getResultMessage;
