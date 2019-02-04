const express = require('express');
const router = express.Router();
const authorService = require('../../services/author');

router.post('/author', async (req, res, next) => {
  authorService.addAuthor(req.body).then(result => {
    res.json(result);
  }).catch(error => {
    res.json({message: `An error has ocurred, ${error.message}`})
  });
});

module.exports = router;
