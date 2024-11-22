function showCover(side) {
  const coverLeft = document.querySelector(".nav-cover.left");
  const coverRight = document.querySelector(".nav-cover.right");

  // Si le bouton gauche est cliqué, affiche le cover gauche
  if (side === "left") {
    coverLeft.style.display = "block";
    // Masque le cover droit si le bouton gauche est cliqué
    coverRight.style.display = "none";
  }
  // Si le bouton droit est cliqué, affiche le cover droit
  if (side === "right") {
    coverRight.style.display = "block";
    // Masque le cover gauche si le bouton droit est cliqué
    coverLeft.style.display = "none";
  }
}
