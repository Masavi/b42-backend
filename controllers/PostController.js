const { UserService, PostService } = require('../services');

module.exports = {
  create: async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    try {
      // 1) Traernos el usuario
      const user = await UserService.findOneById(idUser);

      // 2) Crear el objeto de posts
      const post = await PostService.create(body);

      // 3) Agregar el nuevo post al usuario y salvar el usuario
      const userWithPost = await PostService.addPostToUser(post, user);

      // 4) Responder al cliente con el usuario con el nuevo post
      res.status(201).json(userWithPost);
    } catch (error) {
      res.status(400).json({ message: 'Error adding post to user', error });
    }
  },
  findAll: async (req, res) => {
    const { idUser } = req.params;
    try {
      // 1) Traemos el usuario
      const user = await UserService.findOneById(idUser);

      // 2) Sacamos los posts del objeto de usuario
      const { posts } = user;

      // 3) Responder al cliente con los posts del usuario
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ message: 'Error getting user posts', error });
    }
  },
};
