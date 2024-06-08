/* -------------------------------------------------------------------------- */
/*                             tableau des slides                             */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                          Declaration des variables                         */
/* -------------------------------------------------------------------------- */

// on selectionne les fleches qui permettent de naviguer
let flecheGauche = document.querySelector(".arrow_left");
let flecheDroite = document.querySelector(".arrow_right");

// on selectionne les image
let slideImage = document.querySelector(".banner-img");

// on selectionne le texte du slide (tagLine)
let slideText = document.querySelector("#banner p");

// on selectionne la source de l'image
let slideImageSource = slideImage.getAttribute("src");

// on selectionne le nombre de slides
let nombreDeSlides = slides.length;

// on initialise la variable slideIndex a 0 pour commencer par la premiere slide
let slideIndex = 0;
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

// ajoute une classe dot_selected au premier dot (par default)
const firstDot = document.querySelector(".dot");
firstDot.classList.add("dot_selected");

// Met à jour l'état des dots en fonction de l'indice de la diapositive (utilisation d'une fonction pour pouvoir la réutiliser plus tard...)
function updateDots() {
  // Sélectionne tous les éléments avec la classe "dot"
  const dots = document.querySelectorAll(".dot");

  // Parcourt chaque dot et ajoute ou supprime la classe "dot_selected" en fonction de l'indice de la diapositive
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === slideIndex);
  });
}

/* -------------------------------------------------------------------------- */
/*                             Gestion des slides                             */
/* -------------------------------------------------------------------------- */

// gestion des clic pour la flèche droite
flecheDroite.addEventListener("click", () => {
  // incrémente l'indice de la diapositive
  slideIndex++;
  // si l'indice atteint le nombre total de diapositives, réinitialise à zéro
  if (slideIndex === nombreDeSlides) {
    slideIndex = 0;
  }
  // met à jour l'affichage de la diapositive
  console.log(slideIndex);
  updateSlide();
});

// gestions des clic pour la flèche gauche
flecheGauche.addEventListener("click", () => {
  // décrémente l'indice de la diapositive
  slideIndex--;
  // si l'indice devient négatif, réinitialise à l'indice de la dernière diapositive
  if (slideIndex < 0) {
    slideIndex = nombreDeSlides - 1;
  }
  // met à jour l'affichage de la diapositive
  console.log(slideIndex);
  updateSlide();
});

// Fonction pour mettre à jour l'affichage de la slide actuelle
function updateSlide() {
  slideImage.setAttribute(
    "src",
    `./assets/images/slideshow/${slides[slideIndex].image}`
  );
  slideText.innerHTML = slides[slideIndex].tagLine;
  updateDots();
}
