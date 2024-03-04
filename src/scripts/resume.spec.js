/**
 * @jest-environment jsdom
 */

describe('resume', () => {
  it('finds all the skills', () => {
    const techArray = document.querySelectorAll('.js-tech-logo');
    expect(techArray).not.toBeNull();
  });

  // this test is skipped only because it tests the resume.js file,
  // which is currently not in use on the resume page after refactoring
  it.skip('finds all the skills bars', () => {
    const classPrefix = 'animate-';
    const classSuffix = ['html', 'css', 'js', 'github', 'figma'];
    const skillsBars = [];

    for (let i = 0; i < classSuffix.length; i++) {
      const className = classPrefix + classSuffix[i];
      skillsBars.push(className);
    }

    expect(skillsBars.length).toBe(5);
  });
});
