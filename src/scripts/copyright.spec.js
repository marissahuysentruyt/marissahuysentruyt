/**
 * @jest-environment jsdom
 */

import { createCopyRight } from './copyright';

describe('copyright.js', () => {
  beforeEach(() => {
    // mocking footer HTML
    document.body.innerHTML = `
      <p class="cmp-footer__copyright js-copyright"></p>
    `;
  });

  // TODO: this probably needs some refactoring. It's not quite identical functionality to
  // TODO: copyright.js. Here we use copyright.innerHTML, but in the JS file, it's
  // TODO: copyright.innerText.
  it('creates the copyright date for the site', () => {
    const copyright = document.querySelector('.js-copyright');
    const copyrightSymbol = '#';
    const yearStarted = 1990;
    const copyrightYear = 1999;

    copyright.innerHTML = createCopyRight(copyrightSymbol, copyrightYear, yearStarted);

    expect(document.body.innerHTML).toContain(copyrightSymbol);
    expect(document.body.innerHTML).toContain(yearStarted.toString());
    expect(document.body.innerHTML).toContain(copyrightYear.toString());
  });
});
