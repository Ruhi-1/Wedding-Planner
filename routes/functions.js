var router = require('express').Router();
var functionsCtrl = require('../controllers/functions');

// router.get('/', foodsCtrl.index);
router.get('/new', functionsCtrl.new);


module.exports = router;