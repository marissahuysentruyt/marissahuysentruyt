// animate text/typewriter
const TypeText = function initTypeText(elem, toRotate, period) {
  this.toRotate = toRotate;
  this.elem = elem;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

// cursor
TypeText.prototype.tick = function typeTextTick() {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.elem.innerHTML = `<span class="js-wrap">${this.txt}</span>`;

  const that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum += 1;
    delta = 500;
  }

  setTimeout(() => {
    that.tick();
  }, delta);
};

window.onload = function onLoad() {
  const elements = document.getElementsByClassName('js-typewriter');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');

    if (toRotate) {
      // eslint-disable-next-line no-new
      new TypeText(elements[i], JSON.parse(toRotate), period);
    }
  }
};

const css = document.createElement('style');
css.innerHTML = '.js-typewriter > .js-wrap {border-right: 0.06em solid rgba(255, 255, 255, 0.24);}';
document.body.appendChild(css);
