function initializeBackToTop() {
    const button = document.getElementById('scrollTopBtn');
    if (!button) return;

    const updateVisibility = () => {
        const isVisible = window.scrollY > 200;
        button.classList.toggle('opacity-100', isVisible);
        button.classList.toggle('opacity-0', !isVisible);
        button.classList.toggle('pointer-events-none', !isVisible);
        button.inert = !isVisible;
    };

    window.addEventListener('scroll', updateVisibility, { passive: true });
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    updateVisibility();
}

function initializeBackLink() {
    const link = document.getElementById('back-link');
    if (!link) return;

    link.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        let cameFromHere = false;
        try {
            const from = new URL(document.referrer);
            cameFromHere = from.origin === location.origin && from.href !== location.href;
        } catch {}
        if (!cameFromHere || history.length < 2) return;
        event.preventDefault();
        history.back();
    });
}

function initializeThemeToggle() {
    const button = document.getElementById('theme-btn');
    if (!button || !window.applyTheme) return;

    const order = ['auto', 'light', 'dark'];
    const labels = { auto: 'automático', light: 'claro', dark: 'oscuro' };
    const render = () => {
        const choice = document.documentElement.dataset.themeChoice || 'auto';
        button.querySelectorAll('[data-theme-icon]').forEach(icon => icon.classList.toggle('hidden', icon.dataset.themeIcon !== choice));
        button.setAttribute('aria-label', `Tema: ${labels[choice]}`);
        button.title = `Tema: ${labels[choice]}`;
    };

    button.addEventListener('click', () => {
        const current = document.documentElement.dataset.themeChoice || 'auto';
        const next = order[(order.indexOf(current) + 1) % order.length];
        try { localStorage.setItem('theme', next); } catch {}
        window.applyTheme(next);
        render();
    });
    render();
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

document.addEventListener('DOMContentLoaded', () => {
    initializeBackLink();
    initializeBackToTop();
    initializeThemeToggle();
    initializeTranslation();
});