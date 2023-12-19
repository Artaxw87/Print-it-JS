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

// on selectionne les elements du DOM
let flecheGauche = document.querySelector(".arrow_left");
let flecheDroite = document.querySelector(".arrow_right");

// on selectionne les image
let slideImage = document.querySelector(".banner-img");
console.log(slideImage);

// on selectionne le texte du slide (tagLine)
let slideText = document.querySelector("#banner p");
console.log(slideText);

// on selectionne la source de l'image
let slideImageSource = slideImage.getAttribute("src");

let nombreDeSlides = slides.length;

/* -------------------------------------------------------------------------- */
/*                              Partie Dynamique                              */
/* -------------------------------------------------------------------------- */

// a chaque click du bouton doite, on remplace l'image du slide avec le src de l'image suivante
flecheDroite.addEventListener("click", () => {
  if (
    slideImage.getAttribute("src") === "./assets/images/slideshow/slide1.jpg"
  ) {
    slideImage.setAttribute("src", "./assets/images/slideshow/slide2.jpg");
    slideText.textContent =
      "Tirages haute deffinition grand format pour vos bureaux et events";
  } else if (
    slideImage.getAttribute("src") === "./assets/images/slideshow/slide2.jpg"
  ) {
    slideImage.setAttribute("src", "./assets/images/slideshow/slide3.jpg");
    slideText.textContent = "Grand choix de couleurs de CMJN aux pantones";
  } else if (
    slideImage.getAttribute("src") === "./assets/images/slideshow/slide3.jpg"
  ) {
    slideImage.setAttribute("src", "./assets/images/slideshow/slide4.png");
    slideText.textContent = "Autocollants avec serrure laser sur mesure";
  } else if (
    slideImage.getAttribute("src") === "./assets/images/slideshow/slide4.png"
  ) {
    slideImage.setAttribute("src", "./assets/images/slideshow/slide1.jpg");
    slideText.textContent = "Impressions tous formats en Wales et en ligne";
  }
});

// a chaque click du bouton gauche, on fait pareille que le click du bouton droite mais en inversant la source
flecheGauche.addEventListener("click", () => {
  if (
    slideImage.getAttribute("src") === "./assets/images/slideshow/slide1.jpg"
  ) {
    slideImage.setAttribute("src", "./assets/images/slideshow/slide4.png");
    slideText.textContent = "Autocollants avec serrure laser sur mesure";
  } else if (
    slideImage.getAttribute("src") === "./assets/images/slideshow/slide2.jpg"
  ) {
    slideImage.setAttribute("src", "./assets/images/slideshow/slide1.jpg");
    slideText.textContent = "Impressions tous formats en Wales et en ligne";
  } else if (
    slideImage.getAttribute("src") === "./assets/images/slideshow/slide3.jpg"
  ) {
    slideImage.setAttribute("src", "./assets/images/slideshow/slide2.jpg");
    slideText.textContent =
      "Tirages haute deffinition grand format pour vos bureaux et events";
  } else if (
    slideImage.getAttribute("src") === "./assets/images/slideshow/slide4.png"
  ) {
    slideImage.setAttribute("src", "./assets/images/slideshow/slide3.jpg");
  }
});

// ajoute d'un pointer sur les fleches de navigation
flecheGauche.style.cursor = "pointer";
flecheDroite.style.cursor = "pointer";

// boucle qui parcourt le tableau slides et ajoute autant de dots que de slides
for (let compte = 0; compte < slides.length; compte++) {
  const ajoutDot = slides[compte];
  const dot = document.createElement("div");
  dot.classList.add("dot");
  document.querySelector(".dots").appendChild(dot);
}

// on ajoute une classe dot_selected au premier dot
const firstDot = document.querySelector(".dot");
firstDot.classList.add("dot_selected");
