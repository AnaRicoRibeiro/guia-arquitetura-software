// ==============================
// MODO CLARO / ESCURO
// ==============================

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {

            document.documentElement.removeAttribute("data-theme");

            localStorage.setItem("theme", "light");

        } else {

            document.documentElement.setAttribute("data-theme", "dark");

            localStorage.setItem("theme", "dark");

        }

    });

}


// Recuperar tema salvo

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.documentElement.setAttribute("data-theme", "dark");

}


// ==============================
// ACCORDION
// ==============================

document.querySelectorAll(".accordion-button").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;

        item.classList.toggle("active");

    });

});


// ==============================
// IDIOMA
// ==============================

const languageButton =
    document.getElementById("languageButton");


// Função para aplicar o idioma

function applyLanguage(language) {

    document.documentElement.lang = language;

    document.documentElement.setAttribute(
        "data-language",
        language
    );


    document.querySelectorAll("[data-pt]").forEach(element => {

        if (language === "en") {

            element.innerHTML = element.dataset.en;

        } else {

            element.innerHTML = element.dataset.pt;

        }

    });


    // Alterar botão

    if (languageButton) {

        if (language === "en") {

            languageButton.textContent = "PT";

        } else {

            languageButton.textContent = "EN";

        }

    }


    // Alterar título da página

    const pageTitle =
        document.querySelector("title[data-pt]");

    if (pageTitle) {

        if (language === "en") {

            document.title = pageTitle.dataset.en;

        } else {

            document.title = pageTitle.dataset.pt;

        }

    }


    // Salvar idioma

    localStorage.setItem("language", language);

}


// Clique no botão EN / PT

if (languageButton) {

    languageButton.addEventListener("click", () => {

        const currentLanguage =
            document.documentElement.getAttribute("data-language");

        if (currentLanguage === "en") {

            applyLanguage("pt-BR");

        } else {

            applyLanguage("en");

        }

    });

}


// Recuperar idioma salvo

const savedLanguage =
    localStorage.getItem("language");

if (savedLanguage === "en") {

    applyLanguage("en");

} else {

    applyLanguage("pt-BR");

}