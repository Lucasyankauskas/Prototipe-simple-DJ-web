


const translations = {
    es: {
        "nav.about": "SOBRE MÍ",
        "nav.contact": "CONTACTO",

        "about.title": "Biografía",
        "about.p1": "Soy un DJ y productor argentino de Buenos Aires. Mi propuesta musical parte del house y el deep house, combinando sonidos de progressive house, indie dance, tech house y minimal tech.",
        "about.p2": "En mis sets busco construir un recorrido natural, comenzando desde lugares más profundos y llevando la energía de manera gradual. Más que limitarse a un solo género, conecto diferentes sonidos manteniendo el groove, la intención y un hilo conductor a lo largo de cada presentación.",
        "about.p3": "A lo largo de mi carrera me he presentado en distintos espacios de la escena de Buenos Aires, entre ellos Afrika Club, Zegre, Downtempo, Lignéé y Morocco.",

        "contact.title": "CONTACTO",
        "contact.role": "DJ/Productor",
        "contact.name": "Nombre",
        "contact.phone": "Teléfono",
        "contact.message": "Mensaje",
        "contact.send": "Enviar",
        "contact.sending": "Enviando...",

        "events.title": "Últimas fechas",

        "footer.bookings": "Contrataciones",

        "form.errorRequired": "Completá los campos obligatorios.",
        "form.success": "¡Mensaje enviado correctamente!",
        "form.error": "No se pudo enviar el mensaje. Intentá nuevamente.",
        "form.genericError": "Hubo un error al enviar el mensaje."
    },

    en: {
        "nav.about": "ABOUT",
        "nav.contact": "CONTACT",

        "about.title": "Biography",
        "about.p1": "I am an Argentine DJ and producer from Buenos Aires. My musical approach is rooted in house and deep house, blending sounds of progressive house, indie dance, tech house and minimal tech.",
        "about.p2": "In my sets, I aim to create a natural journey, starting from deeper sounds and gradually building the energy. Rather than limiting myself to a single genre, I connect different sounds while maintaining the groove, intention and a common thread throughout each performance.",
        "about.p3": "Throughout my career, I have performed at various venues in the Buenos Aires scene, including Afrika Club, Zegre, Downtempo, Lignéé and Morocco.",

        "contact.title": "CONTACT",
        "contact.role": "DJ/Producer",
        "contact.name": "Name",
        "contact.phone": "Phone",
        "contact.message": "Message",
        "contact.send": "Send",
        "contact.sending": "Sending...",

        "events.title": "Upcoming Events",

        "footer.bookings": "Bookings",

        "form.errorRequired": "Please complete the required fields.",
        "form.success": "Message sent successfully!",
        "form.error": "Could not send your message. Please try again.",
        "form.genericError": "There was an error sending your message."
    }
};

function setLanguage(language) {
    const lang = translations[language] ? language : "es";

    document.documentElement.lang = lang;
    localStorage.setItem("siteLanguage", lang);

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll(".language-link").forEach(button => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    window.currentLanguage = lang;
    const languageInput = document.getElementById("form-language");

if (languageInput) {
    languageInput.value = lang;
}
    window.t = key => translations[window.currentLanguage][key] || key;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".language-link").forEach(button => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    setLanguage(localStorage.getItem("siteLanguage") || "es");
});