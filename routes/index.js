var router = require('express').Router();
var passport = require('passport');
var indexCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', indexCtrl.index);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
