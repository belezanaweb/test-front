import normalizeCardNumber from '@/utils/normalizeCardNumber'

describe('normalizeCardNumber', () => {
  test('Should return spaced value from first group', () => {
    const normalizedCardExpiring = normalizeCardNumber('01458')

    expect(normalizedCardExpiring).toBe('0145 8')
  })

  test('Should return a normalized card number', () => {
    const normalizedCardExpiring = normalizeCardNumber('1234567898765432')

    expect(normalizedCardExpiring).toBe('1234 5678 9876 5432')
  })
})
