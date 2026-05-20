/* --- DATA RETRIEVING --- */
let data = null;

async function fetchData() {
    try {
        const basePath = window.location.pathname.includes('main_pages') ? '../' : '';
        const response = await fetch(basePath + 'data/data.json');
        data = await response.json();
        return data;
    } catch (error) {
        console.error("Error cargando data.json:", error);
        return null;
    }
}

/* --- MAIN PAGE --- */
async function loadHomeData() {
    const data = await fetchData();
    if (!data) return;

    // Bloque principal
    const descriptionBlock = document.getElementById('home-description');
    const mainTitle = document.getElementById('main-title');

    if (descriptionBlock) descriptionBlock.textContent = data.profile.description.join('\n\n');
    if (mainTitle) mainTitle.textContent = data.profile.title;

    // Bloque de chips principales con acción
    const chipsContainer = document.getElementById('main-chips');
    if (chipsContainer && data.profile.chips && data.profile.chips.length > 0) {
        chipsContainer.classList.remove('hidden');

        data.profile.chips.forEach(chipData => {
            const chip = document.createElement('span');
            chip.textContent = chipData.name;
            chip.className = `px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 cursor-pointer transition select-none`;

            chip.onclick = () => {
                chipData.newPage !== undefined
                    ? window.open(chipData.destination, '_blank')
                    : window.location.href = chipData.destination;
            };

            chipsContainer.appendChild(chip);
        });
    }
}

/* --- PRODUCTS AND SERVICES --- */
async function loadProductsAndServicesData() {
    const data = await fetchData();
    if (!data) return;

    // Bloque principal
    const descriptionBlock = document.getElementById('products-description');
    const mainTitle = document.getElementById('main-title');

    if (descriptionBlock) descriptionBlock.textContent = data.productsAndServices.description.join('\n\n');
    if (mainTitle) mainTitle.textContent = data.productsAndServices.title;

    // Bloque de chips principales con acción
    const chipsContainer = document.getElementById('main-chips');
    const elements = data.productsAndServices.elements;
    const chipMap = new Map();

    elements.forEach(e => {
        chipMap.set(e.category.id, e.category.name);
    });

    const chips = [
        { id: 'all', name: 'Ver todo' },
        ...[...chipMap.entries()]
            .sort((a, b) => a[1].localeCompare(b[1]))
            .map(([id, name]) => ({ id, name }))
    ];

    chipsContainer.innerHTML = '';

    chips.forEach(chip => {
        const button = document.createElement('button');
        button.textContent = chip.name;
        button.className = 'chip px-4 py-2 rounded-full transition';

        if (chip.id === 'all') {
            button.classList.add('bg-orange-500', 'text-white');
        } else {
            button.classList.add('bg-orange-100', 'text-orange-700');
        }

        button.onclick = () => {
            document.querySelectorAll('.chip').forEach(c => {
                c.classList.remove('bg-orange-500', 'text-white');
                c.classList.add('bg-orange-100', 'text-orange-700');
            });

            button.classList.remove('bg-orange-100', 'text-orange-700');
            button.classList.add('bg-orange-500', 'text-white');

            renderProducts(chip.id);
        };

        chipsContainer.appendChild(button);
    });

    chipsContainer.classList.remove('hidden');
    renderProducts('all');
}

function renderProducts(filter = 'all') {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    const elements = data.productsAndServices.elements;
    const filtered = filter === 'all'
        ? elements
        : elements.filter(e => e.category.id === filter);

    filtered.forEach(element => {
        const section = document.createElement('section');
        section.className = 'w-full bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4';

        // TÍTULO
        const title = document.createElement('h2');
        title.className = 'text-lg font-semibold text-orange-500';
        title.textContent = element.category.name.toUpperCase();

        section.appendChild(title);

        // DESCRIPCIÓN
        const desc = document.createElement('p');
        desc.className = 'text-slate-700 whitespace-pre-line';
        desc.textContent = element.description.join('\n\n');

        section.appendChild(desc);

        // PRECIO
        const price = document.createElement('p');
        price.className = 'text-lg font-semibold text-orange-500';
        price.textContent = `Precio: ${element.price.toFixed(2)}€`;

        section.appendChild(price);

        // GALERÍA (si existe imageCount)
        if (element.imageCount && element.imageCount > 0) {
            const gallery = document.createElement('div');

            gallery.className = 'flex gap-4 overflow-x-auto pb-2';

            for (let i = 1; i <= element.imageCount; i++) {
                const img = document.createElement('img');

                img.src = `img/products/${element.id}/${i}.jpg`;
                img.className = 'h-48 rounded-xl shadow cursor-pointer hover:scale-105 transition';
                img.loading = 'lazy';
                img.onclick = () => openImageModal(img.src);

                gallery.appendChild(img);
            }

            section.appendChild(gallery);
        }

        productsContainer.appendChild(section);
    });
}

function openImageModal(src) {
    let modal = document.getElementById('image-modal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <button id="close-modal"
                class="absolute top-6 right-6 text-white text-4xl">x</button>
            <img id="modal-image"
                class="max-w-full max-h-full rounded-xl shadow-2xl">
        `;

        document.body.appendChild(modal);

        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
        modal.querySelector('#close-modal').onclick = () => {
            modal.remove();
        };
    }

    modal.querySelector('#modal-image').src = src;
}

/* --- GOOGLE TRANSLATE --- */
let LANG_OPTIONS = {};
const PAGE_BASE_LANG = "es";

async function loadLanguages() {
    const data = await fetchData();

    if (!data || !data.languages) return null;

    LANG_OPTIONS = data.languages;
}

function loadGoogleTranslate() {
    if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = function () {
            new google.translate.TranslateElement(
                { pageLanguage: PAGE_BASE_LANG, includedLanguages: Object.keys(LANG_OPTIONS).join(','), autoDisplay: false },
                'google_translate_element'
            );
        };
    }

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
}

function getCurrentLanguage() {
    const m = document.cookie.match(/(?:^|; )googtrans=([^;]+)/);
    if (!m) return PAGE_BASE_LANG;
    const val = decodeURIComponent(m[1]).split('/');
    return val[2] || PAGE_BASE_LANG;
}

function setGoogleTranslateCookie(from, to) {
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `googtrans=${encodeURIComponent('/' + from + '/' + to)}; path=/; expires=${expires}; SameSite=Lax`;
}

function ensureTranslateMenu() {
    if (document.getElementById('translate-menu')) return;

    const container = document.getElementById('translate-container');
    if (!container) return;

    const menu = document.createElement('div');
    menu.id = 'translate-menu';
    menu.className = 'absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl overflow-hidden hidden z-50 border border-orange-200';

    Object.entries(LANG_OPTIONS).forEach(([code, label]) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'w-full text-left px-3 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors';
        item.textContent = label;
        item.dataset.lang = code;

        item.onclick = () => {
            setGoogleTranslateCookie(PAGE_BASE_LANG, code);

            setTimeout(() => {
                if (!forceGoogleTranslateTo(code)) location.reload();
            }, 300);
        };

        menu.appendChild(item);
    });

    container.appendChild(menu);
}

function toggleTranslateMenu() {
    ensureTranslateMenu();
    const menu = document.getElementById('translate-menu');
    if (menu) menu.classList.toggle('hidden');
}

function forceGoogleTranslateTo(lang) {
    const iframe = document.querySelector("iframe.goog-te-menu-frame");
    if (!iframe) return false;

    const inner = iframe.contentDocument || iframe.contentWindow.document;
    const opts = inner.querySelectorAll(".goog-te-menu2-item span.text");

    for (const el of opts) {
        if (el.innerText.toLowerCase().includes(LANG_OPTIONS[lang].toLowerCase())) {
            el.click();
            return true;
        }
    }

    return false;
}

/* --- PAGE SELECTION --- */
document.addEventListener('DOMContentLoaded', async () => {
    await loadLanguages();
    loadGoogleTranslate();

    if (document.getElementById('home-description')) loadHomeData();
    if (document.getElementById('products-description')) loadProductsAndServicesData();

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const backBtn = document.getElementById('backBtn');
    const translateButton = document.getElementById('translate-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollTopBtn.classList.add('opacity-100');
        } else {
            scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollTopBtn.classList.remove('opacity-100');
        }
    });

    if (scrollTopBtn) scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    if (backBtn) backBtn.addEventListener('click', () => window.history.back());

    if (translateButton) {
        translateButton.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            toggleTranslateMenu();
        });

        document.addEventListener('click', () => {
            const menu = document.getElementById('translate-menu');

            if (menu && !menu.classList.contains('hidden')) menu.classList.add('hidden');
        });
    }
});