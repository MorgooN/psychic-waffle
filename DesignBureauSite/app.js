const menu = document.querySelector("#mobile-menu"); // check the id near in navbar section
const menuLinks = document.querySelector(".navbar__menu"); // navbar-menu is a class. Access via '.' (targeting the ul section)

// mobile menu display

// toggle effect for a small screens
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);
