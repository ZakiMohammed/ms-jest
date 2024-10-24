const { isAdmin, getRoles, getUser, getEmail } = require('./matchers');

describe('matchers', () => {
  describe('isAdmin', () => {
    it('should return false for isAdmin', () => {
      const received = isAdmin();
      expect(received).toBeFalsy();
    });
  });

  describe('getRoles', () => {
    let roles = [];

    beforeEach(() => {
      roles = getRoles();
    });

    it('should return fruits', () => {
      const expected = ['Dev', 'Tester', 'DevOps'];
      const received = roles;
      expect(received).toEqual(expected); // array
    });

    it('should return Apple as fruit', () => {
      const expected = 'DevOps';
      const received = roles;
      expect(received).toContain(expected);
    });

    it('should be more than 3', () => {
      const expected = 3;
      const received = roles.length;
      expect(received).toBeGreaterThanOrEqual(expected);
    });
  });

  describe('getUser', () => {
    it('should return user', () => {
      const expected = { id: 1, name: 'John' };
      const received = getUser();
      expect(received).toEqual(expected); // object
    });
  });

  describe('getEmail', () => {
    it('should return null for sad', () => {
      const received = getEmail();
      expect(received).toBeNull();
    });
  });
});
