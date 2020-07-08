const express = require('express');

const router = express.Router();

router.use(require('./AuthRouter'));
router.use(require('./UserRouter'));
router.use(require('./PostRouter'));

module.exports = router;
