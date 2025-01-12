'use strict';

const hamburgerMenu = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

// Toggle menu on hamburger click
hamburgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle('active');
    hamburgerMenu.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.hamburger') && !e.target.closest('.hamburger svg')) {
        mobileNav.classList.remove('active');
        hamburgerMenu.classList.remove('open');
    }
});
