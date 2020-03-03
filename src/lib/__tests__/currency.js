import { formatToCurrency } from '../currency';

describe('currency', () => {
  describe('formatToCurrency', () => {
    it('should format any number to BRL currency', () => {
      expect(formatToCurrency(22.0)).toEqual('R$22.00');
    });
  });
});
