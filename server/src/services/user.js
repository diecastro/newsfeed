const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../db/models/user');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const config = require('../config/app');
const logger = require('./../lib/logger');


passport.use('userSignUp', new localStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  try {
    const user = await UserModel.create({email, password});
    return done(null, user);
  } catch (error) {
    logger.error(error);
    done(error);
  }
}));

passport.use('userLogin', new localStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {

    const user = await UserModel.findOne({email});
    if (!user) {
      return done({message: 'User not found', status: 401}, false, null);
    }
    const validate = await user.isValidPassword(password);

    if (!validate) {
      logger.error(`Wrong password for the user ${email}`);
      return done(null, false, {message: 'Wrong Password'});
    }

    const userObject = user.toObject();

    const payload = {
      active: userObject.active,
      email: userObject.email,
      id: userObject._id
    };
    return done(null, payload, {message: 'Logged in Successfully'});
  } catch (error) {
    logger.error(error);
    return done(error);
  }
}));

passport.use(new JWTstrategy({
  secretOrKey: config.server.secret,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
}, async (token, done) => {
  try {
    return done(null, token);
  } catch (error) {
    logger.error(error);
    done(error);
  }
}));
