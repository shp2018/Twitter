const express = require("express");
const router = express.Router();
const models = require("../models");

router.post("/bio", (req, res, next) => {
  const bio = req.body.bio;
  models.User.update(
    {
      bio: bio
    },
    {
      where: {
        id: req.user.id
      }
    }
  ).then(result => {
    res.send(201);
  });
});

router.get('/bio',(req, res, next)=>{
    models.User.findOne({
        where: {
            username: req.query.username
        }
    })
    .then(result =>{
        res.send(result)
    })

})


module.exports = router;
