var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.3,
  delay: 0.5,
});
tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow <= 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = 100;
      }
    }, 21);
  },
});

tl.to(".blink h2", {
    opacity: 0,
    duaration: 2,
    animationName: "anime",
    duaration: 0.2,
  });

tl.to("#loader", {
  opacity: 0,
  delay: 4,
  duration: 0.2,
  stagger:0.1,
});
tl.from("#page1", {
  opacity: 0,
  y: 1600,
  delay: 0.2,
  duration: 0.5,
  ease: Power4,
});

tl.to("loader", {
  display: "none",
});
