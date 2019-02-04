const express = require('express');
const router = express.Router();
const newsService = require('../../services/news');

router.post('/news', async (req, res, next) => {
  newsService.addNews(req.body).then(result => {
    res.json(result);
  }).catch(error => {
    res.json({message: `An error has ocurred, ${error.message}`})
  });
});

router.get('/news/:page', async (req, res, next) => {
  newsService.getNews(req).then(result => {
    res.json(result)
  }).catch(error => {
    res.json({message: `An error has ocurred, ${error.message}`})
  })
});

router.delete('/news', async (req, res, next) => {
  newsService.deleteNews(req.body).then(result => {
    res.json(result);
  }).catch(error => {
    res.json({message: `An error has ocurred, ${error.message}`})
  });
});

router.put('/news', async (req, res, next) => {
  newsService.updateNews(req.body).then(result => {
    res.json(result);
  }).catch(error => {
    res.json({message: `An error has ocurred, ${error.message}`})
  });
});

module.exports = router;
