const menu__icon = document.querySelector(".menu_icon");
const mobile__menu = document.querySelector(".mobile__menu");

const displayMobileMenu = () => {
    mobile__menu.classList.toggle("hidden");
};

menu__icon.addEventListener("click",displayMobileMenu);