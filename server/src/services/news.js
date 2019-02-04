const NewsModel = require('../db/models/news');
const AuthorModel = require('../db/models/author');
const logger = require('./../lib/logger');

module.exports.getNews = req => new Promise((resolve, reject) => {
  const page = req.params.page || 1;
  NewsModel.paginate({}, {
    select: {
      __v: 0
    },
    page,
    limit: 10
  }).then(resolve).catch(e => {
    logger.info(`Get news: ${e}`);
    reject(e);
  });
});

module.exports.addNews = async payload => {
  try {
    const author = await AuthorModel.findOne({name: payload.author});
    await NewsModel.create({...payload, author: author});
    return {message: 'Successfully added'};
  } catch (e) {
    logger.error(e);
    throw new Error(`Error adding ${payload.title}`);
  }
};

module.exports.deleteNews = async payload => {
  try {
    await NewsModel.findOneAndDelete({_id: payload.id});
    return {message: 'Record Deleted'};
  } catch (e) {
    logger.error(e);
    throw new Error('Error deleting the record');
  }
};

module.exports.updateNews = async payload => {
  try {
    const alg0 = await NewsModel.findOneAndUpdate({_id: payload.id}, payload);
    return {message: 'Record Updated'};
  } catch (e) {
    logger.error(e);
    throw new Error(`Error updating ${payload.title}`);
  }
};

