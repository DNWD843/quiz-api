const resultConfig = require('../store/resultConfig');
const filterCorrectAnswers = require('../helpers/filterCorrectAnswers');
const BadRequestError = require('../errors/BadRequest');
const questions = require('../store/questions');

const getResultMessage = (req, res) => {
  const { playerStatistics } = req.body;

  if (!playerStatistics) {
    throw new BadRequestError('Некорректный запрос. Необходимо передать статистику игрока.');
  }
  if (playerStatistics.length !== Object.keys(questions).length) {
    throw new BadRequestError('Некорректный запрос. Статистика игрока передана неполностью.');
  }

  const resultStatistics = filterCorrectAnswers(playerStatistics);

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
