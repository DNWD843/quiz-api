const resultConfig = require('../store/resultConfig');
const checkResultValue = require('../helpers/checkResultValue');
const BadRequestError = require('../errors/BadRequest');

const getResultMessage = (req, res) => {
  const { correctAnswersCounter } = req.query;

  if (typeof correctAnswersCounter === 'undefined') {
    throw new BadRequestError('Необходимо передать количество правильных ответов игрока');
  }

  const isResultValid = checkResultValue(correctAnswersCounter);

  if (!isResultValid) {
    throw new BadRequestError('Передано некорректное значение количества правильных ответов игрока');
  }

  switch (Number(correctAnswersCounter)) {
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
