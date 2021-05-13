import { maskMoney } from '../../utils/validations'

describe('Testing validantions', () => {
  it('should be able format number to money', () => {
    const money = maskMoney(10)

    expect(money).toEqual('R$ 10,00')
  })
})
