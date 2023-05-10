import { currency } from './formatter';

describe('Modules :: Formatter', () => {
  it('should be format currency number', () => {
    const number = 99.9;
    const valueExpected = 'R$ 99,90';
    const valueReceived = currency(number);

    expect(valueReceived).toEqual(valueExpected);
  });
});
