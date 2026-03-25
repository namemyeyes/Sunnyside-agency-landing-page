const menuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-bar nav');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});