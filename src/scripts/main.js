import 'remixicon/fonts/remixicon.css'

const menuCheckbox = document.getElementById('menu');
const menuLabel = document.querySelector('.menu-label');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleMenu() {

    if (menuCheckbox.checked) {
        menuLabel.classList.add('ri-close-line');
        menuLabel.classList.remove('ri-menu-line');
        mobileMenu.classList.remove('hidden');
    } else {
        menuLabel.classList.add('ri-menu-line');
        menuLabel.classList.remove('ri-close-line');
        mobileMenu.classList.add('hidden');
    }
}

menuLabel.addEventListener('click', toggleMenu);