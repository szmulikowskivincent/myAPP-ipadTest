function activerCamera() {
  // Vérifier si l'API getUserMedia est supportée par le navigateur
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Demander l'accès à la caméra
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        // Afficher le flux de la caméra dans l'élément vidéo
        const video = document.getElementById("video");
        video.srcObject = stream;
      })
      .catch(function (error) {
        console.log("Erreur lors de l'accès à la caméra: ", error);
        alert("Impossible d'accéder à la caméra.");
      });
  } else {
    alert("L'API de la caméra n'est pas supportée par votre navigateur.");
  }
}
