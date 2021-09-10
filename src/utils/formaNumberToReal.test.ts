import formatNumberToReal from '@/utils/formaNumberToReal'

describe('formatNumberToReal', () => {
  test('Should return a correct value', () => {
    const realValue = formatNumberToReal(25.5)

    expect(realValue).toBe('R$ 25.50')
  })

  test('Should return a correct negative value', () => {
    const realValue = formatNumberToReal(-22)

    expect(realValue).toBe('-R$ 22.00')
  })
})
