import maskCreditCardNumber from './maskCreditCardNumber'
describe('#maskCreditCardNumber', () => {
  it('Should mask CreditCard number', () => {
    expect(maskCreditCardNumber('5216.1918.8163.3792')).toBe('****.****.****.3792')
  })

  it('Should mask CreditCard number', () => {
    expect(maskCreditCardNumber('5559.1047.9356.7730')).toBe('****.****.****.7730')
  })
})
