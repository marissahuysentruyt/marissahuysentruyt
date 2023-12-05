describe('animates the welcome messages', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('visits the homepage', () => {
    cy.get('.cmp-homepage-hero__heading').contains('Welcome to my portfolio. I\'m an educator turned Front End Developer.');
  });
  it('has an h2 with the class of typewriter and a data-type attribute', () => {
    cy.get('.js-typewriter').should('have.attr', 'data-type');
  });
  // TODO: this test may need to change once animate-text.js gets refactored
  it('cycles through multiple data-type values', () => {
    cy.get('.js-wrap').should('have.text', '');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get('.js-wrap').should('not.have.text', '');
  });
});
