var router = require('express').Router();
var weddingsCtrl = require('../controllers/weddings');

// router.get('/', functionsCtrl.index);
router.get('/new', weddingsCtrl.new);


module.exports = router;