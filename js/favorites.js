/**
 * ================================================
 * LEAFSPEC - Favorites System
 * Persistent bookmarking via localStorage
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

const FAVORITES_KEY = 'leafspec_favorites';

/** Get all favorite IDs from localStorage */
function getFavorites() {
    try {
        const stored = localStorage.getItem(FAVORITES_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

/** Check if a tree is favorited */
function isFavorite(treeId) {
    return getFavorites().includes(treeId);
}

/** Toggle favorite status */
function toggleFavorite(treeId) {
    let favs = getFavorites();
    const index = favs.indexOf(treeId);
    if (index === -1) {
        favs.push(treeId);
        showToast(`Added to favorites ♥`);
    } else {
        favs.splice(index, 1);
        showToast(`Removed from favorites`);
    }
    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    } catch {}
    updateFavBadge();
    renderFavoritesSection();
    // Re-sync all fav buttons in the catalog
    syncFavButtons();
}

/** Sync all fav buttons in the current catalog grid */
function syncFavButtons() {
    document.querySelectorAll('.tree-card__fav-btn').forEach(btn => {
        const id = parseInt(btn.getAttribute('data-tree-id'));
        if (!id) return;
        const fav = isFavorite(id);
        btn.textContent = fav ? '♥' : '♡';
        btn.className = fav ? 'tree-card__fav-btn is-favorite' : 'tree-card__fav-btn';
        btn.setAttribute('aria-label', fav ? 'Remove from favorites' : 'Add to favorites');
    });
}

/** Update the nav badge count */
function updateFavBadge() {
    const badge = document.getElementById('favCountBadge');
    if (!badge) return;
    const count = getFavorites().length;
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

/** Render the favorites section */
function renderFavoritesSection() {
    const section = document.getElementById('favorites');
    const grid = document.getElementById('favoritesGrid');
    const empty = document.getElementById('favoritesEmpty');
    if (!section || !grid || !empty) return;

    const favIds = getFavorites();
    const favTrees = window.treesData ? window.treesData.filter(t => favIds.includes(t.id)) : [];

    section.style.display = 'block';

    if (favTrees.length === 0) {
        grid.style.display = 'none';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';
    grid.style.display = 'grid';
    grid.innerHTML = '';

    favTrees.forEach((tree, i) => {
        if (window.createTreeCard) {
            const card = window.createTreeCard(tree);
            card.style.animationDelay = (i * 0.05) + 's';
            card.classList.add('tree-card--entering');
            grid.appendChild(card);
        }
    });
}

/** Simple toast notification */
function showToast(message) {
    let toast = document.getElementById('leafspec-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'leafspec-toast';
        toast.style.cssText = `
            position:fixed; bottom:80px; left:50%; transform:translateX(-50%) translateY(20px);
            background:var(--forest-dark); color:var(--white); padding:10px 20px;
            border-radius:var(--radius-full); font-size:var(--text-sm); font-weight:500;
            z-index:9999; opacity:0; transition:opacity 0.25s ease, transform 0.25s ease;
            pointer-events:none; white-space:nowrap; box-shadow:var(--shadow-lg);
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(10px)';
    }, 2200);
}

// Initialize
function initFavorites() {
    updateFavBadge();
    if (getFavorites().length > 0) renderFavoritesSection();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFavorites);
} else {
    initFavorites();
}

// Export
window.getFavorites = getFavorites;
window.isFavorite = isFavorite;
window.toggleFavorite = toggleFavorite;
window.renderFavoritesSection = renderFavoritesSection;