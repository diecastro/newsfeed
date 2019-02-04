

'use strict';

const serverConfig = require('./config/app').server,
  packageJson = require('./../../package.json'),
  appVersion = require('./../../app-version.json'),
  logger = require('./lib/logger'),
  app = require('./app.js'),
  serverApp = app();

const server = serverApp.listen(serverConfig.port, function () {

  global.appVersion = packageJson.version;
  global.appFullCommit = appVersion ? appVersion.commit : '';
  global.appCommit = appVersion ? appVersion.commit.substring(0, 11) : 'none';

  logger.info(`${serverConfig.name} 🌎  is listening at http://${serverConfig.host}:${serverConfig.port} version: ${global.appVersion} commit: ${global.appCommit}`);

});

process.on('uncaughtException', (err) => {

  let exceptionMessage = err instanceof Error ? err.stack : err.toString();
  exceptionMessage = '!!!!!!!!!!!!!! Uncaught Exception !!!!!!!!!!!!!! - ERROR: ' + exceptionMessage;

  logger.error(exceptionMessage);

});

return server;
