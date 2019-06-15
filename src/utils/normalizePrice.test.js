/* eslint-disable no-undef */
import normalizPrice from './normalizePrice';

describe('"Normalize Prices" function', () => {

  test('Test princes', () => {

    expect(normalizPrice(0)).toBe('R$ 0,00');
    expect(normalizPrice(10)).toBe('R$ 10,00');
    expect(normalizPrice(10.2)).toBe('R$ 10,20');
    expect(normalizPrice(10.35)).toBe('R$ 10,35');
    expect(normalizPrice(-10.99)).toBe('- R$ 10,99');

  });

});
