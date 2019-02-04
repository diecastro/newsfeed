const mongoose = require('mongoose');
const config = require('../config/mongo');
const mongoosePaginate = require('mongoose-paginate');

mongoose.connect(config.connection_string, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', console.log);
mongoose.Promise = global.Promise;

mongoosePaginate.paginate.options = {
  limit: 20
};
