const express = require('express');

const router = express.Router();
const homeController = require('./home_controller.js');

console.log('Router loaded');

router.get('/', homeController.home);

module.exports = router;