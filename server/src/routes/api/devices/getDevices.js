

'use strict';

const config = require('../../../config/app'),
  requestHelper = require('../../../lib/requestHelper');

module.exports = function (request, response) {

  const userId = request.params.userId;
  const merchantId = request.params.merchantId;

  const requestMethod = 'GET';
  const requestUrl = '/v4/users/' + userId + '/accounts/' + merchantId + '/devices';

  // Fake Data TODO: Remove when we have a real endpoint
  response.status(config.status.ok).json({data:'cool'});

  // TODO: Wire up to v4 api once available
  // return requestHelper.apiRequest(
  //   requestMethod,
  //   requestUrl,
  //   request
  // ).then(function (res) {
  //   response
  //     .status(res.status)
  //     .json(res.data);
  // }).catch(function (err) {
  //   response
  //     .status(err.status || config.status.gatewayTimeout)
  //     .send({message: err.response && err.response.text || config.error.noResponse});
  // });

};
