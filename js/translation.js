/**
 * ================================================
 * LEAFSPEC - Internationalization (i18n) System
 * Supports: English (en), French (fr), Arabic (ar)
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

const LEAFSPEC_I18N = {

    en: {
        /* --- META --- */
        lang: 'en',
        dir: 'ltr',
        langLabel: 'EN',
        langName: 'English',

        /* --- NAVBAR --- */
        nav_home: 'Home',
        nav_species: 'Species',
        nav_favorites: 'Favorites',
        nav_about: 'About',
        nav_contact: 'Contact',

        /* --- HERO --- */
        hero_eyebrow: 'Urban Forestry Archive',
        hero_title_line1: 'Witness the',
        hero_title_highlight: 'Silent Architects',
        hero_description: 'A curated collection of 57 tree species perfectly adapted for urban environments. Discover nature\'s solutions to modern city planning.',
        hero_stat_species: 'Species',
        hero_stat_categories: 'Categories',
        hero_stat_climate: 'Climate Zones',
        hero_cta_explore: 'Explore Catalog',
        hero_cta_learn: 'Learn More',
        hero_floating_title: '57 Species Documented',
        hero_floating_sub: 'From 4 major categories',

        /* --- CATALOG --- */
        catalog_title: 'Species Archive',
        catalog_subtitle: '57 curated urban trees for sustainable city planning',
        search_placeholder: 'Search by name, scientific name, or description...',
        search_aria: 'Search trees',
        search_clear_aria: 'Clear search',
        filter_all: 'All Trees',
        filter_deciduous: 'Deciduous',
        filter_evergreen: 'Evergreen',
        filter_coniferous: 'Coniferous',
        filter_favorites: '♥ Favorites',
        sort_default: 'Sort: Default',
        sort_name_asc: 'Name A → Z',
        sort_name_desc: 'Name Z → A',
        sort_height_asc: 'Height: Short → Tall',
        sort_height_desc: 'Height: Tall → Short',
        sort_growth_fast: 'Growth: Fastest First',
        clear_filters: '✕ Clear Filters',
        active_label: 'Active:',
        results_showing: 'Showing',
        results_of: 'of',
        results_species: 'species',
        no_results: 'No trees found.',
        no_results_clear: 'Clear all filters',
        view_details: 'View Details',
        label_height: 'Height',
        label_growth: 'Growth',

        /* --- ACTIVE FILTER BADGE SORT LABELS --- */
        badge_name_asc: 'Name A→Z',
        badge_name_desc: 'Name Z→A',
        badge_height_asc: 'Short→Tall',
        badge_height_desc: 'Tall→Short',
        badge_growth_fast: 'Fastest Growth',

        /* --- FAVORITES SECTION --- */
        fav_title: 'Your Favorites',
        fav_subtitle: 'Trees you\'ve bookmarked for reference',
        fav_empty: 'No favorites yet. Click the ♥ on any tree card to save it here.',
        fav_add_aria: 'Add to favorites',
        fav_remove_aria: 'Remove from favorites',
        toast_added: 'Added to favorites ♥',
        toast_removed: 'Removed from favorites',

        /* --- MODAL --- */
        modal_close_aria: 'Close modal',
        modal_save: '♡ Save to Favorites',
        modal_saved: '♥ Saved',
        modal_description: 'Description',
        modal_physical: 'Physical Characteristics',
        modal_tolerance: 'Urban Tolerance',
        modal_benefits: 'Urban Benefits',
        modal_maintenance: 'Maintenance',
        modal_climate: 'Climate Zones',
        modal_wildlife: 'Wildlife Benefits',
        modal_bloom: 'Bloom & Planting',
        modal_height: 'Height',
        modal_spread: 'Spread',
        modal_growth: 'Growth Rate',
        modal_lifespan: 'Lifespan',
        modal_flower: 'Flower Color',
        modal_fall: 'Fall Color',
        modal_pollution: 'Pollution',
        modal_drought: 'Drought',
        modal_water: 'Water Needs',
        modal_suitable: 'Suitable for:',
        modal_climates: 'climates',
        modal_blooming: 'Blooming Season',
        modal_planting: 'Best Planting Time',
        modal_cost: 'Cost Range',
        modal_dash: '—',

        /* --- ABOUT --- */
        about_title: 'About LeafSpec',
        about_text: 'LeafSpec is a comprehensive database of urban-suitable tree species, designed for landscape architects, urban planners, and nature enthusiasts. Each of the 57 species is carefully documented with urban tolerance data, maintenance requirements, and environmental benefits.',

        /* --- FOOTER --- */
        footer_tagline: 'Growing sustainable cities, one tree at a time.',
        footer_copy: '© 2026 LeafSpec • Crafted by',
        footer_source: 'Data sourced from urban forestry research.',

        /* --- FAVORITES SECTION (in catalog nav) --- */
        fav_section_title: 'Your Favorites',
        fav_section_subtitle: 'Trees you\'ve bookmarked for reference',
    },

    /* ================================================================
       FRENCH — FRANÇAIS
    ================================================================ */
    fr: {
        lang: 'fr',
        dir: 'ltr',
        langLabel: 'FR',
        langName: 'Français',

        /* --- NAVBAR --- */
        nav_home: 'Accueil',
        nav_species: 'Espèces',
        nav_favorites: 'Favoris',
        nav_about: 'À propos',
        nav_contact: 'Contact',

        /* --- HERO --- */
        hero_eyebrow: 'Archive de Foresterie Urbaine',
        hero_title_line1: 'Découvrez les',
        hero_title_highlight: 'Architectes Silencieux',
        hero_description: 'Une collection de 57 espèces d\'arbres parfaitement adaptées aux environnements urbains. Découvrez les solutions de la nature pour la planification des villes modernes.',
        hero_stat_species: 'Espèces',
        hero_stat_categories: 'Catégories',
        hero_stat_climate: 'Zones Climatiques',
        hero_cta_explore: 'Explorer le Catalogue',
        hero_cta_learn: 'En savoir plus',
        hero_floating_title: '57 Espèces Documentées',
        hero_floating_sub: 'Issues de 4 grandes catégories',

        /* --- CATALOG --- */
        catalog_title: 'Archive des Espèces',
        catalog_subtitle: '57 arbres urbains sélectionnés pour un aménagement durable',
        search_placeholder: 'Rechercher par nom, nom scientifique ou description...',
        search_aria: 'Rechercher des arbres',
        search_clear_aria: 'Effacer la recherche',
        filter_all: 'Tous les Arbres',
        filter_deciduous: 'Feuillus',
        filter_evergreen: 'Sempervirents',
        filter_coniferous: 'Conifères',
        filter_favorites: '♥ Favoris',
        sort_default: 'Trier : Par défaut',
        sort_name_asc: 'Nom A → Z',
        sort_name_desc: 'Nom Z → A',
        sort_height_asc: 'Taille : Petit → Grand',
        sort_height_desc: 'Taille : Grand → Petit',
        sort_growth_fast: 'Croissance : Plus rapide d\'abord',
        clear_filters: '✕ Effacer les filtres',
        active_label: 'Actif :',
        results_showing: 'Affichage de',
        results_of: 'sur',
        results_species: 'espèces',
        no_results: 'Aucun arbre trouvé.',
        no_results_clear: 'Effacer tous les filtres',
        view_details: 'Voir les détails',
        label_height: 'Hauteur',
        label_growth: 'Croissance',

        /* --- ACTIVE FILTER BADGE SORT LABELS --- */
        badge_name_asc: 'Nom A→Z',
        badge_name_desc: 'Nom Z→A',
        badge_height_asc: 'Petit→Grand',
        badge_height_desc: 'Grand→Petit',
        badge_growth_fast: 'Croissance la plus rapide',

        /* --- FAVORITES SECTION --- */
        fav_title: 'Vos Favoris',
        fav_subtitle: 'Arbres que vous avez sauvegardés pour référence',
        fav_empty: 'Aucun favori pour l\'instant. Cliquez sur ♥ sur une carte d\'arbre pour le sauvegarder ici.',
        fav_add_aria: 'Ajouter aux favoris',
        fav_remove_aria: 'Retirer des favoris',
        toast_added: 'Ajouté aux favoris ♥',
        toast_removed: 'Retiré des favoris',

        /* --- MODAL --- */
        modal_close_aria: 'Fermer la fenêtre',
        modal_save: '♡ Sauvegarder',
        modal_saved: '♥ Sauvegardé',
        modal_description: 'Description',
        modal_physical: 'Caractéristiques Physiques',
        modal_tolerance: 'Tolérance Urbaine',
        modal_benefits: 'Bénéfices Urbains',
        modal_maintenance: 'Entretien',
        modal_climate: 'Zones Climatiques',
        modal_wildlife: 'Bénéfices pour la Faune',
        modal_bloom: 'Floraison & Plantation',
        modal_height: 'Hauteur',
        modal_spread: 'Envergure',
        modal_growth: 'Taux de Croissance',
        modal_lifespan: 'Durée de Vie',
        modal_flower: 'Couleur des Fleurs',
        modal_fall: 'Couleur Automnale',
        modal_pollution: 'Pollution',
        modal_drought: 'Sécheresse',
        modal_water: 'Besoins en Eau',
        modal_suitable: 'Adapté aux :',
        modal_climates: 'climats',
        modal_blooming: 'Saison de Floraison',
        modal_planting: 'Meilleure Période de Plantation',
        modal_cost: 'Fourchette de Prix',
        modal_dash: '—',

        /* --- ABOUT --- */
        about_title: 'À propos de LeafSpec',
        about_text: 'LeafSpec est une base de données complète d\'espèces d\'arbres adaptées aux milieux urbains, conçue pour les architectes paysagistes, les urbanistes et les passionnés de nature. Chacune des 57 espèces est soigneusement documentée avec des données de tolérance urbaine, des exigences d\'entretien et des bénéfices environnementaux.',

        /* --- FOOTER --- */
        footer_tagline: 'Construire des villes durables, un arbre à la fois.',
        footer_copy: '© 2026 LeafSpec • Créé par',
        footer_source: 'Données issues de la recherche en foresterie urbaine.',

        fav_section_title: 'Vos Favoris',
        fav_section_subtitle: 'Arbres que vous avez sauvegardés pour référence',
    },

    /* ================================================================
       ARABIC — العربية
    ================================================================ */
    ar: {
        lang: 'ar',
        dir: 'rtl',
        langLabel: 'ع',
        langName: 'العربية',

        /* --- NAVBAR --- */
        nav_home: 'الرئيسية',
        nav_species: 'الأنواع',
        nav_favorites: 'المفضلة',
        nav_about: 'حول',
        nav_contact: 'اتصل بنا',

        /* --- HERO --- */
        hero_eyebrow: 'أرشيف الغابات الحضرية',
        hero_title_line1: 'اكتشف',
        hero_title_highlight: 'المهندسين الصامتين',
        hero_description: 'مجموعة مختارة من 57 نوعًا من الأشجار المتكيفة تمامًا مع البيئات الحضرية. اكتشف حلول الطبيعة لتخطيط المدن الحديثة.',
        hero_stat_species: 'نوع',
        hero_stat_categories: 'فئات',
        hero_stat_climate: 'مناطق مناخية',
        hero_cta_explore: 'استكشاف الفهرس',
        hero_cta_learn: 'اعرف المزيد',
        hero_floating_title: '٥٧ نوعًا موثقًا',
        hero_floating_sub: 'من ٤ فئات رئيسية',

        /* --- CATALOG --- */
        catalog_title: 'أرشيف الأنواع',
        catalog_subtitle: '٥٧ شجرة حضرية مختارة لتخطيط مدني مستدام',
        search_placeholder: 'ابحث بالاسم أو الاسم العلمي أو الوصف...',
        search_aria: 'البحث عن أشجار',
        search_clear_aria: 'مسح البحث',
        filter_all: 'كل الأشجار',
        filter_deciduous: 'متساقطة الأوراق',
        filter_evergreen: 'دائمة الخضرة',
        filter_coniferous: 'مخروطية',
        filter_favorites: '♥ المفضلة',
        sort_default: 'ترتيب: افتراضي',
        sort_name_asc: 'الاسم أ → ي',
        sort_name_desc: 'الاسم ي → أ',
        sort_height_asc: 'الارتفاع: الأقصر أولاً',
        sort_height_desc: 'الارتفاع: الأطول أولاً',
        sort_growth_fast: 'النمو: الأسرع أولاً',
        clear_filters: '✕ مسح الفلاتر',
        active_label: 'نشط:',
        results_showing: 'عرض',
        results_of: 'من',
        results_species: 'نوع',
        no_results: 'لم يتم العثور على أشجار.',
        no_results_clear: 'مسح جميع الفلاتر',
        view_details: 'عرض التفاصيل',
        label_height: 'الارتفاع',
        label_growth: 'النمو',

        /* --- ACTIVE FILTER BADGE SORT LABELS --- */
        badge_name_asc: 'الاسم أ→ي',
        badge_name_desc: 'الاسم ي→أ',
        badge_height_asc: 'الأقصر→الأطول',
        badge_height_desc: 'الأطول→الأقصر',
        badge_growth_fast: 'الأسرع نموًا',

        /* --- FAVORITES --- */
        fav_title: 'مفضلتك',
        fav_subtitle: 'الأشجار التي حفظتها للرجوع إليها',
        fav_empty: 'لا توجد مفضلة بعد. انقر على ♥ في أي بطاقة شجرة لحفظها هنا.',
        fav_add_aria: 'إضافة إلى المفضلة',
        fav_remove_aria: 'إزالة من المفضلة',
        toast_added: 'تمت الإضافة إلى المفضلة ♥',
        toast_removed: 'تمت الإزالة من المفضلة',

        /* --- MODAL --- */
        modal_close_aria: 'إغلاق النافذة',
        modal_save: '♡ حفظ في المفضلة',
        modal_saved: '♥ محفوظ',
        modal_description: 'الوصف',
        modal_physical: 'الخصائص الجسدية',
        modal_tolerance: 'التحمل الحضري',
        modal_benefits: 'الفوائد الحضرية',
        modal_maintenance: 'الصيانة',
        modal_climate: 'المناطق المناخية',
        modal_wildlife: 'فوائد للحياة البرية',
        modal_bloom: 'الإزهار والزراعة',
        modal_height: 'الارتفاع',
        modal_spread: 'الامتداد',
        modal_growth: 'معدل النمو',
        modal_lifespan: 'العمر الافتراضي',
        modal_flower: 'لون الزهرة',
        modal_fall: 'لون الخريف',
        modal_pollution: 'التلوث',
        modal_drought: 'الجفاف',
        modal_water: 'احتياجات المياه',
        modal_suitable: 'مناسب لـ:',
        modal_climates: 'مناخات',
        modal_blooming: 'موسم الإزهار',
        modal_planting: 'أفضل وقت للزراعة',
        modal_cost: 'نطاق التكلفة',
        modal_dash: '—',

        /* --- ABOUT --- */
        about_title: 'حول ليفسبيك',
        about_text: 'ليفسبيك هي قاعدة بيانات شاملة لأنواع الأشجار المناسبة للبيئات الحضرية، مصممة للمهندسين المعماريين المنظريين ومخططي المدن وعشاق الطبيعة. كل واحد من 57 نوعًا موثق بعناية ببيانات التحمل الحضري ومتطلبات الصيانة والفوائد البيئية.',

        /* --- FOOTER --- */
        footer_tagline: 'نبني مدنًا مستدامة، شجرةً في كل مرة.',
        footer_copy: '© 2026 ليفسبيك • صُنع بواسطة',
        footer_source: 'البيانات مستقاة من أبحاث الغابات الحضرية.',

        fav_section_title: 'مفضلتك',
        fav_section_subtitle: 'الأشجار التي حفظتها للرجوع إليها',
    }
};

/* ================================================================
   I18N ENGINE
   Manages language state, applies translations to the DOM,
   handles RTL switching, and persists the user's choice.
================================================================ */

const I18n = (() => {
    const STORAGE_KEY = 'leafspec_lang';
    let currentLang = 'en';

    /** Get saved language or fall back to browser language */
    function detectLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && LEAFSPEC_I18N[saved]) return saved;
        const browser = navigator.language.slice(0, 2);
        if (LEAFSPEC_I18N[browser]) return browser;
        return 'en';
    }

    /** Retrieve a translation string */
    function t(key) {
        const dict = LEAFSPEC_I18N[currentLang] || LEAFSPEC_I18N['en'];
        return dict[key] !== undefined ? dict[key] : (LEAFSPEC_I18N['en'][key] || key);
    }

    /** Apply translations to every [data-i18n] element in the DOM */
    function applyTranslations() {
        const dict = LEAFSPEC_I18N[currentLang];

        /* Direction & lang attribute */
        document.documentElement.setAttribute('lang', dict.lang);
        document.documentElement.setAttribute('dir', dict.dir);

        /* All elements with data-i18n key */
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (el.tagName === 'INPUT' && el.type !== 'button') {
                el.setAttribute('placeholder', val);
            } else if (el.hasAttribute('data-i18n-aria')) {
                el.setAttribute('aria-label', val);
            } else {
                el.textContent = val;
            }
        });

        /* Elements with data-i18n-placeholder */
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
        });

        /* Elements with data-i18n-aria */
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
        });

        /* Sort select options */
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            const map = {
                'default': 'sort_default',
                'name-asc': 'sort_name_asc',
                'name-desc': 'sort_name_desc',
                'height-asc': 'sort_height_asc',
                'height-desc': 'sort_height_desc',
                'growth-fast': 'sort_growth_fast',
            };
            sortSelect.querySelectorAll('option').forEach(opt => {
                const key = map[opt.value];
                if (key) opt.textContent = t(key);
            });
        }

        /* Results text */
        const resultsText = document.querySelector('.results__text');
        if (resultsText) {
            const count = document.getElementById('resultsCount');
            const total = document.getElementById('totalCount');
            const cVal = count ? count.textContent : '57';
            const tVal = total ? total.textContent : '57';
            resultsText.innerHTML = `${t('results_showing')} <span id="resultsCount">${cVal}</span> ${t('results_of')} <span id="totalCount">${tVal}</span> ${t('results_species')}`;
        }

        /* Sync language switcher buttons */
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === currentLang);
        });

        /* Re-render catalog if available (updates card strings) */
        if (window.filterTrees) window.filterTrees();
    }

    /** Switch to a new language */
    function setLang(lang) {
        if (!LEAFSPEC_I18N[lang]) return;
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations();
    }

    /** Initialize */
    function init() {
        currentLang = detectLang();
        applyTranslations();
    }

    return { t, setLang, init, getCurrentLang: () => currentLang };
})();

/* Expose globally */
window.I18n = I18n;
window.t = I18n.t.bind(I18n);

/* Auto-init after DOM ready */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', I18n.init);
} else {
    I18n.init();
}