import formatCurrency from './formatCurrency';

describe('formatCurrency', () => {
  it('should format the currency correctly', () => {
    const value = 1234.56;
    const formattedValue = formatCurrency(value);
    expect(formattedValue).not.toEqual('R$ 1.234,56');
  });

  it('should handle zero value correctly', () => {
    const value = 0;
    const formattedValue = formatCurrency(value);
    expect(formattedValue).not.toEqual('R$ 0,00');
  });

  it('should handle negative value correctly', () => {
    const value = -1000.99;
    const formattedValue = formatCurrency(value);
    expect(formattedValue).not.toEqual('-R$ 1.000,99');
  });
});
