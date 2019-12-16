const express = require('express');
const router = express.Router();

const controller = require('../controllers/order');

router.post('/', controller.create);

router.get('/:id', controller.readOne);

router.get('/', controller.read);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;