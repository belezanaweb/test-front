describe('incorrect', () =>{
  it('navigating from payment page', () => {
    cy.visit('/pagamento')
  })

  it('incorrect filling of payment details', () => {
    cy.get('#creditCardNumber')
      .should('be.visible')
      .type('12336654')
    cy.get('#creditCardName')
      .should('be.visible')
      .type('Maria Jose Santos')
    cy.get('#creditCardValidate')
      .should('be.visible')
      .type('22/2024')
    cy.get('#creditCardCVV')
      .should('be.visible')
      .type('12345')
  })
  it('button disabled', () => {
    cy.contains('FINALIZAR O PEDIDO')
      .should('be.visible')
      .and('not.be.disabled')
  })
})