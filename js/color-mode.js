// Define DOM elements
const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "dark-mode"; // Establecemos el modo oscuro como el predeterminado

// Load the user's preferred color mode from local storage.
function loadColorMode() {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleButton();
}

loadColorMode();

// Toggle the color mode
// Comentado para evitar que el usuario pueda cambiar el modo
// toggleButton.addEventListener("click", () => {
//   saveColorMode();
// });

// Save the user's preferred color mode to local storage
// Comentado ya que no queremos guardar o alternar el modo de color
// function saveColorMode() {
//   const currentMode = root.classList.contains("dark-mode")
//     ? "light-mode"
//     : "dark-mode";
//   root.classList.remove("light-mode", "dark-mode");
//   root.classList.add(currentMode);
//   localStorage.setItem(storageKey, currentMode);
//   updateToggleButton();
// }

function updateToggleButton() {
  // Comentado ya que no se usa en esta versión que he hecho sin cambio de modo, pero lo mantengo por si en un futuro cambio de idea
  // if (root.classList.contains("dark-mode")) {
  //   toggleButton.style.backgroundImage = "var(--moon)";
  // } else {
  //   toggleButton.style.backgroundImage = "var(--sun)";
  // }
}
