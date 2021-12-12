require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const rootRouter = require('./routes');
const handleErrors = require('./middlwares/handleErrors');

const { PORT = 4000 } = process.env;

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(rootRouter);
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});

module.exports = app;
