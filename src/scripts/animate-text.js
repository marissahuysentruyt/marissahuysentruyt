// animate text/typewriter
var typeText = function(elem, toRotate, period) {
  this.toRotate = toRotate;
  this.elem = elem;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

// cursor
typeText.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if(this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
}

this.elem.innerHTML = '<span class="wrap">' + this.txt + '</span>';

var that = this;
var delta = 200 - Math.random() * 100;

if(this.isDeleting) {
  delta /= 2;
}

if(!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
} else if(this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
}

setTimeout(function() {
  that.tick();
}, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewriter');
  for(var i = 0; i< elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');

  if(toRotate) {
      new typeText(elements[i], JSON.parse(toRotate), period);
  }
};
};


var css = document.createElement("style");
css.type= "text/css";
css.innerHTML = ".typewriter > .wrap {border-right: 0.06em solid rgba(255, 255, 255, 0.24);}";
document.body.appendChild(css);
