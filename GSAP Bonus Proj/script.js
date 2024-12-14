// for only one element

// var h1Text = document.querySelector("#firsth1").textContent
// var splitedText=h1Text.split("")
// // console.log(splitedText)
// var clutter="";
// splitedText.forEach(function(elem){
//     // console.log(elem)
//     clutter+=  `<span>${elem}<span/>`
// })
// document.querySelector("#firsth1").innerHTML=clutter

// for all

var allH1 = document.querySelectorAll("#page2 h1");
allH1.forEach(function (elem) {
  var clutter = ""
  var h1Text = elem.textContent
  var splitedText = h1Text.split("")
  // console.log(splitedText)
  splitedText.forEach(function (e) {
    // console.log(elem)
    clutter += `<span>${e}<span/>`;
  })
  elem.innerHTML = clutter
})
gsap.to("#page2 h1 span", {
  color: "#e3e3c4",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top -10%",
    scrub: 1,
  }
})
