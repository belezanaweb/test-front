import axios from 'axios';
import { getCart } from './get-cart.api';
import { mockCartData } from './get-cart.api.mock';

jest.mock('axios');

describe('getCart', () => {
  it('should call getCart successfully', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: mockCartData,
    });

    const cartData = await getCart();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(cartData).toEqual(mockCartData);
  });

  it('should throw an error if fetching cart data fails', async () => {
    const mockError = new Error('Failed to fetch cart data');

    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(mockError);

    await expect(getCart()).rejects.toThrowError(mockError);
  });
});
