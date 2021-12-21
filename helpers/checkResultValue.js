const questions = require('../store/questions');

const checkResultValue = (result) => ((result >= 0) && (result <= Object.keys(questions).length));

module.exports = checkResultValue;
