const navbar = document.querySelector("ul");
const hamburgerBar = document.querySelector(".menu-hamburger");

hamburgerBar.addEventListener("click", () => {
    navbar.classList.toggle("links-active")
})

addEventListener("resize", () => {
    navbar.classList.remove("links-active")
})