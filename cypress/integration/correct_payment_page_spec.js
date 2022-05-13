describe('payment page', () => {

  it('navigating from payment page', () => {
    cy.visit('/pagamento')
  })
  it('button initially disabled', () => {
    cy.contains('FINALIZAR O PEDIDO')
      .should('be.visible')
      .and('not.be.disabled')
  })
  it('correct filling of payment details', () => {
    cy.get('#creditCardNumber')
      .should('be.visible')
      .type('5428671295126099')
    cy.get('#creditCardName')
      .should('be.visible')
      .type('Maria Jose Santos')
    cy.get('#creditCardValidate')
      .should('be.visible')
      .type('12/2024')
    cy.get('#creditCardCVV')
      .should('be.visible')
      .type('123')
  })
 
})
