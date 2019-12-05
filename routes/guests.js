var express = require('express');
var router = express.Router();
var guestsCtrl = require('../controllers/guests');

router.get('/', guestsCtrl.index);
router.get('/new', guestsCtrl.new);
router.post('/', guestsCtrl.create)


module.exports = router;
