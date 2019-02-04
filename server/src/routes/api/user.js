const passport = require('passport');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config/app');

router.post('/login', async (req, res, next) => {
  req.body = JSON.parse(req.body.payload);
  passport.authenticate('userLogin', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error(`An error occurred, ${info.message}`);
        return res.status(500).json({message: error.message});
      }
      req.login(user, {session: false}, async (error) => {
        if (error) return next(error);
        const token = jwt.sign(user, config.server.secret);
        return res.json({user, token});
      });
    } catch (error) {
      return res.status(500).json({message: `An error has ocurred, ${error.message}`});
    }
  })(req, res, next);
});

router.post('/signup', passport.authenticate('userSignUp', {session: false}), async (req, res, next) => {
  res.json({
    message: 'User Created'
  });
});

module.exports = router;
