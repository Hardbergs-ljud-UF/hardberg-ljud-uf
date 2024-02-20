var menu = document.querySelector(".js-menu");
var nav = document.querySelector(".nav");

menu.addEventListener("click", menuActivate);

function menuActivate() {
    nav.classList.toggle("nav-active");
    menu.classList.toggle("menu-active");
}