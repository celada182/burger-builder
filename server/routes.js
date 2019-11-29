var express = require('express');
var router = express.Router();

var product_controller = require('./controllers/order');

router.post('/', product_controller.create);

router.get('/:id', product_controller.readOne);

router.get('/', product_controller.read);

router.put('/:id', product_controller.update);

router.delete('/:id', product_controller.delete);

module.exports = router;