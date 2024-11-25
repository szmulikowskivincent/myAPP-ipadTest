let isRotating = false;

function rotateElements() {
  // Vérifier si une rotation est déjà en cours
  if (isRotating) return;

  // Marquer que la rotation a commencé
  isRotating = true;

  // Désactiver le menu toggle pour empêcher son fonctionnement pendant la rotation
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");

  // Masquer le menu en ajoutant la classe "hidden-while-rotating"
  if (menu) {
    menu.classList.add("hidden-while-rotating");
  }

  // Désactiver l'écouteur d'événement du menu
  if (menuButton) {
    menuButton.removeEventListener("click", toggleMenu);
  }

  // Sélectionner tous les éléments à faire tourner : les icônes et le cover
  const icons = document.querySelectorAll(
    ".app-icon, .contact-icon, .email-icon, .galerie-photo"
  );
  const ipadCover = document.querySelector(".ipad-cover");

  // Masquer les icônes avant la rotation
  icons.forEach((icon) => {
    icon.classList.add("hidden");
  });

  // Appliquer la rotation au cover
  ipadCover.classList.toggle("rotate");

  // Après un petit délai, afficher les icônes avec une transition
  setTimeout(() => {
    icons.forEach((icon) => {
      icon.classList.remove("hidden");
      icon.classList.toggle("rotated");
    });

    // Réafficher le menu après la rotation
    if (menu) {
      menu.classList.remove("hidden-while-rotating");
    }
  }, 50000);

  // Réactiver le menu toggle après la rotation
  setTimeout(() => {
    if (menuButton) {
      menuButton.addEventListener("click", toggleMenu); // Réactiver l'écouteur d'événement du menu
    }
    // Marquer que la rotation est terminée
    isRotating = false;
  }, 0);
}
