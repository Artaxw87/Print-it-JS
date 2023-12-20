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
// ajout d'un pointer sur les fleches de navigation
flecheGauche.style.cursor = "pointer";
flecheDroite.style.cursor = "pointer";

/* -------------------------------------------------------------------------- */
/*                              Partie Dynamique                              */
/* -------------------------------------------------------------------------- */

// boucle qui parcourt le tableau slides et ajoute autant de dots que de slides
for (let compte = 0; compte < slides.length; compte++) {
  const ajoutDot = slides[compte];
  const dot = document.createElement("div");
  dot.classList.add("dot");
  document.querySelector(".dots").appendChild(dot);
}

/* -------------------------------------------------------------------------- */
/*                                      d                                     */
/* -------------------------------------------------------------------------- */

// ajoute une classe dot_selected au premier dot
const firstDot = document.querySelector(".dot");
firstDot.classList.add("dot_selected");

// boucle qui a chaque click du bouton droit, on ajoute la classe dot_selected à la classe "dot" suivante et on supprime le précédent, et ainsi de suite
flecheDroite.addEventListener("click", () => {
  const dots = document.querySelectorAll(".dot");
  const selectedDot = document.querySelector(".dot_selected");

  // Si aucun dot n'a la classe dot_selected, on l'ajoute au premier dot
  if (!selectedDot) {
    dots[0].classList.add("dot_selected");
    return;
  }

  // On trouve l'index du dot sélectionné
  const selectedIndex = Array.from(dots).indexOf(selectedDot);

  // On supprime la classe dot_selected du dot actuel
  selectedDot.classList.remove("dot_selected");

  // On ajoute la classe dot_selected au dot suivant, ou au premier dot si on est à la fin du tableau
  const nextIndex = (selectedIndex + 1) % dots.length;
  dots[nextIndex].classList.add("dot_selected");
});

// boucle qui a chaque click du bouton gauche, on fait exactement la meme chose que le bouton droit mais inversement
flecheGauche.addEventListener("click", () => {
  const dots = document.querySelectorAll(".dot");
  const selectedDot = document.querySelector(".dot_selected");

  // Si aucun dot n'a la classe dot_selected, on l'ajoute au dernier dot
  if (!selectedDot) {
    dots[dots.length - 1].classList.add("dot_selected");
    return;
  }

  // On trouve l'index du dot sélectionné
  const selectedIndex = Array.from(dots).indexOf(selectedDot);

  // On supprime la classe dot_selected du dot actuel
  selectedDot.classList.remove("dot_selected");

  // On ajoute la classe dot_selected au dot précédent, ou au dernier dot si on est au début du tableau
  const prevIndex = (selectedIndex - 1 + dots.length) % dots.length;
  dots[prevIndex].classList.add("dot_selected");
});

// boucle qui a chaque click du boton droit en incrementant le compteur de slide avec slideIndex++ et on remplace l'image et le tagline du slide en utilsant le tableau slides deja defini
let slideIndex = 0;
flecheDroite.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > nombreDeSlides + 1) {
    slideIndex = 1;
  }
  slideImage.setAttribute(
    "src",
    `./assets/images/slideshow/${slides[slideIndex].image}`
  );
  slideText.innerHTML = slides[slideIndex].tagLine;
  console.log(slideIndex);
});

flecheGauche.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex > nombreDeSlides - 1) {
    slideIndex = 1;
  }
  slideImage.setAttribute(
    "src",
    `./assets/images/slideshow/${slides[slideIndex].image}`
  );
  slideText.innerHTML = slides[slideIndex].tagLine;
  console.log(slideIndex);
});
