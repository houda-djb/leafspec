/**
 * ================================================
 * LEAFSPEC - Main Application
 * Navigation & Global Functions
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

/**
 * Mobile Menu Toggle
 */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('navbar__menu--open');
        menuToggle.classList.toggle('navbar__toggle--active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('navbar__menu--open');
        menuToggle.classList.remove('navbar__toggle--active');
    });
});

/**
 * Navbar scroll effect
 */
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
    
    lastScroll = currentScroll;
});

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Console signature
 */
console.log(`
%c╔══════════════════════════════════════╗
║                                      ║
║         🌿 LEAFSPEC 🌿               ║
║                                      ║
║      Urban Tree Archive              ║
║                                      ║
║      Created by: SYLVAH™             ║
║      © 2026 All Rights Reserved      ║
║                                      ║
╚══════════════════════════════════════╝
`, 'color: #2D4A3E; font-weight: bold; font-size: 14px;');

console.log('%cInterested in the code? Contact SYLVAH™', 'color: #8B9D7C; font-size: 12px;');
