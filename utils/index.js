const bcrypt = require('bcrypt');

module.exports = {
  comparePasswords: (userPassword, reqPassword) => {
    return bcrypt.compareSync(reqPassword, userPassword);
  },
};
