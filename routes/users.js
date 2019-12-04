var router = require('express').Router();
var usersCtrl = require('../controllers/users');


/* GET users listing. */
router.get('/', usersCtrl.index);
router.get('/new', usersCtrl.new);
router.post('/users/:id', usersCtrl.create)

// router.post('/users/names', isLoggedIn, usersCtrl.addNames);

function isLoggedIn() {
  if ( req.isAuthenticated() ) return next();
   res.redirect('/auth/google');
}

module.exports = router;
