import '@testing-library/jest-dom/extend-expect';

import { toMoney } from './number';

describe('function toMoney', () => {
  it('should convert float number in currency brazillian format', () => {
    expect(toMoney(1234.5)).toBe('R$ 1.234,50');
  });
});
