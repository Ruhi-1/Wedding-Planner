var router = require('express').Router();
var weddingsCtrl = require('../controllers/weddings');

// router.get('/', functionsCtrl.index);
router.get('/new', weddingsCtrl.new);
router.put('/:id', weddingsCtrl.update);
// router.create('/:id', weddingsCtrl.create);


module.exports = router;