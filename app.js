const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv');
const clienteRouter = require('./routes/clienteRouter');
const produtoRouter = require('./routes/produtoRouter');

dotenv.config();

app.get('/', (req, res) => {
  res.send('Seja bem vindo ao desafio back-end!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/produto', produtoRouter);
app.use('/cliente', clienteRouter);

app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

module.exports = app;


/*
const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv');
const clienteRouter = require('./routes/clienteRouter');
const produtoRouter = require('./routes/produtoRouter');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('Seja bem vindo ao desafio back-end!');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/produto', produtoRouter);
app.use('/cliente', clienteRouter);


app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/