import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './src/routes/index';
import memberRouter from './src/routes/member';
import meetRouter from './src/routes/meet';
import roomRouter from './src/routes/room';
import groupRouter from './src/routes/group';
import organizationRouter from './src/routes/organization';

const app = express();
const corsOptions = {
  origin: '*'
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/member', memberRouter);
app.use('/meet', meetRouter);
app.use('/organization', organizationRouter);
app.use('/group', groupRouter);
app.use('/room', roomRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: { message: any; status: any; },
  req: { app: { get: (arg0: string) => string; }; },
  res: { locals: { message: any; error: any; };
  status: (arg0: any) => void; render: (arg0: string) => void; },
  next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
