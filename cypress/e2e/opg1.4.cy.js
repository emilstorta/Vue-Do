describe('Task completion status', () => {
  it('checks if the p element contains "Completed 0 of 1 tasks"', () => {
    // Visit the webpage where your element exists
    cy.visit('http://localhost:8080/');

    cy.get('#butAdd').click();

    // Use cy.contains() to find the p element containing the desired text
    cy.contains('p', 'Completed 0 of 0 tasks').should('exist');
  });
});