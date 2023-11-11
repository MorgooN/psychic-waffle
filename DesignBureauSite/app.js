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
// arrow function
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const elem1 = document.querySelector("#home-page");
  const elem2 = document.querySelector("#about-page");
  const elem3 = document.querySelector("#services-menu");
  let scrollPos = window.ScrollY;

  if (window.innerWidth > 960 && scrollPos < 600) {
    elem1.classList.add("highlight");
    elem2.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    elem2.classList.add("highlight");
    elem1.classList.remove("highlight");
    elem3.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    elem2.classList.remove("highlight");
    elem3.classList.add("highlight");
    return;
  }

  if ((elem && window.length < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("klick", highlightMenu);

const hideMobMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobMenu);
navbarLogo.addEventListener("click", hideMobMenu);
