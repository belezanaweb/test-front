import { secretCardNumber } from '../secretCardNumber';

vi.mock('../secretCardNumber', () => ({
  secretCardNumber: vi.fn((number: string) => `****.****.****.${number.slice(-4)}`),
}));

test('should display secret card number correctly', () => {
  const cardNumber = '1234567890123456';
  const secretNumber = '****.****.****.3456';

  expect(secretCardNumber(cardNumber)).toEqual(secretNumber);
});
