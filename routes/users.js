var router = require('express').Router();
var usersCtrl = require('../controllers/users');
var passport = require('passport');


/* GET users listing. */
router.get('/', usersCtrl.index);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/loggedin/admin',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
