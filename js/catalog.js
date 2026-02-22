/**
 * ================================================
 * LEAFSPEC - Catalog Functionality
 * Search, Filter, and Display Trees
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

// Get DOM elements
const treeGrid = document.getElementById('treeGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const resultsCount = document.getElementById('resultsCount');

// Current filter state
let currentFilter = 'all';
let searchQuery = '';

/**
 * Render tree cards to the grid
 */
function renderTrees(trees) {
    // Clear loading state
    treeGrid.innerHTML = '';
    
    // Update results count
    resultsCount.textContent = trees.length;
    
    // If no trees, show message
    if (trees.length === 0) {
        treeGrid.innerHTML = `
            <div class="tree-grid__loading">
                <p style="color: var(--gray-medium);">No trees found. Try adjusting your filters.</p>
            </div>
        `;
        return;
    }
    
    // Create card for each tree
    trees.forEach(tree => {
        const card = createTreeCard(tree);
        treeGrid.appendChild(card);
    });
}

/**
 * Create a tree card element
 */
function createTreeCard(tree) {
    const card = document.createElement('article');
    card.className = 'tree-card';
    card.setAttribute('data-tree-id', tree.id);
    
    card.innerHTML = `
        <div class="tree-card__image-wrapper">
            <img 
                src="${tree.image}" 
                alt="${tree.name}"
                class="tree-card__image"
                loading="lazy"
            >
            <span class="tree-card__badge">${tree.type}</span>
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
                
                <span class="tree-card__action">
                    View Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', () => {
        openTreeModal(tree);
    });
    
    return card;
}

/**
 * Filter trees by type
 */
function filterTrees() {
    let filtered = window.treesData;
    
    // Apply type filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(tree => tree.type === currentFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(tree => {
            const searchLower = searchQuery.toLowerCase();
            return (
                tree.name.toLowerCase().includes(searchLower) ||
                tree.scientificName.toLowerCase().includes(searchLower) ||
                tree.description.toLowerCase().includes(searchLower)
            );
        });
    }
    
    renderTrees(filtered);
}

/**
 * Handle filter button clicks
 */
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
        
        // Add active class to clicked button
        button.classList.add('filter-btn--active');
        
        // Update current filter
        currentFilter = button.getAttribute('data-filter');
        
        // Re-filter trees
        filterTrees();
    });
});

/**
 * Handle search input
 */
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    // Debounce search (wait 300ms after typing stops)
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value;
        filterTrees();
    }, 300);
});

/**
 * Initialize catalog
 */
function initCatalog() {
    // Render all trees initially
    renderTrees(window.treesData);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalog);
} else {
    initCatalog();
}