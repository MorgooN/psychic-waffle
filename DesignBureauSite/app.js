const menu = document.querySelector("#mobile-menu"); // check the id near in navbar section
const menuLinks = document.querySelector(".navbar__menu"); // navbar-menu is a class. Access via '.' (targeting the ul section)
const navbarLogo = document.querySelector("navbar__logo");

// mobile menu display

// toggle effect for a small screens
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// show active menu while scroling

// arrow functions
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const elem1 = document.querySelector("#home-page");
  const elem2 = document.querySelector("#about-page");
  const elem3 = document.querySelector("#services-menu");
  let scrollPos = window.ScrollY

  if(window.innerWidth > 960 && scrollPos < 600)

};
