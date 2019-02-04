'use strict';

const serverConfig = require('./config/app').server,
  logger = require('./lib/logger'),
  app = require('./app.js'),
  serverApp = app(),
  packageJson = require('./../../package.json'),
  appVersion = require('./../../app-version.json');

global.logger = logger;
global.log = logger.log;

serverApp.listen(serverConfig.port, () => {

  global.appVersion = packageJson.version;
  global.appFullCommit = appVersion ? appVersion.commit : '';
  global.appCommit = appVersion ? appVersion.commit.substring(0, 11) : 'none';

  logger.info(
    serverConfig.name + ' 🌎  is listening at http://%s:%s version: %s commit: %s',
    serverConfig.host,
    serverConfig.port,
    global.appVersion,
    global.appCommit
  );

});

process.on('uncaughtException', err => {
  let exceptionMessage = err instanceof Error ? err.stack : err.toString();
  exceptionMessage =
    '!!!!!!!!!!!!!! Uncaught Exception !!!!!!!!!!!!!! - ERROR: ' +
    exceptionMessage;
  logger.error(exceptionMessage);
});
