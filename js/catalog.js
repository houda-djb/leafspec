/**
 * LEAFSPEC - Catalog Functionality v2.0
 * Created by: SYLVAH™ © 2026
 */

const treeGrid = document.getElementById('treeGrid');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const filterButtons = document.querySelectorAll('.filter-btn');
const resultsCount = document.getElementById('resultsCount');
const totalCount = document.getElementById('totalCount');
const sortSelect = document.getElementById('sortSelect');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const activeFiltersEl = document.getElementById('activeFilters');
const activeFilterBadges = document.getElementById('activeFilterBadges');

let currentFilter = 'all';
let searchQuery = '';
let currentSort = 'default';

function parseMinHeight(h) {
    const match = h.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
}

function growthScore(rate) {
    const r = (rate || '').toLowerCase();
    if (r.includes('fast')) return 3;
    if (r.includes('moderate') || r.includes('medium')) return 2;
    return 1;
}

function sortTrees(trees) {
    const sorted = [...trees];
    switch (currentSort) {
        case 'name-asc': return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc': return sorted.sort((a, b) => b.name.localeCompare(a.name));
        case 'height-asc': return sorted.sort((a, b) => parseMinHeight(a.height) - parseMinHeight(b.height));
        case 'height-desc': return sorted.sort((a, b) => parseMinHeight(b.height) - parseMinHeight(a.height));
        case 'growth-fast': return sorted.sort((a, b) => growthScore(b.growthRate) - growthScore(a.growthRate));
        default: return sorted;
    }
}

function renderTrees(trees) {
    treeGrid.innerHTML = '';
    const count = trees.length;
    if (resultsCount) {
        resultsCount.textContent = count;
        resultsCount.classList.add('results-count-pop');
        setTimeout(() => resultsCount.classList.remove('results-count-pop'), 350);
    }
    if (totalCount) totalCount.textContent = window.treesData.length;

    const hasActiveFilters = currentFilter !== 'all' || searchQuery || currentSort !== 'default';
    if (clearFiltersBtn) clearFiltersBtn.style.display = hasActiveFilters ? 'inline-flex' : 'none';
    updateActiveFilterBadges();

    if (trees.length === 0) {
        treeGrid.innerHTML = `
            <div class="tree-grid__loading">
                <p style="color:var(--gray-medium);text-align:center">
                    No trees found.<br>
                    <button onclick="clearAllFilters()" style="margin-top:12px;color:var(--forest-dark);text-decoration:underline;font-size:var(--text-sm);">Clear all filters</button>
                </p>
            </div>`;
        return;
    }

    const sorted = sortTrees(trees);
    sorted.forEach((tree, index) => {
        const card = createTreeCard(tree);
        card.style.animationDelay = Math.min(index * 0.04, 0.5) + 's';
        card.classList.add('tree-card--entering');
        treeGrid.appendChild(card);
    });
}

function updateActiveFilterBadges() {
    if (!activeFilterBadges || !activeFiltersEl) return;
    activeFilterBadges.innerHTML = '';
    const badges = [];
    if (currentFilter !== 'all') badges.push({ label: currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1), type: 'filter' });
    if (searchQuery) badges.push({ label: '"' + searchQuery + '"', type: 'search' });
    if (currentSort !== 'default') {
        const sortLabels = { 'name-asc':'Name A→Z','name-desc':'Name Z→A','height-asc':'Short→Tall','height-desc':'Tall→Short','growth-fast':'Fastest Growth' };
        badges.push({ label: sortLabels[currentSort] || currentSort, type: 'sort' });
    }
    if (badges.length === 0) { activeFiltersEl.style.display = 'none'; return; }
    activeFiltersEl.style.display = 'flex';
    badges.forEach(({ label, type }) => {
        const badge = document.createElement('span');
        badge.className = 'active-filter-badge';
        badge.innerHTML = label + ' <button onclick="clearFilterType(\'' + type + '\')" aria-label="Remove filter">✕</button>';
        activeFilterBadges.appendChild(badge);
    });
}

window.clearFilterType = function(type) {
    if (type === 'filter') {
        currentFilter = 'all';
        filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
        const allBtn = document.querySelector('[data-filter="all"]');
        if (allBtn) allBtn.classList.add('filter-btn--active');
    } else if (type === 'search') {
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        if (searchClear) searchClear.style.display = 'none';
    } else if (type === 'sort') {
        currentSort = 'default';
        if (sortSelect) sortSelect.value = 'default';
    }
    filterTrees();
};

window.clearAllFilters = function() {
    currentFilter = 'all';
    searchQuery = '';
    currentSort = 'default';
    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.style.display = 'none';
    if (sortSelect) sortSelect.value = 'default';
    filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
    const allBtn = document.querySelector('[data-filter="all"]');
    if (allBtn) allBtn.classList.add('filter-btn--active');
    filterTrees();
};

function createTreeCard(tree) {
    const card = document.createElement('article');
    card.className = 'tree-card';
    card.setAttribute('data-tree-id', tree.id);
    const isFav = window.isFavorite ? window.isFavorite(tree.id) : false;
    const favIcon = isFav ? '♥' : '♡';
    const favClass = isFav ? 'tree-card__fav-btn is-favorite' : 'tree-card__fav-btn';

    card.innerHTML = `
        <div class="tree-card__image-wrapper">
            <img src="${tree.image}" alt="${tree.name}" class="tree-card__image" loading="lazy"
                onerror="this.src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&q=60&w=400'">
            <span class="tree-card__badge">${tree.type}</span>
            <button class="${favClass}" data-tree-id="${tree.id}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}">${favIcon}</button>
        </div>
        <div class="tree-card__content">
            <h3 class="tree-card__name">${tree.name}</h3>
            <p class="tree-card__scientific">${tree.scientificName}</p>
            <p class="tree-card__description">${tree.description}</p>
            <div class="tree-card__footer">
                <div class="tree-card__meta">
                    <div class="meta-item">
                        <span class="meta-item__label">Height</span>
                        <span class="meta-item__value">${tree.height}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-item__label">Growth</span>
                        <span class="meta-item__value">${tree.growthRate}</span>
                    </div>
                </div>
                <span class="tree-card__action">View Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>`;

    card.addEventListener('click', (e) => {
        if (e.target.closest('.tree-card__fav-btn')) return;
        openTreeModal(tree);
    });

    const favBtn = card.querySelector('.tree-card__fav-btn');
    if (favBtn) {
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.toggleFavorite) {
                window.toggleFavorite(tree.id);
                const nowFav = window.isFavorite(tree.id);
                favBtn.textContent = nowFav ? '♥' : '♡';
                favBtn.className = nowFav ? 'tree-card__fav-btn is-favorite' : 'tree-card__fav-btn';
                favBtn.setAttribute('aria-label', nowFav ? 'Remove from favorites' : 'Add to favorites');
            }
        });
    }
    return card;
}

function filterTrees() {
    let filtered = window.treesData;
    if (currentFilter === 'favorites') {
        const favIds = window.getFavorites ? window.getFavorites() : [];
        filtered = filtered.filter(t => favIds.includes(t.id));
    } else if (currentFilter !== 'all') {
        filtered = filtered.filter(t => t.type === currentFilter);
    }
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(t =>
            t.name.toLowerCase().includes(q) ||
            t.scientificName.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            (t.family && t.family.toLowerCase().includes(q)) ||
            (t.climate && t.climate.some(c => c.toLowerCase().includes(q)))
        );
    }
    renderTrees(filtered);
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
        button.classList.add('filter-btn--active');
        currentFilter = button.getAttribute('data-filter');
        filterTrees();
    });
});

let searchTimeout;
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        if (searchClear) searchClear.style.display = val ? 'flex' : 'none';
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => { searchQuery = val; filterTrees(); }, 280);
    });
}

if (searchClear) {
    searchClear.addEventListener('click', () => {
        searchQuery = ''; searchInput.value = '';
        searchClear.style.display = 'none';
        filterTrees(); searchInput.focus();
    });
}

if (sortSelect) {
    sortSelect.addEventListener('change', (e) => { currentSort = e.target.value; filterTrees(); });
}

if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearAllFilters);

function initCatalog() {
    if (totalCount) totalCount.textContent = window.treesData.length;
    setTimeout(() => renderTrees(window.treesData), 400);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalog);
} else {
    initCatalog();
}

window.renderCatalog = renderTrees;
window.filterTrees = filterTrees;
window.createTreeCard = createTreeCard;