context('Basic Flow', () => {
  beforeEach(() => {
    cy.fixture('credit-card').as('cc')
  })

  it('should pass', () => {
    cy.visit('/checkout/cart')
    cy.location('pathname').should('eq', '/checkout/cart')

    // clicking on button should go to payment
    cy.get('[data-testid="button-next"]').click()
    cy.location('pathname').should('eq', '/checkout/payment')

    // form
    cy.get('[data-testid="button-next"]').should('be.disabled')
    cy.get('@cc').then(({ name, number, exp, cvc }) => {
      cy.get('[data-testid="field-number"]').type(number)
      cy.get('[data-testid="field-name"]').type(name)
      cy.get('[data-testid="field-exp"]').type(exp)
      cy.get('[data-testid="field-cvc"]').type(cvc)
    })
    cy.get('[data-testid="button-next"]').should('be.not.disabled')

    // clicking on button should go to confirmation
    cy.get('[data-testid="button-next"]').click()
    cy.location('pathname').should('eq', '/checkout/confirmation')
  })
})
