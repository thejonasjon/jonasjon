'use strict';

const hamburgerMenu = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// Toggle menu on hamburger click
hamburgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle('active');
    hamburgerMenu.classList.toggle('open');

    // Prevent scrolling on menu open
    if (mobileNav.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.hamburger') && !e.target.closest('.mobile-nav')) {
        mobileNav.classList.remove('active');
        hamburgerMenu.classList.remove('open');
        body.style.overflow = 'unset';
    }
});
