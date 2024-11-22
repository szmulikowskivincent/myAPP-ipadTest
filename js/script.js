document.addEventListener("DOMContentLoaded", () => {
  // Sélection des éléments nécessaires
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");
  const ul = document.getElementById("social-links");

  // Retirer les puces de la liste
  if (ul) {
    ul.style.listStyleType = "none";
    ul.style.paddingLeft = "0";
  }

  const apps = {
    "camera-app": () => {
      modalBody.innerHTML = `
        <p>Appareil Photo</p>
        <video id="camera-stream" autoplay playsinline></video>
        <button id="take-photo">Prendre une photo</button>
        <div id="gallery"></div>
      `;

      const video = document.getElementById("camera-stream");
      const constraints = { video: true };

      // Accès à la caméra
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((err) => {
          console.error("Erreur d'accès à la caméra :", err);
          modalBody.innerHTML = `<p>Erreur : Impossible d'accéder à la caméra.</p>`;
        });

      document.getElementById("take-photo").addEventListener("click", () => {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const photoData = canvas.toDataURL("image/png");

        // Afficher l'image capturée dans la galerie
        const gallery = document.getElementById("gallery");
        const img = document.createElement("img");
        img.src = photoData;
        img.style.width = "100px"; // Taille de l'image miniature
        img.style.margin = "10px";
        gallery.appendChild(img);

        // Fonction pour sauvegarder les photos dans un fichier JSON
        function savePhotoToGallery(photoData) {
          fetch("http://localhost:3000/api/save-photo", {
            // Mise à jour de l'URL pour correspondre à l'API
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ photoData }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Photo sauvegardée :", data);
            })
            .catch((error) => {
              console.error("Erreur lors de l'envoi de la photo :", error);
            });
        }

        // Appel de la fonction pour sauvegarder la photo
        savePhotoToGallery(photoData);
      });
    },

    "contacts-app": () => {
      modalBody.innerHTML = `
        <p>Contacts</p>
        <ul id="contact-list"></ul>
        <button id="add-contact">Ajouter un contact</button>
      `;
      document.getElementById("add-contact").addEventListener("click", () => {
        const name = prompt("Nom du contact:");
        if (name) {
          const contactList = document.getElementById("contact-list");
          const contact = document.createElement("li");
          contact.textContent = name;
          contactList.appendChild(contact);
        }
      });
    },

    "call-app": () => {
      modalBody.innerHTML = `
        <p>Appels</p>
        <p>Appel manqué de "Maman"</p>
        <button id="call-back">Rappeler</button>
      `;
      document.getElementById("call-back").addEventListener("click", () => {
        alert("Appel en cours...");
      });
    },

    "sms-app": () => {
      modalBody.innerHTML = `
        <p>SMS</p>
        <p>Nouveau SMS: "Bonjour, ça va ?"</p>
        <button id="read-sms">Lire</button>
      `;
      document.getElementById("read-sms").addEventListener("click", () => {
        alert("Bonjour, ça va ?");
      });
    },

    "socials-app": () => {
      modalBody.innerHTML = `
        <p>Réseaux Sociaux</p>
        <ul>
          <a style="text-decoration: none;" href="https://youtube.com" target="_blank">▶️ YouTube</a>
          <br />
          <a style="text-decoration: none;" href="https://instagram.com" target="_blank">🔗 Instagram</a>
          <br />
          <a style="text-decoration: none;" href="https://linkedin.com" target="_blank">🌐 LinkedIn</a>
        </ul>
      `;
    },
  };

  // Gestion des clics sur les icônes d'applications
  document.querySelectorAll(".app-icon").forEach((icon) => {
    icon.addEventListener("click", () => {
      const appId = icon.id;
      if (apps[appId]) {
        apps[appId]();
        modal.classList.remove("hidden");
      }
    });
  });

  // Fermeture du modal lorsqu'on clique sur la croix
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }
});
