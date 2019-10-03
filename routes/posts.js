const express = require("express");
const router = express.Router();
const models = require("../models");

router.post("/tweet", (req, res, next) => {
  const tweet = req.body.tweet;
  models.Post.create(
    {
      caption: tweet,
      user_id: req.user.id
    }
  ).then(tweets => {
    res.send(201);
  });
});
router.get("/tweet", (req, res, next) => {
  console.log("im in tweets");
  models.Post.findAll({
    include: {
      model: models.User,
      where: {
        username: req.query.username
      }
    }
  }).then(tweets => {
    res.send(tweets);
  });
});

module.exports = router;
