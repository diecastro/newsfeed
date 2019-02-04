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

module.exports.deleteAuthor = async payload => {
  try {
    await AuthorModel.findOneAndDelete({_id: payload.id});
    return {message: 'Author Deleted'};
  } catch (e) {
    logger.error(e);
    throw new Error('Error deleting the author');
  }
};

module.exports.updateAuthor = async payload => {
  try {
    await AuthorModel.findOneAndUpdate({_id: payload._id}, payload);
    return {message: 'Author Updated'};
  } catch (e) {
    logger.error(e);
    throw new Error(`Error updating ${payload.title}`);
  }
};

module.exports.getAuthors = async req => {
  try {
    const authors = await AuthorModel.find({}, {__v: 0}, {sort: 'name'});
    return {data: authors};
  } catch (e) {
    logger.error(e);
    throw new Error('Error getting the list of authors');
  }
};
