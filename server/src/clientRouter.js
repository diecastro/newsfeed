

'use strict';

const express = require('express'),
  routes = require('./routes'),
  config = require('./config/app'),
  client = require('./routes/client/index'),
  router = express.Router();

router.use(express.static(client.staticDir));

///////////////////////////////////////////////
// robots.txt
///////////////////////////////////////////////
router.get('/robots.txt', routes.robots);

///////////////////////////////////////////////
// API 404: Send if api route is not found
///////////////////////////////////////////////
router.get('/api/*', function (request, response) {
  response
    .status(config.status.notFound)
    .send({message: config.error.notFound});
});

//////////////////////////////////////////////////////////////
// Wildcard: everything else gets sent to client for routing
//////////////////////////////////////////////////////////////
router.get('*', client.index);

module.exports = router;

