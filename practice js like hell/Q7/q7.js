var prg = document.querySelector("#Progress");
var h3 = document.querySelector("h3");
var count = 0;

var int = setInterval(function () {
  count++;
  if (count === 100) {
    clearInterval(int);
    h3.style.opacity = 1;
  }
  prg.style.width = count + "%";
}, 50);
