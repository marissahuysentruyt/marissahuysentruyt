describe('animates the welcome messages', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('visits the homepage', () => {
    cy.get('h1').should('have.text', "Welcome to my portfolio. I'm an educator turned Front End Developer.");
  });
  it('has an h2 with the class of typewriter and a data-type attribute', () => {
    cy.get('.typewriter').should('have.attr', 'data-type');
  });
  it('cycles through multiple data-type values', () => {
    cy.get('.wrap').should('have.text', '');
    cy.wait(2000);
    cy.get('.wrap').should('not.have.text', '');
  });
});
