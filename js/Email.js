const emails = [
  {
    address: "john.doe@example.com",
    subject: "Projet en cours",
    content: "Bonjour, voici les détails du projet que vous avez demandé.",
  },
  {
    address: "alice.brown@example.com",
    subject: "Invitation à une réunion",
    content: "Veuillez rejoindre la réunion demain à 14h.",
  },
  {
    address: "charlie.white@example.com",
    subject: "Nouvelle offre",
    content: "Découvrez nos dernières promotions sur notre site.",
  },
];

// Fonction pour générer l'avatar basé sur l'email
function generateAvatar(email) {
  // Extraire le nom complet de l'adresse email
  const name = email.split("@")[0]; // Prendre la partie avant le '@'
  const nameParts = name.split("."); // Séparer par le point (si présent)

  // Prendre les premières lettres du prénom et du nom de famille
  const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase() || "";
  const lastNameInitial = nameParts[1]?.charAt(0).toUpperCase() || "";

  // Retourner l'avatar (initiales)
  return firstNameInitial + lastNameInitial;
}

// Fonction pour afficher la modale avec la liste des emails
function showEmailModal() {
  const modal = document.getElementById("email-modal");
  const emailList = document.getElementById("email-list");

  // Réinitialiser la liste
  emailList.innerHTML = "";

  // Générer les éléments HTML pour chaque email
  emails.forEach((email) => {
    // Générer l'avatar
    const avatar = generateAvatar(email.address);

    const emailItem = document.createElement("div");
    emailItem.classList.add("email-item");

    // Structure d'un email
    emailItem.innerHTML = `
        <div class="email-avatar">${avatar}</div>
        <div class="email-details">
          <strong>${email.subject}</strong><br />
          <span>${email.address}</span><br />
          <p>${email.content}</p>
        </div>
      `;

    // Ajouter l'élément à la liste
    emailList.appendChild(emailItem);
  });

  // Afficher la modale
  modal.style.display = "block";
}

// Fonction pour fermer la modale
function closeEmailModal() {
  const modal = document.getElementById("email-modal");
  modal.style.display = "none";
}
