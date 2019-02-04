

'use strict';

const config = require('../../../config/app'),
  userHelper = require('../../../lib/userHelper'),
  logger = require('../../../lib/logger'),
  _ = require('lodash'),
  jwtDecode = require('jwt-decode');

module.exports = function (request, response) {

  const token = request.headers['authorization'];

  if (!token) {
    response
      .status(config.status.badRequest)
      .send({message: config.error.noCredentials});
  } else {

    let decodedToken = jwtDecode(token);
    delete decodedToken.exp;
    delete decodedToken.iat;
    delete decodedToken.jti;
    delete decodedToken.nbf;

    logger.info('incoming token:  %s Incoming IP: %s Forward For IP: %s', JSON.stringify(decodedToken), request.xRealIp, request.xForwardFor);
    const renewedToken = userHelper.createToken(decodedToken);

    response
      .status(config.status.ok)
      .send({token: renewedToken});


  }
};
