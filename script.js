const navMenu = document.querySelector("nav");
const navClose = document.querySelector(".nav-close");
const navBtn = document.querySelector(".nav-menu");

const toggleNav = () => {
 navMenu.classList.toggle("nav-open");
};
const closeNavOnResize = () => {
 navMenu.classList.remove("nav-open");
};
navBtn.addEventListener("click", toggleNav);
window.addEventListener("resize", closeNavOnResize);
