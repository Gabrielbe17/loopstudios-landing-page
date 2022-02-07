
const menu = document.getElementById('nav-links');
const menuItems = document.getElementsByClassName('menuItem');
const hamburger= document.getElementById('hamburger-menu');
const closeIcon= document.getElementById('close-icon');
const menuIcon = document.getElementById('menuIcon');

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);


  