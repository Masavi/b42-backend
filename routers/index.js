const express = require('express');

const router = express.Router();
const { verifyToken } = require('../middlewares');

// Public
router.use(require('./AuthRouter'));
router.use(require('./UserRouter'));

// Private
router.use(verifyToken);
router.use(require('./PostRouter'));

module.exports = router;
