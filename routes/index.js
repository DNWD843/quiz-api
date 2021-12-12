const router = require('express').Router();
const { getQuestionById } = require('../controllers/getQuestionById');
const { getAnswersByQuestionId } = require('../controllers/getAnswersByQuestionId');
const badRequestRouter = require('./badRequest');

router.get('/api/question', getQuestionById);
router.post('/api/question', getAnswersByQuestionId);
router.use('*', badRequestRouter);

module.exports = router;
