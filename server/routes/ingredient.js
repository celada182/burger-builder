const express = require('express');
const router = express.Router();

const controller = require('../controllers/ingredient');

router.get('/', controller.readOne);

module.exports = router;