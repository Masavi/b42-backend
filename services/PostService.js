const { Post } = require('../models');

module.exports = {
  create: (body) => new Post(body),
  addPostToUser: (user, post) => {
    user.posts.push(post);
    return user.save();
  },
};
