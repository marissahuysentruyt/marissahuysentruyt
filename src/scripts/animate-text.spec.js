/**
 * @jest-environment jsdom
 */

describe('animate-text', () => {
  it('has at least 1 element that has a class of "typewriter"', () => {
    const elements = document.getElementsByClassName('typewriter');
    expect(elements).not.toBeNull();
  });
});
