describe('resume', () => {
  beforeEach('', () => {
    cy.visit('/resume/resume');
  });
  it('loads a grid of tech logos', () => {
    cy.get('.cmp-resume-page__tech-logo')
      .should('be.visible')
      .should('have.length.gt', 0);
  });
});
