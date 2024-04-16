/* ==== Test Created with Cypress Studio ==== */
it('Fjern opgave', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:8080/');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('#input').clear('N');
  cy.get('#input').type('Fjerne denne opgave');
  cy.get('#butAdd').click();
  cy.get('.fa-trash').click();
  /* ==== End Cypress Studio ==== */
});