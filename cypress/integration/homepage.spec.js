describe('Home page test suite.', () => {

    before(() => {
      cy.visit('/');
    });
    
    it('Page does not render blank.', () => {
        cy.get('[data-cy=home-page]').within(() => {
            cy.get('[data-cy=item-summary]').should('have.length.at.least', 1);
        });
    });

    it('Header contains random project button.', () => {
        cy.get('[data-cy=home-page__header]').contains(/^\w*random project\w*$/i);
    });
  
})