'use strict';

const express = require('express'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  app = express(),
  helmet = require('helmet'),
  config = require('./config/app'),
  morgan = require('morgan'),
  compression = require('compression'),
  logger = require('./lib/logger');

require('./db');
require('./services/user');

module.exports = function () {
  app.use(helmet());
  app.use(cookieParser());
  app.set('trust proxy', true);
  app.use(morgan('[:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"', {'stream': logger.stream}));
  app.use(session({resave: false, saveUninitialized: false, secret: config.server.secret}));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'pug');
  app.use(compression());
  app.use(bodyParser.json({limit: config.server.payloadLimit}));
  app.use(bodyParser.urlencoded({limit: config.server.payloadLimit, extended: true}));
  app.use('/api', require('./apiRouter'));
  app.use('', require('./clientRouter'));

  return app;

};
