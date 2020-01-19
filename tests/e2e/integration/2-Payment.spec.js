describe('Payment', () => {
  it('should url path', () => {
    cy.url().should('include', '/payment');
  });

  it('should header exist & steps too', () => {
    cy.get('[data-cy=header]').should('exist');
    cy.get('[data-cy=textCart]').should('exist');
    cy.get('[data-cy=textPayment]').should('exist');
    cy.get('[data-cy=textSuccess]').should('exist');
    cy.get('[data-cy=textPayment] > div').should(
      'have.css',
      'color',
      'rgb(255, 120, 0)'
    );
  });

  it('should button exist & disabled', () => {
    cy.get('[data-cy=buttonPayment]').should('exist');
    cy.get('[data-cy=buttonPayment]  > button').should('be.disabled');
  });

  it('should credit card exist & fake card', () => {
    cy.get('[data-cy=card]')
      .should('exist')
      .clear()
      .type('0000000000000000');
  });

  it('should credit card exist & incomplete', () => {
    cy.get('[data-cy=card]')
      .clear()
      .type('555555');
  });

  it('should credit card exist & real card', () => {
    cy.get('[data-cy=card]')
      .clear()
      .type('5287115761908655');
  });

  it('should name exist & typing', () => {
    cy.get('[data-cy=name]')
      .should('exist')
      .clear()
      .type('John Doe');
  });

  it('should validity exist & incomplete', () => {
    cy.get('[data-cy=validity]')
      .should('exist')
      .clear()
      .type('111');
  });

  it('should validity complete', () => {
    cy.get('[data-cy=validity]')
      .clear()
      .type('122027');
  });

  it('should ccv exist & incomplete', () => {
    cy.get('[data-cy=ccv]')
      .should('exist')
      .clear()
      .type('11');
  });

  it('should ccv complete', () => {
    cy.get('[data-cy=ccv]')
      .clear()
      .type('404');
  });

  it('should checkout exist', () => {
    cy.get('[data-cy=checkout]').should('exist');
  });

  it('should button enabled', () => {
    cy.get('[data-cy=buttonPayment]  > button').should('be.enabled');
  });

  it('should button click', () => {
    cy.get('[data-cy=buttonPayment]').click();
  });
});
