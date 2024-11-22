const correctCode = "1307";
let enteredCode = "";

document.getElementById("start-logo").addEventListener("click", function () {
  document.getElementById("screensaver").style.display = "flex";
  document.getElementById("keypad").style.display = "block";
  enteredCode = "";
  document.getElementById("code-display").textContent = "";
});

document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", function () {
    const value = this.textContent;
    if (value === "C") {
      enteredCode = "";
      document.getElementById("code-display").textContent = "";
    } else {
      enteredCode += value;
      document.getElementById("code-display").textContent = "*".repeat(
        enteredCode.length
      );

      if (enteredCode === correctCode) {
        document.getElementById("screensaver").style.display = "none";
        document.getElementById("keypad").style.display = "none";
      }
    }
  });
});

document.getElementById("screensaver").addEventListener("click", function (e) {
  if (e.target.id === "screensaver") {
    alert("Entrez le code d'accès pour désactiver l'écran de veille.");
  }
});
