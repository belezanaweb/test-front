import { formatToCurrency } from '~/utils/format-currency';

describe('formatToCurrency Util', () => {
  it('should format any number to BRL currency', () => {
    expect(formatToCurrency(22.0)).toEqual('R$22.00');
  });
});
