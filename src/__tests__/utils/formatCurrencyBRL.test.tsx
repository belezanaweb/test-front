import formatCurrencyBRL from '../../utils/formatCurrencyBRL'

describe('formatCurrencyBRL', () => {

  it('should format number', () => {
    const val = formatCurrencyBRL(10.00)
    expect(val.includes('R$ 10,00'))
  })
})
