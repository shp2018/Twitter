const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post(
  "/signup",
  passport.authenticate("local-signup"),
  (req, res, next) => {
    if (req.user) {
      res.send(200);
    } else {
      res.send(400);
    }
  }
);

router.post("/login", (req, res, next) => {
  passport.authenticate("local-signin", function(err, user, info) {
    if (err) {
      res.send(500);
    }
    if (user) {
      req.login(user, function(error) {
        if (error) return next(error);
        return res.send(200);
      });
    } else {
      console.log(info);
      res.status(400).json(info);
    }
  })(req, res, next);
});
router.get("/current-user", (req, res, next) => {
  res.send(
    req.user
  )
})

module.exports = router;

