var input = document.querySelector("input");
var data = [
  {
    name: "Alina Lopez",
    src: "https://cdni.pornpics.de/460/7/107/98517903/98517903_007_3fe9.jpg",
  },
  {
    name: "Abella Danger",
    src: "https://cdni.pornpics.de/460/7/283/69899483/69899483_065_2cbe.jpg",
  },
  {
    name: "Lena Paul",
    src: "https://cdni.pornpics.de/460/7/221/58736152/58736152_032_c3e9.jpg",
  },
  {
    name: "Lana Rhoades",
    src: "https://cdni.pornpics.de/460/7/543/74436705/74436705_026_f02e.jpg",
  },
  {
    name: "Ava Addams",
    src: "https://cdni.pornpics.de/460/7/542/35353856/35353856_013_add1.jpg",
  },
  {
    name: "Mia khalifa",
    src: "https://cdni.pornpics.de/460/1/59/34076717/34076717_003_d18f.jpg",
  },
  {
    name: "Sunny Leone",
    src: "https://cdni.pornpics.de/460/7/201/25015277/25015277_012_3cb5.jpg",
  },
];

var pers = "";
data.forEach(function (elem) {
  pers += ` <div class="person">
                    <div class="img">

                        <img src="${elem.src}" alt="">

                    </div>
                    <h4>${elem.name}</h4>
                </div>`;
});
document.querySelector(".people").innerHTML = pers;
input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });

  var newusers;

  matching.forEach(function (elem) {
    newusers += ` <div class="person">
                    <div class="img">

                        <img src="${elem.src}" alt="">

                    </div>
                    <h4>${elem.name}</h4>
                </div>`;
  });
  document.querySelector(".people").innerHTML = newusers;
});
