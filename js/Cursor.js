/**
 * ================================================
 * LEAFSPEC - Custom Cursor (Desktop Only)
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

function initCursor() {
    // Only on desktop with a real pointer
    if (window.matchMedia('(hover: none)').matches) return;

    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Smooth follower with RAF
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effects on interactive elements
    const hoverTargets = 'a, button, .tree-card, .filter-btn, .sort-select, input, .modal__close';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverTargets)) {
            cursor.classList.add('cursor--hover');
            follower.classList.add('cursor-follower--hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverTargets)) {
            cursor.classList.remove('cursor--hover');
            follower.classList.remove('cursor-follower--hover');
        }
    });

    // Hide on leave, show on enter
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        follower.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        follower.style.opacity = '1';
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursor);
} else {
    initCursor();
}