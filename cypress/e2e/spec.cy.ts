describe('My First Test', () => {
  it('visit form', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });
  it('visit about', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
  });
  it('visit home', () => {
    cy.visit('/');
    cy.contains('Home').click();
    cy.url().should('include', '/');
  });
});
