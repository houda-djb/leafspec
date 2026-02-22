/**
 * ================================================
 * LEAFSPEC - Modal System
 * Tree Detail Popup
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

// Get modal elements
const modal = document.getElementById('treeModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');

/**
 * Open modal with tree details
 */
function openTreeModal(tree) {
    // Generate modal HTML
    const modalHTML = `
        <div class="modal-header">
            <img 
                src="${tree.image}" 
                alt="${tree.name}"
                class="modal-header__image"
            >
            <div class="modal-header__content">
                <h2 class="modal__title">${tree.name}</h2>
                <p class="modal__scientific">${tree.scientificName}</p>
                
                <div class="modal__tags">
                    <span class="tag">${tree.type}</span>
                    <span class="tag">${tree.family}</span>
                    <span class="tag">${tree.hardiness}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-body">
            <!-- Left Column -->
            <div class="modal-column">
                <div class="modal-section">
                    <h3 class="modal-section__title">Description</h3>
                    <p class="modal-section__content">${tree.description}</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section__title">Physical Characteristics</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <p class="info-item__label">Height</p>
                            <p class="info-item__value">${tree.height}</p>
                        </div>
                        <div class="info-item">
                            <p class="info-item__label">Spread</p>
                            <p class="info-item__value">${tree.spread}</p>
                        </div>
                        <div class="info-item">
                            <p class="info-item__label">Growth Rate</p>
                            <p class="info-item__value">${tree.growthRate}</p>
                        </div>
                        <div class="info-item">
                            <p class="info-item__label">Lifespan</p>
                            <p class="info-item__value">${tree.lifespan}</p>
                        </div>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section__title">Urban Tolerance</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <p class="info-item__label">Pollution</p>
                            <p class="info-item__value">${tree.pollution}</p>
                        </div>
                        <div class="info-item">
                            <p class="info-item__label">Drought</p>
                            <p class="info-item__value">${tree.drought}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Right Column -->
            <div class="modal-column">
                <div class="modal-section">
                    <h3 class="modal-section__title">Urban Benefits</h3>
                    <ul class="benefits-list">
                        ${tree.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section__title">Maintenance</h3>
                    <p class="modal-section__content">${tree.maintenance}</p>
                </div>
                
                <div class="modal-section">
                    <h3 class="modal-section__title">Climate Zones</h3>
                    <p class="modal-section__content">
                        Suitable for: ${tree.climate.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')} climates
                    </p>
                </div>
            </div>
        </div>
    `;
    
    // Insert content
    modalContent.innerHTML = modalHTML;
    
    // Show modal
    modal.classList.add('modal--open');
    modal.setAttribute('aria-hidden', 'false');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

/**
 * Close modal
 */
function closeTreeModal() {
    modal.classList.remove('modal--open');
    modal.setAttribute('aria-hidden', 'true');
    
    // Restore body scroll
    document.body.style.overflow = '';
}

/**
 * Event listeners
 */
// Close button
modalClose.addEventListener('click', closeTreeModal);

// Backdrop click
modalBackdrop.addEventListener('click', closeTreeModal);

// ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
        closeTreeModal();
    }
});

// Make function global so catalog.js can use it
window.openTreeModal = openTreeModal;