/* eslint-disable no-console */

const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');

mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error connecting to database', err));
