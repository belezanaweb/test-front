describe('Success', () => {
  it('should url path', () => {
    cy.url().should('include', '/success');
  });

  it('should header exist & steps too', () => {
    cy.get('[data-cy=header]').should('exist');
    cy.get('[data-cy=textCart]').should('exist');
    cy.get('[data-cy=textPayment]').should('exist');
    cy.get('[data-cy=textSuccess]').should('exist');
    cy.get('[data-cy=textSuccess] > div').should(
      'have.css',
      'color',
      'rgb(255, 120, 0)'
    );
  });

  it('should success message exist and match', () => {
    cy.get('[data-cy=successMessage]').should('exist');
  });

  it('should payment info exist', () => {
    cy.get('[data-cy=successCard]')
      .should('exist')
      .contains('8655');

    cy.get('[data-cy=successName]')
      .should('exist')
      .contains('John Doe');

    cy.get('[data-cy=successValidity]')
      .should('exist')
      .contains('12/2027');
  });

  it('should products exist', () => {
    cy.get('[data-cy=products]').should('exist');
    cy.get('[data-cy=products]').should('have.length', 3);
  });

  it('should checkout exist', () => {
    cy.get('[data-cy=checkout]').should('exist');
  });
});
