const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {validator: validator.isEmail, message: 'Invalid email.'}
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 10);
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
