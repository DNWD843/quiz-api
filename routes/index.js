const router = require('express').Router();
const { getQuestionById } = require('../controllers/getQuestionById');
const { getAnswersByQuestionId } = require('../controllers/getAnswersByQuestionId');

router.get('/question', getQuestionById);
router.post('/question', getAnswersByQuestionId);

module.exports = router;
