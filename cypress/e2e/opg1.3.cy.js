/* ==== Test Created with Cypress Studio ==== */
it('Ændring af opgave', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:8080/');
  cy.get('#input').clear('N');
  cy.get('#input').type('Ny opgave');
  cy.get('#butAdd').click();
  cy.get('.item').should('have.value', 'Ny opgave');
  cy.get('.fa-edit').click();
  cy.get('.item').clear('Ny opgave');
  cy.get('.item').type('Opgave ændret{enter}');
  cy.get('.item').should('have.value', 'Opgave ændret');
  /* ==== End Cypress Studio ==== */
});