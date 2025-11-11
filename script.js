// Carga datos desde data.json y genera los bloques
async function fetchData() {
    try {
        const basePath = window.location.pathname.includes('main_pages') ? '../' : '';
        const response = await fetch(basePath + 'data.json');
        return await response.json();
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
    const profilePic = document.getElementById('profile-pic');
    const descriptionBlock = document.getElementById('description');

    if (profilePic) profilePic.src = data.profile.image;
    if (descriptionBlock) descriptionBlock.textContent = data.profile.description;

    // Bloque de chips principales con acción
    const chipsContainer = document.getElementById('main-chips');
    if (chipsContainer && data.profile.chips && data.profile.chips.length > 0) {
        chipsContainer.classList.remove('hidden');

        data.profile.chips.forEach(chipData => {
            const chip = document.createElement('span');
            chip.textContent = chipData.name;
            chip.className = `px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer transition select-none`;
            chip.onclick = () => window.location.href = chipData.destination;
            chipsContainer.appendChild(chip);
        });
    }

    // Bloque de otros proyectos
    const othersBlock = document.getElementById('others-block');
    const othersTitle = document.getElementById('others-title');
    const othersContainer = document.getElementById('others-container');

    if (othersContainer && othersBlock && othersTitle && data.profile.others && data.profile.others.projects && data.profile.others.projects.length > 0) {
        othersTitle.textContent = data.profile.others.title || 'Otros proyectos';
        othersBlock.classList.remove('hidden');

        data.profile.others.projects.forEach(project => {
            const chip = document.createElement('span');
            chip.textContent = project.name;
            chip.className = `px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer transition select-none`;
            chip.onclick = () => window.open(project.destination, '_blank');
            othersContainer.appendChild(chip);
        });
    }
}

/* --- JOBS PAGE --- */
async function loadJobsData() {
    const data = await fetchData();
    if (!data) return;

    const jobsContainer = document.getElementById('jobs-container');
    const jobsTitle = document.getElementById('jobs-title');

    if (!jobsContainer || !jobsTitle) return;
    if (!data.jobs || !data.jobs.items || data.jobs.items.length === 0) return;

    jobsTitle.textContent = data.jobs.title;

    data.jobs.items.forEach(job => {
        // Bloque principal del trabajo
        const jobBlock = document.createElement('div');
        jobBlock.className = 'flex flex-col md:flex-row bg-yellow-50 shadow-md rounded-2xl overflow-hidden';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'md:w-1/3 flex-shrink-0 p-2';

        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'w-full aspect-square bg-white shadow-md rounded-xl overflow-hidden flex items-center justify-center';

        // Imagen
        const img = document.createElement('img');
        img.src = job.img;
        img.alt = job.title + ' - ' + job.company;
        img.className = 'max-w-full max-h-full object-contain';

        imgWrapper.appendChild(img);
        imgDiv.appendChild(imgWrapper);
        jobBlock.appendChild(imgDiv);

        // Contenido derecho
        const contentDiv = document.createElement('div');
        contentDiv.className = 'md:w-2/3 p-6 flex flex-col justify-center';

        const title = document.createElement('h2');
        title.className = 'text-xl font-semibold';
        title.textContent = job.title;
        contentDiv.appendChild(title);

        const company = document.createElement('p');
        company.className = 'text-sm text-gray-600 mt-1';

        let companyText = '';
        if (job.company) {
            companyText += job.company;
        }
        if (job.start_date || job.end_date) {
            if (companyText) companyText += ' | ';
            companyText += `${job.start_date || ''} - ${job.end_date || ''}`;
        }

        company.textContent = companyText;
        contentDiv.appendChild(company);

        const description = document.createElement('p');
        description.className = 'mt-2 text-gray-800';
        description.style.whiteSpace = 'pre-wrap';
        description.textContent = job.description;
        contentDiv.appendChild(description);

        // Responsabilidades y logros
        if (job.contributions && job.contributions.elements.length > 0) {
            const contributionsContainer = document.createElement('div');
            contributionsContainer.className = 'mt-4 p-4 bg-white shadow-md rounded-2xl';

            // Título del bloque
            if (job.contributions.title) {
                const contributionsTitle = document.createElement('h4');
                contributionsTitle.className = 'text-lg font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2';
                contributionsTitle.textContent = job.contributions.title;
                contributionsContainer.appendChild(contributionsTitle);
            }

            // Lista de responsabilidades
            const list = document.createElement('ul');
            list.className = 'list-disc list-inside space-y-2 text-gray-800';

            job.contributions.elements.forEach(item => {
                const li = document.createElement('li');
                li.className = 'leading-relaxed';
                li.textContent = item;
                list.appendChild(li);
            });

            contributionsContainer.appendChild(list);
            contentDiv.appendChild(contributionsContainer);
        }

        // Tech stack como chips
        if (job.tech_stack && job.tech_stack.length > 0) {
            const techContainer = document.createElement('div');
            techContainer.className = 'mt-3 p-4 bg-white shadow-md rounded-2xl flex flex-wrap gap-2';

            job.tech_stack.forEach(tech => {
                const chip = document.createElement('span');
                chip.textContent = tech;
                chip.className = `px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer transition select-none`;
                techContainer.appendChild(chip);
            });

            contentDiv.appendChild(techContainer);
        }

        jobBlock.appendChild(contentDiv);
        jobsContainer.appendChild(jobBlock);
    });
}

/* --- STUDIES PAGE--- */
async function loadStudiesData() {
    const data = await fetchData();
    if (!data) return;

    const studiesContainer = document.getElementById('studies-container');
    const studiesTitle = document.getElementById('studies-title');

    if (!studiesContainer || !studiesTitle) return;

    studiesTitle.textContent = data.studies.title;

    if (data.studies.regular.elements && data.studies.regular.elements.length > 0) {
        const regularBlock = document.getElementById('regular-block');
        const regularTitle = document.getElementById('regular-title');
        const regularContainer = document.getElementById('regular-container');

        regularTitle.textContent = data.studies.regular.title;
        regularBlock.classList.remove('hidden');

        data.studies.regular.elements.forEach(study => {
            const studyBlock = document.createElement('div');
            studyBlock.className = 'flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden';

            // Imagen
            const imgDiv = document.createElement('div');
            imgDiv.className = 'md:w-1/3 flex-shrink-0 p-2';
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'w-full aspect-square bg-white shadow-md rounded-xl overflow-hidden flex items-center justify-center';
            const img = document.createElement('img');
            img.src = study.img;
            img.alt = study.title + ' - ' + (study.company || '');
            img.className = 'max-w-full max-h-full object-contain';
            imgWrapper.appendChild(img);
            imgDiv.appendChild(imgWrapper);
            studyBlock.appendChild(imgDiv);

            // Contenido
            const contentDiv = document.createElement('div');
            contentDiv.className = 'md:w-2/3 p-4 flex flex-col justify-center';

            const title = document.createElement('h3');
            title.className = 'text-xl font-semibold';
            title.textContent = study.title;
            contentDiv.appendChild(title);

            if (study.company || study.date) {
                const company = document.createElement('p');
                company.className = 'text-sm text-gray-600 mt-1';
                let companyText = '';
                if (study.company) companyText += study.company;
                if (study.date) {
                    if (companyText) companyText += ' | ';
                    companyText += study.date;
                }
                company.textContent = companyText;
                contentDiv.appendChild(company);
            }

            studyBlock.appendChild(contentDiv);
            regularContainer.appendChild(studyBlock);
        });
    }

    if (data.studies.nonRegular.elements && data.studies.nonRegular.elements.length > 0) {
        const nonRegularBlock = document.getElementById('non-regular-block');
        const nonRegularTitle = document.getElementById('non-regular-title');
        const nonRegularContainer = document.getElementById('non-regular-container');

        nonRegularTitle.textContent = data.studies.nonRegular.title;
        nonRegularBlock.classList.remove('hidden');

        data.studies.nonRegular.elements.forEach(study => {
            const studyBlock = document.createElement('div');
            studyBlock.className = 'flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden';

            // Imagen
            const imgDiv = document.createElement('div');
            imgDiv.className = 'md:w-1/3 flex-shrink-0 p-2';
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'w-full aspect-square bg-white shadow-md rounded-xl overflow-hidden flex items-center justify-center';
            const img = document.createElement('img');
            img.src = study.img;
            img.alt = study.title + ' - ' + (study.company || '');
            img.className = 'max-w-full max-h-full object-contain';
            imgWrapper.appendChild(img);
            imgDiv.appendChild(imgWrapper);
            studyBlock.appendChild(imgDiv);

            // Contenido
            const contentDiv = document.createElement('div');
            contentDiv.className = 'md:w-2/3 p-4 flex flex-col justify-center';

            const title = document.createElement('h3');
            title.className = 'text-xl font-semibold';
            title.textContent = study.title;
            contentDiv.appendChild(title);

            if (study.company || study.date) {
                const company = document.createElement('p');
                company.className = 'text-sm text-gray-600 mt-1';
                let companyText = '';
                if (study.company) companyText += study.company;
                if (study.date) {
                    if (companyText) companyText += ' | ';
                    companyText += study.date;
                }
                company.textContent = companyText;
                contentDiv.appendChild(company);
            }

            studyBlock.appendChild(contentDiv);
            nonRegularContainer.appendChild(studyBlock);
        });
    }
}

/* --- CONTACT PAGE --- */
async function loadContactData() {
    const data = await fetchData();
    if (!data) return;

    const contactContainer = document.getElementById('contact-container');
    const contactTitle = document.getElementById('contact-title');
    const descriptionTitle = document.getElementById('contact-description');

    if (!contactContainer || !contactTitle || !descriptionTitle) return;

    contactTitle.textContent = data.contact.title;
    descriptionTitle.textContent = data.contact.description;

    if (!data.contact.elements || data.contact.elements.length === 0) return;

    const chipsContainer = document.getElementById('contact-chips');
    chipsContainer.classList.remove('hidden');

    data.contact.elements.forEach(chipData => {
        const chip = document.createElement('span');
        chip.textContent = chipData.name;
        chip.className = `px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer transition select-none`;
        chip.onclick = () => window.open(chipData.destination, '_blank');
        chipsContainer.appendChild(chip);
    });
}

/* --- PAGE SELECTION --- */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('profile-pic')) {
        loadHomeData();
    }

    if (document.getElementById('jobs-container')) {
        loadJobsData();
    }

    if (document.getElementById('studies-container')) {
        loadStudiesData();
    }

    if (document.getElementById('contact-container')) {
        loadContactData();
    }
});

/* --- BOTONES --- */
const scrollTopBtn = document.getElementById('scrollTopBtn');
const backBtn = document.getElementById('backBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // cuando se hace scroll hacia abajo
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.add('opacity-100');
    } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.remove('opacity-100');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

backBtn.addEventListener('click', () => {
    window.history.back();
});