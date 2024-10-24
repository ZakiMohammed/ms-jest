const isAdmin = () => false;

const getRoles = () => ['Dev', 'Tester', 'DevOps'];

const getUser = () => ({ id: 1, name: 'John' });

const getEmail = () => null;

module.exports = {
  isAdmin,
  getRoles,
  getUser,
  getEmail,
};
