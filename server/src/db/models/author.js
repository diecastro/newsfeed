const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const AuthorsSchema = new Schema({
  name: {
    type: String
  },
  twitter: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {validator: validator.isEmail, message: 'Invalid email.'}
  },
  active: {
    type: Boolean,
    default: true
  },
}, {timespan: true});

const AuthorsModel = mongoose.model('author', AuthorsSchema);

module.exports = AuthorsModel;

