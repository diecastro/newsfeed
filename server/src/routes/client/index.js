

'use strict';

const path = require('path'),
  fs = require('fs'),
  applicationVersion = require('./../../../../package.json'),
  logger = require('../../lib/logger'),
  config = require('../../config/app');

exports.staticDir = path.resolve(__dirname, '../../../../client/dist');

exports.index = (request, response) => {

  try {

    const labelData = request.label ? request.label : {};
    const siteKey = fs.readFileSync(path.resolve(__dirname, '../../keys/public.key'), 'utf8');
    let js = '/dist.js';
    let css = '/dist.css';

    if (process.env.NODE_ENV === 'production') {
      js = `/dist${global.appFullCommit}.js`;
      css = `/dist${global.appFullCommit}.css`;
    }

    const applicationVersionCommit = `${applicationVersion.version}-${global.appCommit}`;

    response.status(config.status.ok).render('index', {
      label: labelData,
      labelStringified: JSON.stringify(labelData),
      applicationVersion: applicationVersion.version,
      applicationVersionCommit: applicationVersionCommit,
      siteKeyStringified: JSON.stringify(siteKey),
      productionEnvironment: JSON.stringify(process.env.NODE_ENV === 'production'),
      maintenanceEnabled: config.maintenanceEnabled,
      js,
      css
    });

  } catch (e) {
    logger.info('INFO: Version >>> %s', applicationVersion.version);
    logger.info('INFO: Commit >>> %s', global.appCommit);
    logger.info('INFO: Version and Commit >>> %s', applicationVersion.version + '-' + global.appCommit);
    logger.error('$$$$ ERROR: Index >>> %s message: %s', JSON.stringify(e), e.message);
  }
};

