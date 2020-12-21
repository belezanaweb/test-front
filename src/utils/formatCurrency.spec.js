import formatter from './formatCurrency'
describe('#formatter', () => {
  it('Should formatter cents', () => {
    expect(formatter(0.1)).toBe('R$ 0,10')
  })

  it('Should formatter integer', () => {
    expect(formatter(1)).toBe('R$ 1,00')
  })

  it('Should formatter thousands', () => {
    expect(formatter(1000)).toBe('R$ 1.000,00')
  })
})
