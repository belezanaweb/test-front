import { cardCVVMask, cardNumberMask, cardValidThroughMask, fieldValidation } from './input';

describe('Input helper tests', () => {
  it('should return cardNumberMask value without error', () => {
    let value = cardNumberMask('1234567');
    value = cardNumberMask('1234567890123456');
    expect(value).toBe('1234.5678.9012.3456');
  });

  it('should return cardValidThroughMask value without error', () => {
    let value = cardValidThroughMask('12');
    value = cardValidThroughMask('122200');
    expect(value).toBe('12/2200');
  });

  it('should return cardCVVMask value without error', () => {
    const value = cardCVVMask('123');
    expect(value).toBe('123');
  });

  it('should return fieldValidation as false', () => {
    let value = fieldValidation('123', 5);
    value = fieldValidation('', 5);
    expect(value).toBe(false);
  });
});
