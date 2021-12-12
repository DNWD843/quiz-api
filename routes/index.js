const router = require('express').Router();
const { getQuestionById } = require('../controllers/getQuestionById');
const { getAnswersByQuestionId } = require('../controllers/getAnswersByQuestionId');
const badRequestRouter = require('./badRequest');
const getResultMessage = require('../controllers/getResultMessage');

router.get('/api/question', getQuestionById);
router.post('/api/question', getAnswersByQuestionId);
router.get('/api/result', getResultMessage);
router.use('*', badRequestRouter);

module.exports = router;
