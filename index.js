/* eslint-disable no-console */
require('dotenv').config();
require('./database');
const { api, PORT } = require('./api');

api.listen(PORT, () => console.log(`Listening on ${PORT}`));
