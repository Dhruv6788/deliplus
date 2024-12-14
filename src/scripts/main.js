import 'remixicon/fonts/remixicon.css'

const menuCheckbox = document.getElementById('menu');
const menuLabel = document.querySelector('.menu-label');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleMenu() {
    menuCheckbox.checked ? mobileMenu.classList.add('h-screen') : mobileMenu.classList.remove('h-screen');
}

menuLabel.addEventListener('click', toggleMenu);