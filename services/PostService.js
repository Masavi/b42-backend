const { Post } = require('../models');

module.exports = {
  create: (body) => new Post(body),
  addPostToUser: (post, user) => {
    user.posts.push(post);
    return user.save();
  },
};
