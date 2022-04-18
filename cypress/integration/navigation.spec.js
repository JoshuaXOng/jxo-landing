describe('Navigation from index page.', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-cy=vert-navbar--closed]');
    cy.get('[data-cy=page-tint--deactivated]');
    cy.get('[data-cy=vert-navbar-toggle]').click();
    cy.get('[data-cy=vert-navbar--opened]');
    cy.get('[data-cy=page-tint--activated]');

    cy.get('[data-cy=vert-navbar]').contains('Stage');
    cy.get('[data-cy=vert-navbar]').contains('Users');
    cy.get('[data-cy=vert-navbar]').contains('Calendar');
    cy.get('[data-cy=vert-navbar]').contains('Login');

  });

  it('Navigation works to Stage page.', () => {
    cy.get('[data-cy=vert-navbar]').contains('Stage').click();
  });

  it('Navigation works to Users page.', () => {
    cy.get('[data-cy=vert-navbar]').contains('Users').click();
  });

  it('Navigation works to Calendar page.', () => {
    cy.get('[data-cy=vert-navbar]').contains('Calendar').click();
  });

  it('Navigation works to Login page.', () => {
    cy.get('[data-cy=vert-navbar]').contains('Login').click();
  });

})
