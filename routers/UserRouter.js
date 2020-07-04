const express = require('express');

const router = express.Router();

const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');

// ES6
router.post('/api/v1/users', UserValidator.create, UserController.create);

module.exports = router;
