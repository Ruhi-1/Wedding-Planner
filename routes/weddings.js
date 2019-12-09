var router = require('express').Router();
var weddingsCtrl = require('../controllers/weddings');

router.get('/', weddingsCtrl.index);
router.get('/new', weddingsCtrl.new);
router.put('/:id/guests', weddingsCtrl.update);
router.get('/', weddingsCtrl.show);
router.get('/:id/edit', weddingsCtrl.edit);
// router.post('/weddings', weddingsCtrl.create); // /weddings/guests
// router.create('/:id', weddingsCtrl.create);


module.exports = router;
