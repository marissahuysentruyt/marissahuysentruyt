/**
 * @jest-environment jsdom
 */

describe('animate-text', () => {
  it('has at least 1 element that has a class of "js-typewriter"', () => {
    const elements = document.getElementsByClassName('js-typewriter');
    expect(elements).not.toBeNull();
  });
});
