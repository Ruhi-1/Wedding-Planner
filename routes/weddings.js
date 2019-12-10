var router = require('express').Router();
var weddingsCtrl = require('../controllers/weddings');

router.get('/', weddingsCtrl.index);
router.get('/new', weddingsCtrl.new);
router.put('/', weddingsCtrl.update);
router.get('/update', weddingsCtrl.show);
router.get('/:id/edit', weddingsCtrl.edit);
router.delete('/:id', weddingsCtrl.delete);
router.post('/', weddingsCtrl.create); // /weddings/guests
// router.create('/:id', weddingsCtrl.create);


module.exports = router;
