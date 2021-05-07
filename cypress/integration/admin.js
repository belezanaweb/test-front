/// <reference types="cypress" />

describe("Admin page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(2500);
  });

  it("Fluxo completo de preenchimento", () => {
    cy.get("[data-testid=button-cart]").click();
    cy.wait(1000);

    cy.get("[data-testid=card]").type("111222333444");
    cy.get("[data-testid=author]").type("Henrique Weiand");
    cy.get("[data-testid=valid]").type("102029");
    cy.get("[data-testid=cvv]").type("321");

    cy.get("[data-testid=button-payment]").click();
    cy.wait(1000);
  });
});
