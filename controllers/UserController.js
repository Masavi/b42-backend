const { UserService } = require('../services');
const { comparePasswords } = require('../utils');

module.exports = {
  create: async (req, res) => {
    const { email } = req.body;
    try {
      const userExists = await UserService.findOneByEmail(email);
      if (userExists) res.stats(400).json({ message: 'Email already taken' });
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const users = await UserService.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserService.findOneById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User not found' });
      const modifiedUser = await UserService.updateOne(user, body);
      res.status(200).json(modifiedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User not found' });
      await UserService.deleteOneById(id);
      res.status(204).json();
    } catch (err) {
      res.status(400).json(err);
    }
  },
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
    const user = await UserService.findOneByEmail(email);
    if (!user) res.status(400).json({ message: 'error on credentials' });
    const isValid = comparePasswords(user.password, password);
    if (!isValid) res.status(400).json({ message: 'error on credentials' });
    // TODO: generar y enviar JWT al cliente
    res.status(200).json({ message: 'login successful', token: null });
  },
};
