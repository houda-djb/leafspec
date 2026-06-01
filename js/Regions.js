/**
 * ================================================
 * LEAFSPEC - Regions & Wilayas Module v1.0
 * Algeria's 3 Natural Regions + 58 Wilayas
 * With NDVI before/after slider for Batna
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

/* ================================================================
   BUILD THE REGIONS SECTION INTO THE DOM
================================================================ */

function buildRegionsSection() {
    const section = document.getElementById('regions');
    if (!section || !window.regionsData || !window.wilayasData) return;

    section.innerHTML = `
        <div class="regions__container">
            <div class="regions__header">
                <span class="regions__eyebrow">الجزائر • Algérie</span>
                <h2 class="regions__title">Algeria's Natural Regions</h2>
                <p class="regions__subtitle">
                    58 wilayas across 3 distinct botanical zones —
                    from the Mediterranean coast to the heart of the Sahara
                </p>
            </div>
            <div class="region-cards" id="regionCards"></div>
        </div>
    `;

    const container = document.getElementById('regionCards');

    window.regionsData.forEach((region, index) => {
        const wilayas = window.getWilayasByRegion(region.id);
        const ndviCount = wilayas.filter(w => w.hasNDVI).length;

        const card = document.createElement('div');
        card.className = 'region-card';
        card.setAttribute('data-region', region.id);

        card.innerHTML = `
            <div class="region-card__header" onclick="toggleRegion('${region.id}')">
                <div class="region-card__header-left">
                    <span class="region-card__icon">${region.icon}</span>
                    <div class="region-card__info">
                        <div class="region-card__name">${region.name}</div>
                        <div class="region-card__nickname">${region.nickname} · ${region.nicknameAr}</div>
                    </div>
                </div>
                <div class="region-card__header-right">
                    <div class="region-card__stats">
                        <div class="region-stat">
                            <span class="region-stat__value">${wilayas.length}</span>
                            <span class="region-stat__label">Wilayas</span>
                        </div>
                        <div class="region-stat">
                            <span class="region-stat__value">${region.rainfall}</span>
                            <span class="region-stat__label">Rainfall</span>
                        </div>
                        ${ndviCount > 0 ? `
                        <div class="region-stat">
                            <span class="region-stat__value">🛰️ ${ndviCount}</span>
                            <span class="region-stat__label">NDVI Study</span>
                        </div>` : ''}
                    </div>
                    <span class="region-card__chevron">▼</span>
                </div>
            </div>

            <div class="region-card__body" id="regionBody-${region.id}">
                <div class="region-card__body-inner">

                    <!-- Description -->
                    <div class="region-description">
                        <p class="region-description__text">${region.description}</p>
                        <div class="region-description__facts">
                            <div class="region-fact">
                                <span class="region-fact__label">Rainfall</span>
                                <span class="region-fact__value">${region.rainfall}</span>
                            </div>
                            <div class="region-fact">
                                <span class="region-fact__label">Climate</span>
                                <span class="region-fact__value">${region.climate}</span>
                            </div>
                            <div class="region-fact">
                                <span class="region-fact__label">Key Fact</span>
                                <span class="region-fact__value">${region.keyFact}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dominant trees -->
                    <div class="region-trees-strip">
                        <div class="region-trees-strip__label">Dominant Species</div>
                        <div class="region-trees-strip__tags">
                            ${region.dominantTrees.map(t =>
                                `<span class="region-tree-tag">🌿 ${t}</span>`
                            ).join('')}
                        </div>
                    </div>

                    <!-- Wilayas grid -->
                    <div class="wilayas-grid-label">
                        <span>Wilayas (${wilayas.length})</span>
                        ${ndviCount > 0 ? `<span class="wilayas-count-badge">🛰️ ${ndviCount} NDVI study</span>` : ''}
                    </div>
                    <div class="wilayas-grid" id="wilayasGrid-${region.id}">
                        ${wilayas.map(w => buildWilayaCard(w)).join('')}
                    </div>

                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

/* ================================================================
   BUILD A SINGLE WILAYA CARD
================================================================ */

function buildWilayaCard(w) {
    return `
        <div class="wilaya-card" onclick="openWilayaModal(${w.id})" title="Explore ${w.name}">
            <div class="wilaya-card__top">
                <span class="wilaya-card__code">W${w.code}</span>
                <div class="wilaya-card__badges">
                    ${w.hasNDVI ? `<span class="wilaya-card__ndvi-badge">🛰️ NDVI</span>` : ''}
                    ${w.isNew2019 ? `<span class="wilaya-card__new-badge">2019</span>` : ''}
                </div>
            </div>
            <div class="wilaya-card__name">${w.name}</div>
            <div class="wilaya-card__name-ar">${w.nameAr}</div>
            <div class="wilaya-card__meta">
                <span class="wilaya-meta-item">📍 ${w.capital}</span>
                <span class="wilaya-meta-item">⬆ ${w.altitude}</span>
            </div>
            <div class="wilaya-card__tree">🌿 ${w.iconicTree}</div>
            ${w.special ? `<div class="wilaya-card__special">★ UNESCO / Endemic</div>` : ''}
            <span class="wilaya-card__action-hint">Click to explore →</span>
        </div>
    `;
}

/* ================================================================
   TOGGLE REGION ACCORDION
================================================================ */

function toggleRegion(regionId) {
    const card = document.querySelector(`[data-region="${regionId}"]`);
    if (!card) return;
    const isOpen = card.classList.contains('region-card--open');

    // Close all
    document.querySelectorAll('.region-card').forEach(c => {
        c.classList.remove('region-card--open');
    });

    // Open clicked if it was closed
    if (!isOpen) {
        card.classList.add('region-card--open');
        // Smooth scroll to it
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

/* ================================================================
   WILAYA MODAL
================================================================ */

let wilayaModal = null;

function createWilayaModal() {
    wilayaModal = document.createElement('div');
    wilayaModal.className = 'wilaya-modal';
    wilayaModal.id = 'wilayaModal';
    wilayaModal.setAttribute('aria-hidden', 'true');
    wilayaModal.innerHTML = `
        <div class="wilaya-modal__backdrop" id="wilayaModalBackdrop"></div>
        <div class="wilaya-modal__container" style="position:relative;width:100%;max-width:960px;height:90vh;max-height:90vh;background:var(--white);border-radius:var(--radius-2xl);box-shadow:var(--shadow-2xl);display:flex;flex-direction:column;overflow:hidden;">
            <div class="wilaya-modal__inner" id="wilayaModalInner" style="overflow-y:scroll;flex:1;-webkit-overflow-scrolling:touch;"></div>
            <button class="wilaya-modal__close" id="wilayaModalClose" aria-label="Close">✕</button>
        </div>
    `;
    document.body.appendChild(wilayaModal);

    document.getElementById('wilayaModalBackdrop').addEventListener('click', closeWilayaModal);
    document.getElementById('wilayaModalClose').addEventListener('click', closeWilayaModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && wilayaModal.classList.contains('wilaya-modal--open')) {
            closeWilayaModal();
        }
    });
}

function openWilayaModal(wilayaId) {
    const w = window.getWilayaById(wilayaId);
    if (!w) return;

    const region = window.getRegionById(w.region);
    const trees  = window.getTreesForWilaya(w);

    const inner = document.getElementById('wilayaModalInner');
    inner.innerHTML = buildWilayaModalContent(w, region, trees);

    wilayaModal.classList.add('wilaya-modal--open');
    wilayaModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Init NDVI slider if this wilaya has one
    if (w.hasNDVI && w.ndvi) {
        initNDVISlider();
    }
}

function closeWilayaModal() {
    if (!wilayaModal) return;
    wilayaModal.classList.remove('wilaya-modal--open');
    wilayaModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

/* ================================================================
   BUILD MODAL CONTENT
================================================================ */

function buildWilayaModalContent(w, region, trees) {
    const regionLabel = region ? region.name : w.region;

    return `
        <!-- Banner -->
        <div class="wilaya-modal__banner wilaya-modal__banner--${w.region}">
            <div class="wilaya-modal__banner-top">
                <span class="wilaya-modal__code">Wilaya ${w.code}</span>
                <span class="wilaya-modal__region-tag">${region ? region.icon : ''} ${regionLabel}</span>
            </div>
            <div class="wilaya-modal__title">${w.name}</div>
            <div class="wilaya-modal__title-ar">${w.nameAr}</div>
        </div>

        <!-- Scrollable body -->
        <div class="wilaya-modal__body">

            <!-- Info grid -->
            <div class="wilaya-info-grid">
                <div class="wilaya-info-item">
                    <div class="wilaya-info-item__label">Capital</div>
                    <div class="wilaya-info-item__value">📍 ${w.capital}</div>
                </div>
                <div class="wilaya-info-item">
                    <div class="wilaya-info-item__label">Altitude</div>
                    <div class="wilaya-info-item__value">⬆ ${w.altitude}</div>
                </div>
                <div class="wilaya-info-item">
                    <div class="wilaya-info-item__label">Rainfall</div>
                    <div class="wilaya-info-item__value">🌧 ${w.rainfall}</div>
                </div>
                <div class="wilaya-info-item">
                    <div class="wilaya-info-item__label">Climate</div>
                    <div class="wilaya-info-item__value">${w.climate}</div>
                </div>
                <div class="wilaya-info-item">
                    <div class="wilaya-info-item__label">Iconic Tree</div>
                    <div class="wilaya-info-item__value">🌿 ${w.iconicTree}</div>
                </div>
                <div class="wilaya-info-item">
                    <div class="wilaya-info-item__label">Region</div>
                    <div class="wilaya-info-item__value">${regionLabel}</div>
                </div>
            </div>

            <!-- Description -->
            <p style="font-size:var(--text-sm);color:var(--gray-medium);line-height:1.8;margin-bottom:var(--space-4)">
                ${w.description}
            </p>

            <!-- Special note (UNESCO / endemic) -->
            ${w.special ? `
            <div class="wilaya-special-note">
                <span class="wilaya-special-note__icon">★</span>
                <span>${w.special}</span>
            </div>` : ''}

            <!-- NDVI Section -->
            ${w.hasNDVI && w.ndvi ? buildNDVISection(w) : ''}

            <!-- Trees of this wilaya -->
            ${trees.length > 0 ? `
            <div class="wilaya-section-title">🌿 Trees of ${w.name}</div>
            <div class="wilaya-trees-grid">
                ${trees.map(t => `
                    <div class="wilaya-tree-card" onclick="closeWilayaModal(); setTimeout(() => openTreeModal(window.treesData.find(x=>x.id===${t.id})), 300)">
                        <img src="${t.image}" alt="${t.name}" class="wilaya-tree-card__img"
                            onerror="this.src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&q=60&w=80'">
                        <div>
                            <div class="wilaya-tree-card__name">${t.name}</div>
                            <div class="wilaya-tree-card__sci">${t.scientificName}</div>
                        </div>
                    </div>
                `).join('')}
            </div>` : ''}

        </div>
    `;
}

/* ================================================================
   BUILD NDVI SECTION
================================================================ */

function buildNDVISection(w) {
    const ndvi = w.ndvi;
    const a = ndvi.analysis;

    return `
        <div class="ndvi-section">
            <div class="wilaya-section-title">
                <span class="ndvi-label">🛰️ NDVI Vegetation Study</span>
            </div>

            <!-- Trend indicator -->
            <div class="ndvi-trend">
                📈 Vegetation ${a.trend === 'improving' ? 'Improving ↑' : 'Stable'} — ${ndvi.years[0]} → ${ndvi.years[1]}
            </div>

            <!-- Stats row -->
            <div class="ndvi-stats-row">
                <div class="ndvi-stat-item">
                    <div class="ndvi-stat-item__value">${ndvi.maxValue2026}</div>
                    <div class="ndvi-stat-item__label">Max NDVI (${ndvi.years[1]})</div>
                </div>
                <div class="ndvi-stat-item">
                    <div class="ndvi-stat-item__value">${ndvi.minValue2026}</div>
                    <div class="ndvi-stat-item__label">Min NDVI (${ndvi.years[1]})</div>
                </div>
                <div class="ndvi-stat-item">
                    <div class="ndvi-stat-item__value">${a.month}</div>
                    <div class="ndvi-stat-item__label">Capture date</div>
                </div>
                <div class="ndvi-stat-item">
                    <div class="ndvi-stat-item__value">${a.satellite}</div>
                    <div class="ndvi-stat-item__label">Satellite</div>
                </div>
            </div>

            <!-- Before / After Slider -->
            <div class="ndvi-slider-wrapper" id="ndviSlider">
                <!-- 2024 image (left) — full underneath -->
                <img
                    src="${ndvi.map2024}"
                    alt="Batna vegetation 2024"
                    class="ndvi-img-before"
                    onerror="this.style.background='#2d4a3e';this.alt='2024 map'"
                >

                <!-- 2026 image (right) — clipped -->
                <div class="ndvi-img-after-wrap" id="ndviAfterWrap">
                    <img
                        src="${ndvi.map2026}"
                        alt="Batna vegetation 2026"
                        class="ndvi-img-after"
                        id="ndviAfterImg"
                        onerror="this.style.background='#52b788';this.alt='2026 map'"
                    >
                </div>

                <!-- Divider -->
                <div class="ndvi-divider" id="ndviDivider"></div>

                <!-- Handle -->
                <div class="ndvi-handle" id="ndviHandle">⟺</div>

                <!-- Year labels -->
                <span class="ndvi-year-label ndvi-year-label--before">${ndvi.years[0]}</span>
                <span class="ndvi-year-label ndvi-year-label--after">${ndvi.years[1]}</span>
            </div>

            <!-- Analysis -->
            <div class="ndvi-analysis">
                <div class="ndvi-analysis__title">📊 Vegetation Analysis</div>
                <p class="ndvi-analysis__text">${a.summary}</p>
                <p class="ndvi-analysis__text">${a.urban}</p>
                <p class="ndvi-analysis__text">${a.periurban}</p>
                <div class="ndvi-analysis__scale">
                    <strong>NDVI Scale:</strong> ${a.ndviScale}
                </div>
            </div>
        </div>
    `;
}

/* ================================================================
   NDVI SLIDER — GPU accelerated, RAF throttled
================================================================ */

function initNDVISlider() {
    const slider  = document.getElementById('ndviSlider');
    const wrap    = document.getElementById('ndviAfterWrap');
    const img     = document.getElementById('ndviAfterImg');
    const divider = document.getElementById('ndviDivider');
    const handle  = document.getElementById('ndviHandle');

    if (!slider || !wrap) return;

    /* GPU hints */
    wrap.style.willChange    = 'width';
    divider.style.willChange = 'transform';
    handle.style.willChange  = 'transform';

    /* Fix divider & handle to use transform (faster than left) */
    divider.style.left = '0';
    handle.style.left  = '0';

    /* Fix image width once */
    const sliderW = slider.offsetWidth;
    img.style.width    = sliderW + 'px';
    img.style.maxWidth = 'none';

    let rafId      = null;
    let currentPct = 50;

    function applyPosition(pct) {
        wrap.style.width = pct + '%';
        const px = (pct / 100) * sliderW;
        divider.style.transform = 'translateX(' + px + 'px)';
        handle.style.transform  = 'translateX(' + (px - 22) + 'px)';
    }

    function getPct(clientX) {
        const rect = slider.getBoundingClientRect();
        return Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    }

    applyPosition(50);

    slider.addEventListener('pointerdown', e => {
        slider.setPointerCapture(e.pointerId);
        currentPct = getPct(e.clientX);
        applyPosition(currentPct);
        e.preventDefault();
    });

    slider.addEventListener('pointermove', e => {
        if (!e.buttons) return;
        currentPct = getPct(e.clientX);
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            applyPosition(currentPct);
            rafId = null;
        });
    });

    slider.addEventListener('pointerup',     () => { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } });
    slider.addEventListener('pointercancel', () => { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } });
}

/* ================================================================
   INIT
================================================================ */

function initRegions() {
    if (!window.regionsData || !window.wilayasData) {
        console.warn('LeafSpec: wilayas-data.js not loaded yet');
        return;
    }
    buildRegionsSection();
    createWilayaModal();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRegions);
} else {
    initRegions();
}

/* Expose */
window.toggleRegion      = toggleRegion;
window.openWilayaModal   = openWilayaModal;
window.closeWilayaModal  = closeWilayaModal;