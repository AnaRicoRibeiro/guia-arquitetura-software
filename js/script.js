// Modo claro/escuro
const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");

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


// Accordion
document.querySelectorAll(".accordion-button").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;

        item.classList.toggle("active");

    });

});


// Idioma
const languageButton = document.getElementById("languageButton");

if (languageButton) {

    languageButton.addEventListener("click", () => {

        const currentLanguage = document.documentElement.lang;

        if (currentLanguage === "pt-BR") {

            document.documentElement.lang = "en";

            document.querySelectorAll("[data-pt]").forEach(element => {
                element.textContent = element.dataset.en;
            });

            languageButton.textContent = "PT";

        } else {

            document.documentElement.lang = "pt-BR";

            document.querySelectorAll("[data-pt]").forEach(element => {
                element.textContent = element.dataset.pt;
            });

            languageButton.textContent = "EN";

        }

    });

}