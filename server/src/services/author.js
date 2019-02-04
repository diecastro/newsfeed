const AuthorModel = require('../db/models/author');
const logger = require('./../lib/logger');

module.exports.addAuthor = async payload => {
  try {
    await AuthorModel.create(payload);
    return {message: 'Author Added'};
  } catch (e) {
    logger.error(e);
    throw new Error(`Error adding author ${payload.name}`);
  }
};
