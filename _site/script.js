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

document.addEventListener('DOMContentLoaded', () => {
    initializeBackToTop();
    initializeTranslation();
});