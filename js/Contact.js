const contacts = [
  {
    firstName: "Alice",
    lastName: "Dupont",
    phone: "+32 456 78 90 12",
    address: "123 Rue Principale, 1000 Bruxelles",
  },
  {
    firstName: "Bob",
    lastName: "Martin",
    phone: "+33 498 22 33 44",
    address: "45 Avenue des Champs, 75000 Paris",
  },
  {
    firstName: "Clara",
    lastName: "Durand",
    phone: "+33 411 55 66 77",
    address: "78 Boulevard Haussmann, 75008 Paris",
  },
];

// Fonction pour afficher la liste des contacts
function showContactList() {
  const contactList = document.getElementById("contact-list");
  contactList.innerHTML = ""; // Réinitialiser la liste

  contacts.forEach((contact) => {
    const contactCard = document.createElement("div");
    contactCard.className = "contact-card";

    // Avatar avec initiales
    const avatar = document.createElement("div");
    avatar.className = "contact-avatar";
    const initials = `${contact.firstName[0]}${contact.lastName[0]}`;
    avatar.textContent = initials;

    const info = document.createElement("div");
    info.className = "contact-info";

    const name = document.createElement("div");
    name.className = "contact-name";
    name.textContent = `${contact.firstName} ${contact.lastName}`;

    const phone = document.createElement("div");
    phone.className = "contact-phone";
    phone.textContent = `📞 ${contact.phone}`;

    const address = document.createElement("div");
    address.className = "contact-address";
    address.textContent = `📍 ${contact.address}`;

    info.appendChild(name);
    info.appendChild(phone);
    info.appendChild(address);

    contactCard.appendChild(avatar);
    contactCard.appendChild(info);

    contactList.appendChild(contactCard);
  });

  // Afficher la modale
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

// Fonction pour fermer la modale
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Ajouter les événements
document
  .getElementById("contacts-app")
  .addEventListener("click", showContactList);
document.getElementById("close-modal").addEventListener("click", closeModal);
