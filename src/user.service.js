const db = require('./db');

const getUsers = () => {
  return db.getAll();
};

module.exports = {
  getUsers,
};
