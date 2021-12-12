const getAnswerStatisticsInPercents = ({ statistics, questionId }) => {
  const { total, ...answerCounters } = statistics[questionId];
  const ids = Object.keys(answerCounters);

  return ids.reduce((acc, id) => {
    acc[id] = Math.round((answerCounters[id] / total) * 100);

    return acc;
  }, {});
};

module.exports = getAnswerStatisticsInPercents;
