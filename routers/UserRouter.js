const express = require('express');

const router = express.Router();

const { UserController } = require('../controllers');

// ES6
router.post('/api/v1/users', UserController.create);

module.exports = router;
