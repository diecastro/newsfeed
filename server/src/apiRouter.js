'use strict';

const express = require('express');
const router = express.Router();
const authRouter = require('./routes/api/user');
const newsRouter = require('./routes/api/news');
const authorRouter = require('./routes/api/author');

const bodyParser = require('body-parser');
const routes = require('./routes');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use('/', authRouter);
router.use('/', newsRouter);
router.use('/', authorRouter);

// Local
router.get('/', routes.getAppIndex);
router.get('/version', routes.getApiVersion);

module.exports = router;
