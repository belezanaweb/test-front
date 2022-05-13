describe('start in the program and home page', () => {
  beforeEach(() => {
    cy.exec('npm run start')
    
  })

  it('navigating from home page', () => {
    cy.visit('/')
  })

  it('check header text',() =>{
    cy.get('.MuiTypography-root')
    .should('contain', 'SACOLA')
  })

  it('navigating from home page to payments page', () => {
    cy.get('.makeStyles-button-3').click()
    cy.url().should('include', '/pagamento')
  })

  it('navigating notFound', () => {
    cy.visit('/bad-url')
  })
})