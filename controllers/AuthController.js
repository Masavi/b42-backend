const { comparePasswords, createToken } = require('../utils');
const { UserService } = require('../services');

module.exports = {
  signup: async (req, res) => {
    const { email } = req.body;
    try {
      const userExists = await UserService.findOneByEmail(email);
      if (userExists) res.stats(400).json({ message: 'Email already taken' });
      const user = await UserService.create(req.body);
      user.password = undefined;
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserService.findOneByEmail(email);
      if (!user) res.status(400).json({ message: 'error on credentials' });
      const isValid = comparePasswords(user.password, password);
      if (!isValid) res.status(400).json({ message: 'error on credentials' });
      const token = createToken(user);
      if (!token) res.status(500).json({ message: 'error on token creation' });
      res.status(200).json({ message: 'login successful', token });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
