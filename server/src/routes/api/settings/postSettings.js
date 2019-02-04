

'use strict';

const config = require('../../../config/app'),
  requestHelper = require('../../../lib/requestHelper');

module.exports = function (request, response) {
  const userId = request.params.userId;
  const merchantId = request.params.merchantId;

  const requestMethod = 'PUT';
  const requestUrl = '/v4/users/' + userId + '/accounts/' + merchantId + '/settings';
  const payload = JSON.parse(request.body.payload);

  return requestHelper.apiRequest(
    requestMethod,
    requestUrl,
    null,
    payload,
    null,
    null,
    false,
    null,
    null,
    request
  ).then(function (res) {
    response
      .status(res.status)
      .json(res.data);
  }).catch(function (err) {
    response
      .status(err.status || config.status.gatewayTimeout)
      .send({message: err.response && err.response.text || config.error.noResponse});
  });

};
