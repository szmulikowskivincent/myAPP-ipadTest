// Fonction pour afficher/masquer la modale
function toggleBackgroundModal() {
  const modal = document.getElementById("background-modal");
  modal.style.display = modal.style.display === "none" ? "block" : "none";
}

// Fonction pour changer le fond d'écran
function changeBackground(imagePath) {
  const ipadCover = document.querySelector(".ipad-cover");
  ipadCover.style.backgroundImage = `url(${imagePath})`;
  ipadCover.style.backgroundSize = "cover";
  ipadCover.style.backgroundPosition = "center";
  toggleBackgroundModal(); // Ferme la modale après sélection
}
