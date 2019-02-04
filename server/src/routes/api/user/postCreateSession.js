

'use strict';

const config = require('../../../config/app'),
  _ = require('lodash'),
  cryptoHelper = require('../../../lib/cryptoHelper'),
  userHelper = require('../../../lib/userHelper'),
  logger = require('../../../lib/logger');

module.exports = function (request, response) {

  const username = request.body.username ? request.body.username.toLowerCase() : '';
  const password = cryptoHelper.base64Decode(request.body.password);
  const bypassToken = request.body.bypassToken;

  if (!username || !password) {
    response
      .status(config.status.badRequest)
      .send({message: config.error.noCredentials});
  } else {

    return userHelper.getUser(username, password, bypassToken, request)
      .then(function (payload) {

        const user = payload.data;
        const validAccount = userHelper.validateUser(user);
        if (validAccount) {
          const token = userHelper.createToken(user);

          response
            .status(config.status.ok)
            .send({token: token, user: user});

        } else {
          const errorResponse = {message: config.error.unsuccessfulSignInInvalidRole};

          // never logs the full response for login due to it could contain sensitive info
          logger.info('**** 1. LOGIN FAILED **** : username= %s  error=%s status=%s Incoming IP: %s Forward For IP: %s',
            username, errorResponse.message, errorResponse.status, request.xRealIp, request.xForwardFor);

          response
            .status(config.status.notFound)
            .send(errorResponse);
        }


      })
      .catch(function (err) {
        const errorResponse = {message: err.response && err.response.text || config.error.noResponse};
        logger.info('**** 2. LOGIN FAILED **** : username= %s  error=%s Incoming IP: %s Forward For IP: %s', username, JSON.stringify(err), request.xRealIp, request.xForwardFor);
        response
          .status(err.status || config.status.gatewayTimeout)
          .send(errorResponse);
      });
  }
};
