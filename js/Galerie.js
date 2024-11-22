// Événement pour ouvrir la boîte de dialogue de téléchargement lorsqu'on clique sur l'icône
document.getElementById("galerie-app").addEventListener("click", () => {
  document.getElementById("file-input").click(); // Ouvre la boîte de dialogue pour sélectionner une image
});

// Optionnel : soumettre automatiquement le formulaire après sélection d'un fichier
document.getElementById("file-input").addEventListener("change", () => {
  if (document.getElementById("file-input").files.length > 0) {
    document.getElementById("upload-form").submit(); // Envoie le formulaire automatiquement après sélection
  }
});
