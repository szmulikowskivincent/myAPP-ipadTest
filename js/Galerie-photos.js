// Obtenez les éléments
const galerieIcon = document.getElementById("galerie-photo-app");
const galerieContainer = document.getElementById("galerie");
const fermerGalerie = document.getElementById("fermer-galerie");

// Afficher la galerie lorsqu'on clique sur l'icône
galerieIcon.addEventListener("click", () => {
  galerieContainer.classList.remove("hidden");
});

// Fermer la galerie lorsqu'on clique sur le bouton de fermeture
fermerGalerie.addEventListener("click", () => {
  galerieContainer.classList.add("hidden");
});

// Fermer la galerie si on clique en dehors du contenu
galerieContainer.addEventListener("click", (e) => {
  if (e.target === galerieContainer) {
    galerieContainer.classList.add("hidden");
  }
});
