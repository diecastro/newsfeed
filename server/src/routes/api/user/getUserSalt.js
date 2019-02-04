

'use strict';

const config = require('../../../config/app'),
  userHelper = require('../../../lib/userHelper');

module.exports = function (request, response) {

  const username = request.params.username;

  if (username) {
    return userHelper.getSalt(username, request)
      .then(function (payload) {
        response
          .status(payload.status)
          .json(payload.data);
      })
      .catch(function (err) {
        response
          .status(err.status || config.status.gatewayTimeout)
          .send(err.response && err.response.text || config.error.noResponse);
      });
  } else {
    response
      .status(config.status.badRequest)
      .send(config.error.noUsername);
  }

};
