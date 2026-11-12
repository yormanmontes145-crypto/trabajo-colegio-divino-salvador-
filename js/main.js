// Menú hamburguesa responsive
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Preseleccionar nivel educativo cuando se viene desde Oferta Académica (?nivel=...)
const nivelSelect = document.getElementById('nivel');
if (nivelSelect) {
    const params = new URLSearchParams(window.location.search);
    const nivelParam = params.get('nivel');
    if (nivelParam) {
        nivelSelect.value = nivelParam;
    }
}

// Filtros interactivos de la galería
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Validación y envío del formulario de Admisiones
const admissionForm = document.getElementById('admissionForm');
if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const nivel = document.getElementById('nivel').value;
        alert(`¡Gracias ${nombre}! Su solicitud de información para ${nivel} ha sido recibida con éxito. Nos pondremos en contacto muy pronto.`);
        admissionForm.reset();
    });
}

// Validación y envío del formulario de Contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombreContacto').value;
        alert(`¡Gracias ${nombre}! Hemos recibido su mensaje y pronto responderemos a su inquietud.`);
        contactForm.reset();
    });
}

