const navMenu = document.querySelector("nav");

const navBtn = document
 .querySelector(".nav-menu")
 .addEventListener("click", () => {
  navMenu.classList.toggle("nav-open");
 });
