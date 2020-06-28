const db = require('../models/');
const Comment = db.comment;

exports.createComment = (req, res) => {
  console.log(req);
  if (!req.body) {
    res.status(400).send({message: 'Empty body!!!'});
  }
  const comment = new Comment({
    authorName: req.body.authorName,
    content: req.body.content,
    article: req.body.article
  });

  comment
    .save(comment)
    .then(data =>
      res.send(data))
    .catch(err =>
      res.status(500).send({message: `cosi sa podrbalo: ${err}`}));
};

exports.getCommentsForArticle = async (req, res) => {
  console.log(req.query.articleName);
  const comments = await Comment.find({article: req.query.articleName});
  res.status(200).send({comments: comments});
};

