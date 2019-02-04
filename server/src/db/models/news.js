const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const mongoosePaginate = require('mongoose-paginate');

const NewsSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  author:{
    type: ObjectId,
    ref:'author'
  }
}, {
  timestamps: true
});


NewsSchema.plugin(mongoosePaginate);
const NewsModel = mongoose.model('news', NewsSchema);

module.exports = NewsModel;
