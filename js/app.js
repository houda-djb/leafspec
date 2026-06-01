/**
 * ================================================
 * LEAFSPEC - Main Application v2.0
 * Initialization, Navigation, Global Functions
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

/** === MOBILE MENU === */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('navbar__menu--open');
        menuToggle.classList.toggle('navbar__toggle--active');
    });
}

document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('navbar__menu--open');
        if (menuToggle) menuToggle.classList.remove('navbar__toggle--active');
    });
});


/** === NAVBAR SCROLL EFFECT === */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.pageYOffset > 50) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
}, { passive: true });


/** === SMOOTH SCROLL === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});


/** === COUNTER ANIMATION (Hero Stats) === */
function animateCounter(el, target, duration = 1200) {
    let start = null;
    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        // Ease out
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
    };
    requestAnimationFrame(step);
}

function initCounters() {
    const counters = document.querySelectorAll('.stat__number[data-target]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}


/** === SCROLL REVEAL === */
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
}


/** === TOLERANCE BAR ANIMATION (in modal) === */
function animateToleranceBars() {
    document.querySelectorAll('.tolerance-bar__fill').forEach(bar => {
        const width = bar.getAttribute('data-width') || '0%';
        setTimeout(() => { bar.style.width = width; }, 100);
    });
}
window.animateToleranceBars = animateToleranceBars;


/** === FAVORITES NAV LINK === */
const favNavLink = document.getElementById('favNavLink');
if (favNavLink) {
    favNavLink.addEventListener('click', (e) => {
        const favSection = document.getElementById('favorites');
        if (!favSection || favSection.style.display === 'none') {
            e.preventDefault();
            if (window.renderFavoritesSection) window.renderFavoritesSection();
            setTimeout(() => {
                const el = document.getElementById('favorites');
                if (el) {
                    const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            }, 50);
        }
    });
}


/** === INITIALIZE === */
function init() {
    initCounters();
    initScrollReveal();

    // Add reveal class to key sections
    document.querySelectorAll('.about__content, .catalog__header').forEach((el, i) => {
        el.classList.add('reveal');
        el.classList.add('reveal-delay-' + (i + 1));
    });
    initScrollReveal();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}


/** === CONSOLE SIGNATURE === */
console.log(
    '%c╔══════════════════════════════════════╗\n║                                      ║\n║         🌿 LEAFSPEC v2.0 🌿           ║\n║                                      ║\n║      Urban Tree Archive              ║\n║      57 Species Documented           ║\n║                                      ║\n║      Created by: SYLVAH™             ║\n║      © 2026 All Rights Reserved      ║\n║                                      ║\n╚══════════════════════════════════════╝',
    'color: #2D4A3E; font-weight: bold; font-size: 13px;'
);