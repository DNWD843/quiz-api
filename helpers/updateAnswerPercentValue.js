const updateAnswerPercentValue = ({ percentage, questionAnswers }) => {
  questionAnswers.forEach((answer) => {
    // eslint-disable-next-line no-param-reassign
    answer.percent = percentage[answer.id] || 0;
  });
};

module.exports = updateAnswerPercentValue;
