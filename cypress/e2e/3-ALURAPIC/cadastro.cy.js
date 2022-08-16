/// <reference types="cypress" />
import usuarios from '../../fixtures/usuarios.json'

describe("Cadastro de usuários alura pic", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().frontendUrl);
  });

  it("verifica mensagens validação", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  });

  it("verifica mensagem de e-mail inválido", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="email"]').type("teste");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });

  it("verifica mensagem de senha com menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="password"]').type("teste");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });

  it("verifica mensagem de deve ser minúsculo no campo username", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="userName"]').type("Teste");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });

  usuarios.forEach((usuario) => {
    it(`registra novo usuário ${usuario.fullName}`, () => {
      cy.contains("a", "Register now").click();
      cy.contains("button", "Register").click();
      cy.get('input[formcontrolname="email"]').type(usuario.email);
      cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
      cy.get('input[formcontrolname="userName"]').type(usuario.userName);
      cy.get('input[formcontrolname="password"]').type(usuario.password);
      cy.contains("button", "Register").click();
    });
  });
});
