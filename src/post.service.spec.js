const axios = require('axios').default;
const post = require('./post.service');

jest.mock('axios');

describe('Post', () => {
  let mockPosts = [];

  beforeEach(() => {
    jest.clearAllMocks();
    
    mockPosts = [
      {
        userId: 1,
        id: 1,
        title: 'Post 1',
        body: 'Body 1',
      },
      {
        userId: 2,
        id: 2,
        title: 'Post 2',
        body: 'Body 2',
      },
    ];
  });

  it('should get all posts', async () => {
    axios.get.mockImplementation(() => Promise.resolve(mockPosts));

    const posts = await post.getAll();

    expect(posts).toEqual(mockPosts);
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('should not get all posts', async () => {
    const expected = new Error('Failed to fetch');

    axios.get.mockImplementation(() => Promise.reject(expected));
    
    try {
      await post.getAll();
    } catch (error) {
      expect(error).toEqual(expected);
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledTimes(1);
    }
  });
});
