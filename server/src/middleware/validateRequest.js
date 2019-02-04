

'use strict';

const config = require('./../config/app'),
  userHelper = require('./../lib/userHelper'),
  jwtDecode = require('jwt-decode');

const authorize = function (req) {

  return new Promise(function (resolve, reject) {

    const token = req.headers['authorization'];
    if (!token) {
      reject(req);
    } else {
      try {
        userHelper.verifyToken(token);
        let decodedToken = jwtDecode(token);
        req.params.username = decodedToken.username.toLowerCase();
        req.params.userId = decodedToken.user_id;
        resolve(req);
      } catch (e) {
        reject(req);
      }
    }
  })
};

module.exports = function (req, res, next) {
  return authorize(req)
    .then(function () {
      next();
    })
    .catch(function (error) {
      res.status(config.status.unauthorized).send({message: config.error.unauthorized});
    });
};

