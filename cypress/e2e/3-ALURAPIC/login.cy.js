/// <reference types="cypress" />

describe("Login de usuários alura pic", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().frontendUrl);
  });

  it("fazer login de usuario valido", () => {
    cy.login("flavio", "123");
    cy.contains("a", "(Logout)").should("be.visible");
  });

  it("fazer login de usuario invalido", () => {
    cy.login("jacqueline", "1234");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
});
