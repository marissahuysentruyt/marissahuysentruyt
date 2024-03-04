// TODO: this file animates the "skill bars" on the resume page. it can should
// TODO: get refactored to use functions with parameters instead.

const resume = () => {
  // html animation
  const html = document.getElementById('animate-html');
  const htmlHeight = html.clientHeight;

  function inViewHTML() {
    const windowHTMLHeight = window.innerHeight;
    const scrollHTMLY = window.scrollY || window.pageYOffset;
    // get current scroll position (distance from the top of the page to the bottom of the current
    // viewport)
    const scrollHTMLPosition = scrollHTMLY + windowHTMLHeight;
    // get html position (distance from the top of the page to the bottom of the html)
    const htmlPosition = html.getBoundingClientRect().top + scrollHTMLY + htmlHeight;

    if (scrollHTMLPosition > htmlPosition) {
      return true;
    } return false;
  }

  // animate while in view
  function animateHTML() {
    if (inViewHTML()) {
      html.classList.add('animatehtml');
    }
  }

  document.addEventListener('scroll', animateHTML);

  // css animation
  const css = document.getElementById('animate-css');
  const cssHeight = css.clientHeight;

  function inViewCSS() {
    const windowCSSHeight = window.innerHeight;
    const scrollCSSY = window.scrollY || window.pageYOffset;
    // get current scroll position (distance from the top of the page to the bottom of the current
    // viewport)
    const scrollCSSPosition = scrollCSSY + windowCSSHeight;
    // get html position (distance from the top of the page to the bottom of the html)
    const cssPosition = css.getBoundingClientRect().top + scrollCSSY + cssHeight;

    if (scrollCSSPosition > cssPosition) {
      return true;
    } return false;
  }

  // animate while in view
  function animateCSS() {
    if (inViewCSS()) {
      css.classList.add('animatecss');
    }
  }

  document.addEventListener('scroll', animateCSS);

  // js animation
  const js = document.getElementById('animate-js');
  const jsHeight = js.clientHeight;

  function inViewJS() {
    const windowJSHeight = window.innerHeight;
    const scrollJSY = window.scrollY || window.pageYOffset;
    // get current scroll position (distance from the top of the page to the bottom of the current
    // viewport)
    const scrollJSPosition = scrollJSY + windowJSHeight;
    // get html position (distance from the top of the page to the bottom of the html)
    const jsPosition = js.getBoundingClientRect().top + scrollJSY + jsHeight;

    if (scrollJSPosition > jsPosition) {
      return true;
    } return false;
  }

  // animate while in view
  function animateJS() {
    if (inViewJS()) {
      js.classList.add('animatejs');
    }
  }

  document.addEventListener('scroll', animateJS);

  // github animation
  const git = document.getElementById('animate-github');
  const gitHeight = git.clientHeight;

  function inViewGithub() {
    const windowGitHeight = window.innerHeight;
    const scrollGitY = window.scrollY || window.pageYOffset;
    // get current scroll position (distance from the top of the page to the bottom of the current
    // viewport)
    const scrollGitPosition = scrollGitY + windowGitHeight;
    // get html position (distance from the top of the page to the bottom of the html)
    const gitPosition = git.getBoundingClientRect().top + scrollGitY + gitHeight;

    if (scrollGitPosition > gitPosition) {
      return true;
    } return false;
  }

  // animate while in view
  function animateGithub() {
    if (inViewGithub()) {
      git.classList.add('animategithub');
    }
  }

  document.addEventListener('scroll', animateGithub);

  // figma animation
  const figma = document.getElementById('animate-figma');
  const figmaHeight = figma.clientHeight;

  function inViewFigma() {
    const windowFigmaHeight = window.innerHeight;
    const scrollFigmaY = window.scrollY || window.pageYOffset;
    // get current scroll position (distance from the top of the page to the bottom of the current
    // viewport)
    const scrollFigmaPosition = scrollFigmaY + windowFigmaHeight;
    // get html position (distance from the top of the page to the bottom of the html)
    const figmaPosition = figma.getBoundingClientRect().top + scrollFigmaY + figmaHeight;

    if (scrollFigmaPosition > figmaPosition) {
      return true;
    } return false;
  }

  // animate while in view
  function animateFigma() {
    if (inViewFigma()) {
      figma.classList.add('animatefigma');
    }
  }

  document.addEventListener('scroll', animateFigma);
};

// make sure to only run this on the resume page
if (window.location.pathname.includes('resume')) {
  resume();
}
