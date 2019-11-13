describe('Bank account', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  });

  it('adds an account', () => {
    cy.get('#account-list li').should('have.length', 0);
    cy.get('#account-name').type('My Savings Maximiser');
    cy.get('#add-account').click();
    cy.get('#account-list li').should('have.length', 1);
    cy.get('#account-list li').contains('My Savings Maximiser');
  })
});
