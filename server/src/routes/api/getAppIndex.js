

'use strict';

const config = require('../../config/app');

module.exports = function (request, response) {
  return response.status(config.status.ok)
    .send(config.server.name);
};
