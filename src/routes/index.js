var express = require('express');
var router = express.Router();

router.use('/login', require('./login'));
router.use('/api', require('./webhook'));
//router.use('/route2', require('./route2'));

module.exports = router;