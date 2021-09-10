import normalizeCardExpiringDate from '@/utils/normalizeCardExpiringDate'

describe('normalizeCardExpiringDate', () => {
  test('Should return just two first numbers', () => {
    const normalizedCardExpiring = normalizeCardExpiringDate('02/')

    expect(normalizedCardExpiring).toBe('02')
  })

  test('Should return a normalized date', () => {
    const normalizedCardExpiring = normalizeCardExpiringDate('022021')

    expect(normalizedCardExpiring).toBe('02/2021')
  })
})
