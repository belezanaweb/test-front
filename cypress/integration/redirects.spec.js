context('Redirects', () => {
  context('direct redirect to /checkout/cart', () => {
    const origins = ['/', '/checkout', '/checkout/payment', '/checkout/confirmation']
    origins.forEach(origin => {
      it(`should be redirected from ${origin}`, () => {
        cy.visit(origin)
          .location('pathname')
          .should('eq', '/checkout/cart')
      })
    })
  })
})
