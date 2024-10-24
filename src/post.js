const post = require('./post.service');

(async () => {
  const posts = await post.getAll();
  console.log(posts);
})();
