describe('Cart', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should url path', () => {
    cy.url().should('include', '/cart');
  });

  it('should loading exist & get request', () => {
    cy.get('[data-cy=loading]').should('exist');
    cy.request('https://www.mocky.io/v2/5b15c4923100004a006f3c07');
  });

  it('should header exist & steps too', () => {
    cy.get('[data-cy=header]').should('exist');
    cy.get('[data-cy=textCart]').should('exist');
    cy.get('[data-cy=textPayment]').should('exist');
    cy.get('[data-cy=textSuccess]').should('exist');

    cy.get('[data-cy=textCart] > div').should(
      'have.css',
      'color',
      'rgb(255, 120, 0)'
    );
  });

  it('should products exist', () => {
    cy.get('[data-cy=products]').should('exist');
    cy.get('[data-cy=products]').should('have.length', 3);
  });

  it('should checkout exist', () => {
    cy.get('[data-cy=checkout]').should('exist');
  });

  it('should button exist & enabled', () => {
    cy.get('[data-cy=buttonCart]').should('exist');
    cy.get('[data-cy=buttonCart]  > button').should('be.enabled');
    cy.get('[data-cy=buttonCart]').click();
  });
});
