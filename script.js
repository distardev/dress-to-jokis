const categories = ["shirt", "pants", "hair", "eyes"];
const maxOptions = {
  shirt: 4,
  pants: 4,
  hair: 4,
  eyes: 3
};

let currentCategory = "shirt";
let currentIndexes = {
  shirt: 1,
  pants: 1,
  hair: 1,
  eyes: 1
};

// Selecciona el botón de categoría actual
document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
    currentCategory = button.dataset.category;
  });
});

// Función para cambiar sprite hacia una dirección
function changeSprite(direction) {
  let index = currentIndexes[currentCategory];
  const max = maxOptions[currentCategory];

  if (direction === "left") {
    index = index > 1 ? index - 1 : max;
  } else {
    index = index < max ? index + 1 : 1;
  }

  currentIndexes[currentCategory] = index;

  const imgElement = document.querySelector(`.${currentCategory}-layer`);
  imgElement.src = `assets/${currentCategory}/${currentCategory}${index}.png`;
}

// Función para cambiar el fondo
function changeBackground() {
  const backgrounds = ["bg2.png", "bg3.png", "bg4.png", "bg1.png"];
  const bgElement = document.querySelector(".customizer");
  let currentBgIndex = backgrounds.indexOf(bgElement.dataset.currentBg) || 0;

  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
  bgElement.dataset.currentBg = backgrounds[currentBgIndex];
  bgElement.style.backgroundImage = `url('assets/backgrounds/${backgrounds[currentBgIndex]}')`;
}

// Eventos para flechas
document.querySelector(".nav-button.left").addEventListener("click", () => changeSprite("left"));
document.querySelector(".nav-button.right").addEventListener("click", () => changeSprite("right"));

document.querySelector(".nav-button.bgchange").addEventListener("click", () => changeBackground());