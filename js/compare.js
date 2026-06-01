/**
 * ================================================
 * LEAFSPEC - Comparison Tool v1.0
 * Compare up to 3 trees side by side
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

const MAX_COMPARE = 3;
let compareList = [];
let compareBar, compareBarSlots, compareBtn, compareClearBtn;
let compareModal, compareModalBackdrop, compareModalBody;

function initCompare() {
    compareBar = document.createElement('div');
    compareBar.className = 'compare-bar';
    compareBar.id = 'compareBar';
    compareBar.innerHTML = `
        <div class="compare-bar__inner">
            <span class="compare-bar__label">Compare:</span>
            <div class="compare-bar__slots" id="compareBarSlots"></div>
            <div class="compare-bar__actions">
                <button class="compare-bar__btn compare-bar__btn--primary" id="compareNowBtn" disabled>Compare (0/3)</button>
                <button class="compare-bar__btn compare-bar__btn--ghost" id="compareClearBtn">Clear</button>
            </div>
        </div>`;
    document.body.appendChild(compareBar);

    compareBarSlots = document.getElementById('compareBarSlots');
    compareBtn      = document.getElementById('compareNowBtn');
    compareClearBtn = document.getElementById('compareClearBtn');
    compareBtn.addEventListener('click', openCompareModal);
    compareClearBtn.addEventListener('click', clearCompare);

    compareModal = document.createElement('div');
    compareModal.className = 'compare-modal';
    compareModal.id = 'compareModal';
    compareModal.setAttribute('aria-hidden', 'true');
    compareModal.innerHTML = `
        <div class="compare-modal__backdrop" id="compareModalBackdrop"></div>
        <div class="compare-modal__container">
            <div class="compare-modal__header">
                <h2 class="compare-modal__title">Species Comparison</h2>
                <button class="compare-modal__close" id="compareModalClose">✕</button>
            </div>
            <div class="compare-modal__body" id="compareModalBody"></div>
        </div>`;
    document.body.appendChild(compareModal);

    compareModalBackdrop = document.getElementById('compareModalBackdrop');
    compareModalBody     = document.getElementById('compareModalBody');
    document.getElementById('compareModalClose').addEventListener('click', closeCompareModal);
    compareModalBackdrop.addEventListener('click', closeCompareModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && compareModal.classList.contains('compare-modal--open')) closeCompareModal();
    });
    renderCompareBar();
}

function addToCompare(tree) {
    if (compareList.find(t => t.id === tree.id)) return;
    if (compareList.length >= MAX_COMPARE) { showCompareToast('Max 3 trees at a time'); return; }
    compareList.push(tree);
    renderCompareBar();
    syncCompareButtons();
}

function removeFromCompare(treeId) {
    compareList = compareList.filter(t => t.id !== treeId);
    renderCompareBar();
    syncCompareButtons();
}

function clearCompare() {
    compareList = [];
    renderCompareBar();
    syncCompareButtons();
}

function isInCompare(treeId) {
    return !!compareList.find(t => t.id === treeId);
}

function renderCompareBar() {
    if (compareList.length > 0) compareBar.classList.add('compare-bar--visible');
    else compareBar.classList.remove('compare-bar--visible');

    compareBarSlots.innerHTML = '';
    for (let i = 0; i < MAX_COMPARE; i++) {
        const tree = compareList[i];
        const slot = document.createElement('div');
        if (tree) {
            slot.className = 'compare-slot';
            slot.innerHTML = `
                <img src="${tree.image}" alt="${tree.name}" class="compare-slot__img"
                    onerror="this.src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&q=60&w=80'">
                <span class="compare-slot__name">${tree.name}</span>
                <button class="compare-slot__remove" onclick="removeFromCompare(${tree.id})">✕</button>`;
        } else {
            slot.className = 'compare-slot compare-slot--empty';
            slot.textContent = '+ Add tree';
        }
        compareBarSlots.appendChild(slot);
    }
    compareBtn.textContent = `Compare (${compareList.length}/${MAX_COMPARE})`;
    compareBtn.disabled = compareList.length < 2;
}

function syncCompareButtons() {
    document.querySelectorAll('.tree-card__compare-btn').forEach(btn => {
        const id = parseInt(btn.getAttribute('data-tree-id'));
        const active = isInCompare(id);
        btn.classList.toggle('in-compare', active);
        btn.textContent = active ? '⊖' : '⊕';
        btn.title = active ? 'Remove from comparison' : 'Add to comparison';
    });
}

function openCompareModal() {
    if (compareList.length < 2) return;
    const _t = window.t || (k => k);

    function pill(level) {
        if (!level || level === '—') return '<span style="color:var(--gray-light)">—</span>';
        const cls = level.toLowerCase().replace(/\s+/g, '-');
        return `<span class="tolerance-pill tolerance-pill--${cls}">${level}</span>`;
    }
    function climateTags(arr) {
        if (!arr || !arr.length) return '—';
        return arr.map(c => `<span class="compare-tag">${c.charAt(0).toUpperCase() + c.slice(1)}</span>`).join('');
    }

    const allBenefits = [...new Set(compareList.flatMap(t => t.benefits || []))];
    const trees = compareList;
    const cols  = trees.length;

    let html = `<div class="compare-table-wrapper"><table class="compare-table">`;
    html += `<thead><tr>
        <th class="row-label" style="background:var(--cream)"></th>
        ${trees.map(t => `
            <th class="compare-table__tree-header">
                <img src="${t.image}" alt="${t.name}" class="compare-tree-thumb"
                    onerror="this.src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&q=60&w=400'">
                <span class="compare-tree-name">${t.name}</span>
                <span class="compare-tree-sci">${t.scientificName}</span>
            </th>`).join('')}
    </tr></thead><tbody>`;

    html += sectionRow('Overview', cols);
    html += row('Type',    trees.map(t => `<span class="compare-tag">${t.type}</span>`));
    html += row('Family',  trees.map(t => t.family || '—'));
    html += row('Climate', trees.map(t => climateTags(t.climate)));

    html += sectionRow('Size & Growth', cols);
    html += row('Height',    trees.map(t => t.height || '—'));
    html += row('Spread',    trees.map(t => t.spread || '—'));
    html += row('Growth Rate', trees.map(t => t.growthRate || '—'));
    html += row('Lifespan',  trees.map(t => t.lifespan || '—'));

    html += sectionRow('Urban Tolerance', cols);
    html += row('Pollution', trees.map(t => pill(t.pollution)));
    html += row('Drought',   trees.map(t => pill(t.drought)));

    html += sectionRow('Urban Benefits', cols);
    allBenefits.forEach(benefit => {
        html += row(
            `<span style="font-size:11px;text-align:left;display:block">${benefit}</span>`,
            trees.map(t => (t.benefits || []).includes(benefit)
                ? '<span class="benefit-check">✓</span>'
                : '<span style="color:var(--gray-light)">—</span>')
        );
    });

    html += `</tbody></table></div>`;
    compareModalBody.innerHTML = html;
    compareModal.classList.add('compare-modal--open');
    compareModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function sectionRow(label, cols) {
    return `<tr class="section-row"><th colspan="${cols + 1}">${label}</th></tr>`;
}
function row(label, cells) {
    return `<tr><th class="row-label">${label}</th>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`;
}

function closeCompareModal() {
    compareModal.classList.remove('compare-modal--open');
    compareModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function showCompareToast(msg) {
    let toast = document.getElementById('compare-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'compare-toast';
        toast.style.cssText = `position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--charcoal);color:var(--white);padding:10px 20px;border-radius:var(--radius-full);font-size:var(--text-sm);font-weight:500;z-index:9999;opacity:0;transition:opacity 0.25s ease,transform 0.25s ease;pointer-events:none;white-space:nowrap;box-shadow:var(--shadow-lg);`;
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(() => { toast.style.opacity='1'; toast.style.transform='translateX(-50%) translateY(0)'; });
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateX(-50%) translateY(10px)'; }, 2200);
}

function patchCreateTreeCard() {
    const original = window.createTreeCard;
    if (!original) return;
    window.createTreeCard = function(tree) {
        const card = original(tree);
        const wrapper = card.querySelector('.tree-card__image-wrapper');
        if (wrapper) {
            const btn = document.createElement('button');
            btn.className = 'tree-card__compare-btn' + (isInCompare(tree.id) ? ' in-compare' : '');
            btn.setAttribute('data-tree-id', tree.id);
            btn.title = isInCompare(tree.id) ? 'Remove from comparison' : 'Add to comparison';
            btn.textContent = isInCompare(tree.id) ? '⊖' : '⊕';
            btn.addEventListener('click', e => {
                e.stopPropagation();
                if (isInCompare(tree.id)) removeFromCompare(tree.id);
                else addToCompare(tree);
                const nowIn = isInCompare(tree.id);
                btn.classList.toggle('in-compare', nowIn);
                btn.textContent = nowIn ? '⊖' : '⊕';
                btn.title = nowIn ? 'Remove from comparison' : 'Add to comparison';
            });
            wrapper.appendChild(btn);
        }
        return card;
    };
}

function bootCompare() {
    initCompare();
    patchCreateTreeCard();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootCompare);
else bootCompare();

window.addToCompare      = addToCompare;
window.removeFromCompare = removeFromCompare;
window.isInCompare       = isInCompare;
window.clearCompare      = clearCompare;