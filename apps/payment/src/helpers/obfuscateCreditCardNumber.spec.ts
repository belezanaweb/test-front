import obfuscateCreditCardNumber from './obfuscateCreditCardNumber';

describe('obfuscateCreditCardNumber', () => {
  it('should return undefined if no credit card number is provided', () => {
    expect(obfuscateCreditCardNumber()).toBeUndefined();
  });

  it('should return undefined if credit card number is empty', () => {
    expect(obfuscateCreditCardNumber('')).toBe('');
  });

  it('should obfuscate the credit card number', () => {
    expect(obfuscateCreditCardNumber('4444333322221111')).toBe(
      '****.****.****.1111',
    );
  });
});
