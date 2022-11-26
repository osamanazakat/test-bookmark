// navbar 

const openBtn = document.querySelector('#open-nav');
const closeBtn = document.querySelector('#close-nav');
const navbar = document.querySelector('#navbar__items');
const navbarFull = document.querySelector('.navbar');


openBtn.addEventListener('click', function() {
    navbar.style.display = "flex";
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
    navbarFull.style.background = "hsla(229, 31%, 21%, 0.89)";
})

closeBtn.addEventListener('click', function() {
    navbar.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    navbarFull.style.background = "none";
})