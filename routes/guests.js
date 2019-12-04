var express = require('express');
var router = express.Router();
var guestsCtrl = require('../controllers/guests');

router.get('/', guestsCtrl.index);
router.get('/new', usersCtrl.new);
router.post('/users', usersCtrl.create)


module.exports = router;
