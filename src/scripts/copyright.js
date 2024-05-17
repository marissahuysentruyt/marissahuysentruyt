const copyright = document.querySelector('.js-copyright');

export const createCopyRight = (copyrightSymbol, yearStarted, copyrightYear) => `${copyrightSymbol} ${yearStarted}-${copyrightYear} Marissa Huysentruyt.`;

if (copyright) {
  const copyrightSymbol = '©';
  const yearStarted = 2021;
  const copyrightYear = new Date().getFullYear();

  copyright.innerText = createCopyRight(copyrightSymbol, yearStarted, copyrightYear);
}
