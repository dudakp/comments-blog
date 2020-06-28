module.exports = app => {
  const comments = require('../controllers/comment.controller.js');
  let router = require('express').Router();

  router.post('/', comments.createComment);
  router.get('/', comments.getCommentsForArticle);

  app.use('/api/comments', router);
}

