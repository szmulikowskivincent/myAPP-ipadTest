// Fonction pour afficher ou masquer le modal des SMS
function toggleSmsModal() {
  const smsCover = document.getElementById("sms-cover");

  // Basculer entre "block" et "none"
  if (smsCover.style.display === "none" || smsCover.style.display === "") {
    smsCover.style.display = "flex";
  } else {
    smsCover.style.display = "none";
  }

  // Exemple de génération d'initiales
  document.querySelectorAll(".sms-item").forEach((item) => {
    const name = item.querySelector(".contact-name").innerText; // Récupère le nom
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join(""); // Génère les initiales
    item.querySelector(".contact-avatar-initial").innerText = initials; // Définit les initiales
  });
}
