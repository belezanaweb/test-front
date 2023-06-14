import { NumberFormat } from '../numberFormat';

describe('NumberFormat', () => {
  it.skip('formats the number correctly', () => {
    const value = 1000;
    const formattedValue = NumberFormat(value);
    expect(formattedValue).toBe('R$ 1.000,00');
  });

  it.skip('formats negative numbers correctly', () => {
    const value = -5000;
    const formattedValue = NumberFormat(value);
    expect(formattedValue).toBe('-R$ 5.000,00');
  });
});
