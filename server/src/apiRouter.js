'use strict';

const express = require('express');
const router = express.Router();
const newsRouter = require('./routes/api/news');
const authorRouter = require('./routes/api/author');
const bodyParser = require('body-parser');
const routes = require('./routes');
// const router = require('express').Router(),

//
//   validateBody = require('./middleware/validateBody'),
//   validateRequest = require('./middleware/validateRequest'),
//   csrf = require('./middleware/validateCsrf'),


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use('/', newsRouter);
router.use('/', authorRouter);
// Local
router.get('/', routes.getAppIndex);
router.get('/version', routes.getApiVersion);

// router.post('/users/create-session', routes.postCreateSession);
// router.get('/users/salt', csrf, validateRequest, routes.getUserSalt);
// router.get('/users/refresh', csrf, validateRequest, routes.getNewToken);
// router.get('/devices', csrf, routes.getDevices);
// router.get('/users/accounts/:merchantId/settings', csrf, validateRequest, routes.getMerchantSettings);
// router.post('/users/accounts/:merchantId/settings', csrf, validateRequest, routes.postMerchantSettings);

module.exports = router;
