import api from './api';

jest.mock('./api', () => ({
  getCurrentCart: jest.fn(),
}));

describe('api.getCurrentCart', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch the current cart successfully', async () => {
    const mockResponse = {
      items: [
        {
          id: 1,
          name: 'Product 1',
          price: 10,
        },
        {
          id: 2,
          name: 'Product 2',
          price: 20,
        },
      ],
      total: 30,
    };

    (api.getCurrentCart as jest.Mock).mockResolvedValue(mockResponse);

    const result = await api.getCurrentCart();
    expect(result).toEqual(mockResponse);
    expect(api.getCurrentCart).toHaveBeenCalledTimes(1);
  });

  it('should handle API errors', async () => {
    const errorMessage = 'Failed to fetch cart';

    (api.getCurrentCart as jest.Mock).mockRejectedValue(
      new Error(errorMessage),
    );

    await expect(api.getCurrentCart()).rejects.toThrow(errorMessage);
    expect(api.getCurrentCart).toHaveBeenCalledTimes(1);
  });
});
