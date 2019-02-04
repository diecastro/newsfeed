'use strict';

const config = require('../config/app'),
  jwt = require('jsonwebtoken'),
  _ = require('lodash');

const createToken = function createToken(user) {
  let expiresMinutes = config.server.jwtToken;
  return jwt.sign(user, config.server.secret, {expiresIn: 60 * expiresMinutes, algorithm: 'HS512'});
};

const verifyToken = function verifyToken(token) {
  return jwt.verify(token.replace('Bearer ', ''), config.server.secret, {algorithms: ['HS512']});
};


exports.createToken = createToken;
exports.verifyToken = verifyToken;
