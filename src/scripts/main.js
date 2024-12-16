import 'remixicon/fonts/remixicon.css'

const menuCheckbox = document.getElementById('menu');
const menuLabel = document.querySelector('.menu-label');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLines = document.querySelectorAll('.menu-line');

function toggleMenu() {

    if (menuCheckbox.checked) {
        menuLines[0].style.transform = 'rotate(55deg) translateX(5px) ';
        menuLines[1].style.transform = 'rotate(-55deg) translateX(5px) ';
        mobileMenu.classList.remove('hidden');
    } else {
        menuLines[0].style.transform = '';
        menuLines[1].style.transform = '';
        mobileMenu.classList.add('hidden');
    }
}

menuLabel.addEventListener('click', toggleMenu);