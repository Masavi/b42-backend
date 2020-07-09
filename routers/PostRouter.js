const express = require('express');

const router = express.Router();

const { PostValidator } = require('../validators');
const { PostController } = require('../controllers');

router.post('/users/:idUser/posts',
  PostValidator.create, PostController.create);

router.get('/users/:idUser/posts',
  PostValidator.findAll, PostController.findAll);

module.exports = router;
