/**
 * ================================================
 * LEAFSPEC - Modal System v2.0
 * Tree Detail Popup with enhanced layout
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

const modal = document.getElementById('treeModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');

function toleranceWidth(level) {
    const map = { 'Excellent': '95%', 'High': '80%', 'Good': '65%', 'Moderate': '50%', 'Low': '30%', 'Poor': '15%' };
    return map[level] || '50%';
}

function openTreeModal(tree) {
    const isFav = window.isFavorite ? window.isFavorite(tree.id) : false;

    const modalHTML = `
        <div class="modal-header">
            <img src="${tree.image}" alt="${tree.name}" class="modal-header__image"
                onerror="this.src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&q=60&w=600'">
            <div class="modal-header__content">
                <h2 class="modal__title">${tree.name}</h2>
                <p class="modal__scientific">${tree.scientificName}</p>
                <div class="modal__tags">
                    <span class="tag">${tree.type}</span>
                    <span class="tag">${tree.family || ''}</span>
                    <span class="tag">${tree.hardiness || ''}</span>
                </div>
                <button class="modal__fav-btn ${isFav ? 'is-favorite' : ''}" id="modalFavBtn" data-tree-id="${tree.id}">
                    ${isFav ? '♥ Saved' : '♡ Save to Favorites'}
                </button>
            </div>
        </div>

        <div class="modal-body">
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
                            <p class="info-item__value">${tree.spread || '—'}</p>
                        </div>
                        <div class="info-item">
                            <p class="info-item__label">Growth Rate</p>
                            <p class="info-item__value">${tree.growthRate}</p>
                        </div>
                        <div class="info-item">
                            <p class="info-item__label">Lifespan</p>
                            <p class="info-item__value">${tree.lifespan || '—'}</p>
                        </div>
                        ${tree.flowerColor ? `<div class="info-item"><p class="info-item__label">Flower Color</p><p class="info-item__value">${tree.flowerColor}</p></div>` : ''}
                        ${tree.fallColor ? `<div class="info-item"><p class="info-item__label">Fall Color</p><p class="info-item__value">${tree.fallColor}</p></div>` : ''}
                    </div>
                </div>

                <div class="modal-section">
                    <h3 class="modal-section__title">Urban Tolerance</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <p class="info-item__label">Pollution</p>
                            <p class="info-item__value">${tree.pollution || '—'}</p>
                            <div class="tolerance-bar"><div class="tolerance-bar__fill" data-width="${toleranceWidth(tree.pollution)}" style="width:0%"></div></div>
                        </div>
                        <div class="info-item">
                            <p class="info-item__label">Drought</p>
                            <p class="info-item__value">${tree.drought || '—'}</p>
                            <div class="tolerance-bar"><div class="tolerance-bar__fill" data-width="${toleranceWidth(tree.drought)}" style="width:0%"></div></div>
                        </div>
                        ${tree.waterRequirements ? `<div class="info-item"><p class="info-item__label">Water Needs</p><p class="info-item__value">${tree.waterRequirements}</p></div>` : ''}
                    </div>
                </div>
            </div>

            <div class="modal-column">
                <div class="modal-section">
                    <h3 class="modal-section__title">Urban Benefits</h3>
                    <ul class="benefits-list">
                        ${tree.benefits.map(b => `<li>${b}</li>`).join('')}
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

                ${tree.wildlifeBenefits ? `
                <div class="modal-section">
                    <h3 class="modal-section__title">Wildlife Benefits</h3>
                    <ul class="benefits-list">
                        ${tree.wildlifeBenefits.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                </div>` : ''}

                ${tree.bloomingSeason ? `
                <div class="modal-section">
                    <h3 class="modal-section__title">Bloom & Planting</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <p class="info-item__label">Blooming Season</p>
                            <p class="info-item__value">${tree.bloomingSeason}</p>
                        </div>
                        ${tree.plantingSeason ? `<div class="info-item"><p class="info-item__label">Best Planting Time</p><p class="info-item__value">${tree.plantingSeason}</p></div>` : ''}
                        ${tree.costRange ? `<div class="info-item"><p class="info-item__label">Cost Range</p><p class="info-item__value">${tree.costRange}</p></div>` : ''}
                    </div>
                </div>` : ''}
            </div>
        </div>
    `;

    modalContent.innerHTML = modalHTML;
    modal.classList.add('modal--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Animate tolerance bars
    setTimeout(() => {
        if (window.animateToleranceBars) window.animateToleranceBars();
    }, 200);

    // Favorites button in modal
    const modalFavBtn = document.getElementById('modalFavBtn');
    if (modalFavBtn && window.toggleFavorite) {
        modalFavBtn.addEventListener('click', () => {
            window.toggleFavorite(tree.id);
            const nowFav = window.isFavorite(tree.id);
            modalFavBtn.textContent = nowFav ? '♥ Saved' : '♡ Save to Favorites';
            modalFavBtn.className = 'modal__fav-btn' + (nowFav ? ' is-favorite' : '');
        });
    }
}

function closeTreeModal() {
    modal.classList.remove('modal--open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeTreeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeTreeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('modal--open')) {
        closeTreeModal();
    }
});

window.openTreeModal = openTreeModal;