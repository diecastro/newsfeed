


const winston = require('winston'),
  fs = require('fs'),
  path = require('path');

const logDirectory = path.join(__dirname, '../../log');

const logLevel = 'info';

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: logLevel,
      filename: path.join(logDirectory, 'news-feed-all-logs.log'),
      handleExceptions: true,
      json: true,
      timestamp:true,
      maxsize: 5242880, //5MB
      maxFiles: 20,
      colorize: false
    }),
    new winston.transports.Console({
      level: logLevel,
      handleExceptions: true,
      json: false,
      timestamp:true,
      colorize: true
    })
  ],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
};
