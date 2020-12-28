const express = require('express');

const router = express.Router();

const { UserValidator } = require('../validators');
const { AuthController } = require('../controllers');

router.post('/signup',
  UserValidator.create, AuthController.signup);

router.post('/login',
  UserValidator.login, AuthController.login);

module.exports = router;
