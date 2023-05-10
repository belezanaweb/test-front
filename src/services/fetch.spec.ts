import fetch from './fetch';

jest.mock('axios', () => ({
  default: {
    create: jest.fn((props) => props),
  },
}));

describe('Services :: Fetch', () => {
  it('should be create service fetch', () => {
    expect(fetch).toHaveProperty('baseURL');
  });
});
