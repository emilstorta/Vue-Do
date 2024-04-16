/* ==== Test Created with Cypress Studio ==== */
it('Tilføj ny opgave', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:8080/');
  cy.get('#input').clear('N');
  cy.get('#input').type('Ny opgave');
  cy.get('#butAdd').click();
  cy.get('.item').should('have.value', 'Ny opgave');
  /* ==== End Cypress Studio ==== */
});