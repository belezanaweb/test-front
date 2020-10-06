import { renderHook } from '@testing-library/react-hooks';

import { usePrice } from 'hooks/price';

describe('Price Hook', () => {
  it('should be able to format an price', async () => {
    const { result } = renderHook(() => usePrice());

    expect(result.current.formatPrice(99.9)).toEqual('99,90');
  });
});
