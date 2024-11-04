import projet from "./projets.js";
import createProjet from "./createProjet.js";

const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const menuItems = menu.querySelectorAll('a');
const PROJETS = document.querySelector(".projets-grid");

// Fonction pour gérer l'affichage du menu
menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Fonction pour fermer le menu si on clique en dehors de celui-ci
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
    menu.classList.remove('active');
  }
});

// Fermer le menu après sélection d'un élément sur petits écrans
// biome-ignore lint/complexity/noForEach: <explanation>
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      menu.classList.remove('active');
    }
  });
});

function displayProjects() {
  PROJETS.innerHTML = ''; // Vide le contenu existant
  projet.forEach(projetItem => {
    PROJETS.innerHTML += createProjet(projetItem);
  });
}

displayProjects();