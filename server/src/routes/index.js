

'use strict';

exports.getAppIndex = require('./api/getAppIndex');
exports.getApiVersion = require('./api/getApiVersion');
exports.robots = require('./api/info/getRobots');
exports.getUserSalt = require('./api/user/getUserSalt');
exports.getNewToken = require('./api/user/getNewToken');
exports.postCreateSession = require('./api/user/postCreateSession');

exports.getDevices = require('./api/devices/getDevices');
exports.getMerchantSettings = require('./api/settings/getSettings');
exports.postMerchantSettings = require('./api/settings/postSettings');
