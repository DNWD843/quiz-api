const router = require('express').Router();
const { getQuestionById } = require('../controllers/getQuestionById');
const { getAnswersByQuestionId } = require('../controllers/getAnswersByQuestionId');

router.get('/api/question', getQuestionById);
router.post('/api/question', getAnswersByQuestionId);

module.exports = router;
