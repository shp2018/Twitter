const express = require('express');
const router = express.Router();

function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated())
    if (req.isAuthenticated()){
      
        return next();
        
    }
    res.redirect('/login');
}

router.get('/', function(req, res, next) {
  return res.render('index');
});
router.get('/profile/:username', (req, res, next)=>{
    res.render('index');
})
router.get('/feed/:username', (req,res,next)=>{
    res.render('index')
})


router.get('/signup', (req, res, next) => {
  res.render('index');
});
router.get('/login', (req, res, next) => {
  res.render('index');
});



module.exports = router;
