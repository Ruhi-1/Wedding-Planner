var router = require('express').Router();
var foodsCtrl = require('../controllers/foods');

// router.get('/', foodsCtrl.index);
router.get('/new', foodsCtrl.new);


module.exports = router;