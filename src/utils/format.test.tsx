import { formatPrice } from './format';

describe('formatPrice', () => {
  it('should be able format currency correctly', () => {
    // Arrange
    const price1 = 0;
    const price2 = 0.5;
    const price3 = 1;
    const price4 = 100.0;

    // Act
    const price1Formatted1 = formatPrice(price1);
    const price1Formatted2 = formatPrice(price2);
    const price1Formatted3 = formatPrice(price3);
    const price1Formatted4 = formatPrice(price4);

    // Asert
    expect(price1Formatted1).toBe('R$0,00');
    expect(price1Formatted2).toBe('R$0,50');
    expect(price1Formatted3).toBe('R$1,00');
    expect(price1Formatted4).toBe('R$100,00');
  });
});
