const { getUsers } = require('./user.service');
const db = require('./db');

describe('user service', () => {
  it('should call the db method', () => {
    // arrange
    const spyGetAll = jest.spyOn(db, 'getAll');

    // act
    getUsers();

    // assert
    expect(spyGetAll).toHaveBeenCalled();
    expect(spyGetAll).toHaveBeenCalledTimes(1);
  });

  
  it('should get users', () => {
    const expected = [
        { id: 1001, name: 'Allen'}
    ];
    const spyGetAll = jest.spyOn(db, 'getAll');
    
    spyGetAll.mockImplementation(() => expected);

    const received = getUsers();
    expect(received).toEqual(expected);
});
});
