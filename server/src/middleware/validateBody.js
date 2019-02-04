

'use strict';

const config = require('./../config/app'),
  logger = require('./../lib/logger'),
  path = require('path'),
  fs = require('fs'),
  jsdecrypt = require('jsdecrypt');

const decryptBody = function (req) {

  return new Promise(function (resolve, reject) {
      try {

        const requestBody = Object.keys(req.body)[0];
        const textToDecrypt = requestBody.replace(/ /g, '+');
        const sitePrivateKey = fs.readFileSync(path.resolve(__dirname,('./../keys/private.key')), 'utf8');

        req.body.payload = jsdecrypt.dec(sitePrivateKey, textToDecrypt);
        resolve(req);
      } catch (e) {
        logger.error('ERROR decrypting body payload - error:  %s message: %s Incoming IP: %s Forward For IP: %s', JSON.stringify(e), e.message, req.xRealIp, req.xForwardFor);
        reject(e);
      }
  })

};

module.exports = function (req, res, next) {
  return decryptBody(req)
    .then(function () {
      next();
    })
    .catch(function (error) {
      res.status(config.status.unauthorized).send({message: config.error.unauthorized});
    });
};

