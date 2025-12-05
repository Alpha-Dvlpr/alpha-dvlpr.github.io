/* --- DATA RETRIEVING --- */
async function fetchData() {
    try {
        const basePath = window.location.pathname.includes('main_pages') ? '../' : '';
        const response = await fetch(basePath + 'data/data.json');
        return await response.json();
    } catch (error) {
        console.error("Error cargando data.json:", error);
        return null;
    }
}

async function cargarMateriales() {
    try {
        const response = await fetch('data/materiales.json');
        const data = await response.json();

        materiales = data.materiales;
        consumo = data.consumo;
        precioElectricidad = data.precioElectricidad;
        mantenimiento = data.mantenimiento;
        margen = data.margen;

        const selectMaterial = document.getElementById('material');
        selectMaterial.innerHTML = '';

        for (const [nombre, precio] of Object.entries(materiales)) {
            const option = document.createElement('option');
            option.value = nombre;
            option.textContent = `${nombre} - ${precio} €/kg`;
            selectMaterial.appendChild(option);
        }
    } catch (error) {
        console.error('Error al cargar materiales:', error);
        mostrarModal('Error al cargar los materiales. Verifica que el archivo materiales.json existe.');
    }
}

/* --- MAIN PAGE --- */
async function loadHomeData() {
    const data = await fetchData();
    if (!data) return;

    // Bloque principal
    const descriptionBlock = document.getElementById('home-description');
    const mainTitle = document.getElementById('main-title');

    if (descriptionBlock) descriptionBlock.textContent = data.profile.description;
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

/* --- CALCULATOR PAGE --- */
let materiales = {};
let consumo = 0.00;
let precioElectricidad = 0.00;
let mantenimiento = 0.00;
let margen = 0.00;

function mostrarModal(mensaje) {
    const modal = document.getElementById('modalOverlay');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = mensaje;
    modal.classList.remove('hidden');
}

function cerrarModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.add('hidden');
}

function calcular() {
    const campos = ['material', 'peso', 'tiempo'];
    campos.forEach(campo => {
        document.getElementById(campo).classList.remove('error');
    });

    const material = document.getElementById("material").value;
    const peso = document.getElementById("peso").value;
    const tiempo = document.getElementById("tiempo").value;

    let camposConError = [];

    if (!material) {
        document.getElementById("material").classList.add('error');
        camposConError.push('Material');
    }

    if (!peso || peso === '') {
        document.getElementById("peso").classList.add('error');
        camposConError.push('Peso');
    }

    if (!tiempo || tiempo === '') {
        document.getElementById("tiempo").classList.add('error');
        camposConError.push('Tiempo de impresión');
    }

    if (camposConError.length > 0) {
        mostrarModal('Por favor, completa todos los campos requeridos.');
        return;
    }

    if (!materiales[material]) {
        mostrarModal('Material no válido');
        return;
    }

    const precioFilamento = materiales[material];
    const pesoNum = parseFloat(peso);
    const tiempoNum = parseFloat(tiempo);

    const costoMaterial = (pesoNum / 1000) * precioFilamento;
    const costoElectricidad = (consumo / 1000) * tiempoNum * precioElectricidad;
    const costoMantenimiento = tiempoNum * mantenimiento;

    const subtotal = costoMaterial + costoElectricidad + costoMantenimiento;
    const total = subtotal * (1 + margen / 100);

    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    resultado.innerHTML = `
    <p>Material: <strong>${material}</strong></p>
    <p>💶 Precio estimado: <strong>${total.toFixed(2)} €</strong></p>
  `;
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
    if (document.getElementById('calculator-body')) cargarMateriales();

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