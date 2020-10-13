import { formatPrice, obfuscateCreditCardNumbers } from './format';

describe('formatPrice', () => {
  it('should be able format currency correctly', () => {
    // Arrange
    const price1 = 0;
    const price2 = 0.5;
    const price3 = 1;
    const price4 = 100.0;

    // Act
    const formattedPrice1 = formatPrice(price1);
    const formattedPrice2 = formatPrice(price2);
    const formattedPrice3 = formatPrice(price3);
    const formattedPrice4 = formatPrice(price4);

    // Asert
    expect(formattedPrice1).toBe('R$0,00');
    expect(formattedPrice2).toBe('R$0,50');
    expect(formattedPrice3).toBe('R$1,00');
    expect(formattedPrice4).toBe('R$100,00');
  });
});

describe('obfuscateCreditCardNumbers', () => {
  it('should be able format credit card number', () => {
    // Arrange
    const number1 = '1111.2222.3333.4444';
    const number2 = '1111.2222.3333.44';
    const number3 = '';

    // Act
    const formattedNumber1 = obfuscateCreditCardNumbers(number1);
    const formattedNumber2 = obfuscateCreditCardNumbers(number2);
    const formattedNumber3 = obfuscateCreditCardNumbers(number3);

    // Asert
    expect(formattedNumber1).toBe('****.****.****.4444');
    expect(formattedNumber2).toBe('****.****.**33.44');
    expect(formattedNumber3).toBe('');
  });
});
