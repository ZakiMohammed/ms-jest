const { sum, sub } = require('./calculate');

describe('sum', () => {
  it('should sum 1 and 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should sum 1 and 1 not 3', () => {
    expect(sum(1, 1)).not.toBe(3);
  });
});

describe('sub', () => {
  it('should sub 2 from 1', () => {
    expect(sub(2, 1)).toBe(1);
  });

  it('should sub 1 from 1 not 3', () => {
    expect(sub(1, 1)).not.toBe(3);
  });
});
