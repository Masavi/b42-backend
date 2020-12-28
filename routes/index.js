const express = require('express');

const router = express.Router();
const { verifyToken } = require('../middlewares');

// Public
router.use(require('./AuthRoutes'));

// Private
router.use(verifyToken);
router.use(require('./UserRoutes'));
// router.use(require('./PostRouter'));

module.exports = router;
