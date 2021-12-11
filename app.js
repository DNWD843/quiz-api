require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { questions } = require('./store/questions');
const { answers } = require('./store/answers');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const { PORT = 4000 } = process.env;

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
/**
 * @param {number} questionId - айди вопроса
 */
app.get('/question', (req, res) => {
  const { questionId } = req.body;
  res.send(questions[questionId]);
});

app.post('/question', (req, res) => {
  const { questionId, answerId } = req.body;
  console.log('answerId: ', answerId);
  res.send(answers[questionId]);
});

// app.patch('/counter', (req, res) => {
//   total += 1;
//   res.send({ counter: `${total}` });
// });
//
// app.patch('/reset-data', (req, res) => {
//   total = 0;
//   res.send({ counter: `${total}` });
// });

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});

module.exports = app;
