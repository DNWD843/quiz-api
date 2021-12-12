const router = require('express').Router();
const NotFoundError = require('../errors/NotFound');

router.use(() => {
  throw new NotFoundError('Неверный запрос');
});

module.exports = router;
