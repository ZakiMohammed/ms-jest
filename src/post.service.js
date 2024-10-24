const axios = require('axios').default;

const getAll = async () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

module.exports = {
  getAll,
};
