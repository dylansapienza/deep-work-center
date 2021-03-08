const express = require('express');

const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/quote', controllers.quote);

module.exports = router;
