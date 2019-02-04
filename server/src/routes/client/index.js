const config = require('./../../config/app'),
  logger = require('./../../lib/logger'),
  applicationVersion = require('../../../../package.json');

module.exports.index = (request, response) => {

  let js = '/bundle.js';
  let css = '/bundle.css';

  if (process.env.NODE_ENV === 'production') {
    js = `/bundle${global.appFullCommit}.js`;
    css = `/bundle${global.appFullCommit}.css`;
  }
  try {
    response.status(config.status.ok).render('index', {
      applicationVersion: applicationVersion.version,
      productionEnvironment: JSON.stringify(process.env.NODE_ENV === 'production'),
      js,
      css
    });
  } catch (err) {
    logger.error('**** ERROR **** : error= %s ', JSON.stringify(err));
    response.status(config.status.ok).render('error', {});
  }
};
