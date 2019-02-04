const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorService = require('../../services/author');

router.post('/author', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
  authorService.addAuthor(req.body).then(result => {
    res.json(result);
  }).catch(error => {
    return res.status(500).json({message: `${error.message}`});
  });
});
router.get('/authors', async (req, res, next) => {
  authorService.getAuthors().then(result => {
    res.json(result);
  }).catch(error => {
    return res.status(500).json({message: `An error has ocurred, ${error.message}`});
  });
});

module.exports = router;
