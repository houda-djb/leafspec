/**
 * ================================================
 * LEAFSPEC - Dark Mode v1.0
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

const DARKMODE_KEY = 'leafspec_theme';

function getPreferredTheme() {
    const saved = localStorage.getItem(DARKMODE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(DARKMODE_KEY, theme);
    document.querySelectorAll('.darkmode-toggle').forEach(btn => {
        btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        btn.title = theme === 'dark' ? 'Light mode' : 'Dark mode';
    });
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(DARKMODE_KEY)) applyTheme(e.matches ? 'dark' : 'light');
});

applyTheme(getPreferredTheme());
window.toggleTheme = toggleTheme;