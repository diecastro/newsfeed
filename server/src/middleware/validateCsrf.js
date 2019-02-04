

'use strict';

const csrf = require('csurf'),
  csrfProtection = csrf(),
  logger = require('./../lib/logger');

/**
 * Middleware that expects to receive a valid csrf token from the client in req.headers['csrf-token'].
 * With each request it generates a new token, sending it back to the client in a cookie (csrfToken),
 */
module.exports = function (req, res, next) {

  csrfProtection(req, res, function (error) {
    //The sameSite attribute for cookies doesn't have reliable support yet, so this
    //middleware is set to expect the token from the request headers,
    //otherwise it would be easier to read it from req.cookies.csrfToken directly
    res.cookie('csrfToken', req.csrfToken ? req.csrfToken() : null, {sameSite: true});

    /* istanbul ignore else */
    if (error) {
      logger.error('ERROR validating csrf token - error: %s message: %s', JSON.stringify(error), error.message);
    }

    next(error); //next() receives undefined if all goes well

  });

};
