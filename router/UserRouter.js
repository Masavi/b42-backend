const express = require('express');

const router = express.Router();
const { User } = require('../models');

// ES6
router.post('/api/v1/users', async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
