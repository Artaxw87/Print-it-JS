const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// let boutons = document.getElementsByClassName("arrow_left").addEventListener("click");

// let btn = document.getElementById("btn-left").addEventListener("click");

// console.log(btn);

// document.getElementById("arrow_left").addEventListener("click", function () {
//   alert("Hello World!");
// });

// document.getElementById("arrow_right").addEventListener("click", function () {
//   console.log("HAHAH");
// });

document.getElementById("arrow_left").addEventListener("click", myFunction);

function myFunction() {
  console.log("Gauche");
}

document.getElementById("arrow_right").addEventListener("click", btnRight);

function myFunction() {
  console.log("Droite");
}
