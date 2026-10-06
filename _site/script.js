function initializeBackToTop() {
    const button = document.getElementById('scrollTopBtn');
    if (!button) return;

    const updateVisibility = () => {
        const isVisible = window.scrollY > 200;
        button.classList.toggle('opacity-100', isVisible);
        button.classList.toggle('opacity-0', !isVisible);
        button.classList.toggle('pointer-events-none', !isVisible);
    };

    window.addEventListener('scroll', updateVisibility, { passive: true });
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    updateVisibility();
}

function initializeTranslation() {
    const button = document.getElementById('translate-btn');
    const widget = document.getElementById('google_translate_element');
    const languageData = document.getElementById('translate-languages');
    if (!button || !widget || !languageData) return;

    let scriptLoaded = false;
    button.addEventListener('click', () => {
        const willOpen = widget.classList.contains('hidden');
        widget.classList.toggle('hidden', !willOpen);
        button.setAttribute('aria-expanded', String(willOpen));
        if (!willOpen || scriptLoaded) return;

        let languages = {};
        try {
            languages = JSON.parse(languageData.textContent || '{}');
        } catch {
            return;
        }

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'es',
                includedLanguages: Object.keys(languages).filter(code => code !== 'es').join(','),
                autoDisplay: false
            }, widget.id);
        };

        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.onerror = () => {
            scriptLoaded = false;
            widget.classList.add('hidden');
            button.setAttribute('aria-expanded', 'false');
        };
        scriptLoaded = true;
        document.head.appendChild(script);
    });
}

function initializeProductFilters() {
    const controls = document.getElementById('product-filters');
    const cards = Array.from(document.querySelectorAll('[data-product-card]'));
    if (!controls || cards.length === 0) return;

    const categories = new Map(cards.map(card => [card.dataset.category, card.dataset.categoryName]));
    const filters = [['all', 'Ver todo'], ...categories.entries()];

    filters.forEach(([id, label], index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = label;
        button.className = 'rounded-full px-4 py-2 transition';
        button.setAttribute('aria-pressed', String(index === 0));
        button.classList.add(...(index === 0 ? ['bg-orange-500', 'text-white'] : ['bg-orange-100', 'text-orange-700']));
        button.addEventListener('click', () => {
            cards.forEach(card => {
                card.hidden = id !== 'all' && card.dataset.category !== id;
            });
            controls.querySelectorAll('button').forEach(filterButton => {
                const selected = filterButton === button;
                filterButton.setAttribute('aria-pressed', String(selected));
                filterButton.classList.toggle('bg-orange-500', selected);
                filterButton.classList.toggle('text-white', selected);
                filterButton.classList.toggle('bg-orange-100', !selected);
                filterButton.classList.toggle('text-orange-700', !selected);
            });
        });
        controls.appendChild(button);
    });
}

function initializeImageModal() {
    const modal = document.getElementById('image-modal');
    const image = document.getElementById('modal-image');
    if (!(modal instanceof HTMLDialogElement) || !image) return;

    document.querySelectorAll('[data-image-src]').forEach(button => {
        button.addEventListener('click', () => {
            image.src = button.dataset.imageSrc;
            image.alt = button.dataset.imageAlt || '';
            modal.showModal();
        });
    });

    modal.addEventListener('click', event => {
        if (event.target === modal) modal.close();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeBackToTop();
    initializeTranslation();
    initializeProductFilters();
    initializeImageModal();
});