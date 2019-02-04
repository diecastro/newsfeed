'use strict';

const config = require('../config/app'),
  request = require('superagent'),
  logger = require('./logger');

const buildQueryParametersString = function (parameters, requestType) {

  let query = '';

  if (parameters) {
    query += '?' + Object.keys(parameters).map(function (key) {
      return key + '=' + encodeURIComponent(parameters[key]);
    }).join('&');
  }

  return query;
};

const buildUrl = function (endpoint, parameters, requestType) {

  let apiProtocol = config.apiProtocol;
  let apiHostname = config.apiHostname;
  let apiPort = ':3600';

  return apiProtocol + '//' + apiHostname + apiPort + endpoint + buildQueryParametersString(parameters, requestType);
};

const apiRequest = function (requestType, endpoint, queryParameters, parameters, requestObject = {}) {
  return new Promise(function (resolve, reject) {

    let responseData = null;

    const requestedUrl = buildUrl(endpoint, queryParameters, requestType);

    request(requestType, requestedUrl)
      .set('Content-Type', config.server.jsonType)
      .set('Accept', config.server.jsonType)
      .send(parameters ? parameters : '')
      .end(function (error, response) {

        if (response && response.body) {
          responseData = response.body.payload ? response.body.payload : response.body;
        }

        responseData = responseData ? responseData : config.error.noResponse;
        if (error) {
          const loggedError = JSON.stringify(error);
          logger.error('**** ERROR : requestedUrl= %s error= %s Incoming IP: %s Forward For IP: %s', requestedUrl, loggedError, requestObject.xRealIp, requestObject.xForwardFor);
          reject(error);
        } else {
          resolve({data: responseData, status: response.status});
        }

      });

  });

};

exports.buildQueryParametersString = buildQueryParametersString;
exports.apiRequest = apiRequest;
exports.buildUrl = buildUrl;
