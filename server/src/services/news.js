const NewsModel = require('../db/models/news');
const AuthorModel = require('../db/models/author');
const logger = require('./../lib/logger');

module.exports.getNews = req => new Promise((resolve, reject) => {
  const page = req.params.page || 1;
  NewsModel.paginate({}, {
    select: {
      __v: 0
    },
    populate: {
      path: 'author',
      select: {
        name: 1,
        twitter: 1,
        _id: 1
      }
    },
    page,
    limit: 100
  }).then(resolve).catch(e => {
    logger.info(`Get news: ${e}`);
    reject(e);
  });
});

module.exports.addNews = async payload => {
  const data = JSON.parse(payload.payload);
  try {
    const author = await AuthorModel.findOne({_id: data.author});
    await NewsModel.create({...data, author: author});
    return {message: 'Successfully added'};
  } catch (e) {
    logger.error(e);
    throw new Error(`Error adding ${data.title}`);
  }
};

module.exports.deleteNews = async payload => {
  const data = JSON.parse(payload.payload);
  try {
    await NewsModel.findOneAndDelete({_id: data.id});
    return {message: 'Record Deleted'};
  } catch (e) {
    logger.error(e);
    throw new Error('Error deleting the record');
  }
};

module.exports.updateNews = async payload => {
  try {
    await NewsModel.findOneAndUpdate({_id: payload._id}, payload);
    return {message: 'Record Updated'};
  } catch (e) {
    logger.error(e);
    throw new Error(`Error updating ${payload.title}`);
  }
};

