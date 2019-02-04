

'use strict';

const router = require('express').Router(),
  routes = require('./routes'),
  bodyParser = require('body-parser'),
  validateBody = require('./middleware/validateBody'),
  validateRequest = require('./middleware/validateRequest'),
  csrf = require('./middleware/validateCsrf');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Local
router.get('/', routes.getAppIndex);
router.get('/version', routes.getApiVersion);

router.post('/users/create-session', routes.postCreateSession);
router.get('/users/salt', csrf, validateRequest, routes.getUserSalt);
router.get('/users/refresh', csrf, validateRequest, routes.getNewToken);
router.get('/devices', csrf, routes.getDevices);
router.get('/users/accounts/:merchantId/settings', csrf, validateRequest, routes.getMerchantSettings);
router.post('/users/accounts/:merchantId/settings', csrf, validateRequest, routes.postMerchantSettings);

module.exports = router;
