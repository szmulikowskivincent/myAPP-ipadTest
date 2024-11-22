// Cacher le chat à l'ouverture de la page
document.addEventListener("DOMContentLoaded", () => {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.style.display = "none"; // Cache le chat au démarrage
  console.log("Chat masqué à l'ouverture");
});

// Fonction pour afficher/masquer le chat
function toggleChat() {
  const chatWindow = document.getElementById("chat-window");

  if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
    chatWindow.style.display = "block"; // Affiche le chat
    console.log("Chat affiché");
  } else {
    chatWindow.style.display = "none"; // Cache le chat
    console.log("Chat masqué");
  }
}

// Fonction pour envoyer un message
function sendMessage() {
  const input = document.getElementById("chat-message");
  const message = input.value.trim();

  if (message) {
    const chatContent = document.getElementById("chat-content");
    const newMessage = document.createElement("div");
    newMessage.textContent = message;
    newMessage.style.marginBottom = "10px";
    chatContent.appendChild(newMessage);
    input.value = "";
    chatContent.scrollTop = chatContent.scrollHeight;
  }
}
