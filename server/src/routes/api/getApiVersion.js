

'use strict';

const config = require('../../config/app'),
  applicationVersion = require('./../../../../package.json');

module.exports = function (request, response) {
  return response.status(config.status.ok)
    .send(applicationVersion.version);

};
