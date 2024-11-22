function rotateIcons() {
  // Sélectionner tous les icônes de l'interface
  const icons = document.querySelectorAll(
    ".app-icon, .contact-icon, .email-icon, .galerie-photo"
  );

  // Appliquer une rotation à chaque icône
  icons.forEach((icon) => {
    icon.classList.toggle("rotated"); // Alterne l'état de rotation
  });
}
