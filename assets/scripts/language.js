const translations = {
    en: {
        welcome: "Welcome to Restaurant<br>Metzgertor!",
        menu: "Menu",
        wine: "Wine",
        drinks: "Drinks"
    },
    de: {
        welcome: "Willkommen im Restaurant<br>Metzgertor!",
        menu: "Speisekarte",
        wine: "Wein",
        drinks: "Getränke"
    },
    it: {
        welcome: "Benvenuto al Ristorante<br>Metzgertor!",
        menu: "Menu",
        wine: "Vini",
        drinks: "Bevande"
    },
    fr: {
        welcome: "Bienvenue au Restaurant<br>Metzgertor!",
        menu: "Menu",
        wine: "Vins",
        drinks: "Boissons"
    }
};

function toggleLanguageSelect() {
    const select = document.getElementById("language-select");
    if (select) {
        select.classList.toggle("hidden");
    }
}

function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    updateLanguage();
}

function updateLanguage() {
    const lang = localStorage.getItem("selectedLanguage") || "en";
    const t = translations[lang];
    if (!t) return;

    const h1 = document.querySelector("h1");
    if (h1) h1.innerHTML = t.welcome;

    const buttons = document.querySelectorAll(".yellow-button");
    if (buttons.length >= 3) {
        buttons[0].textContent = t.menu;
        buttons[1].textContent = t.wine;
        buttons[2].textContent = t.drinks;
    }

    const select = document.getElementById("language-select");
    if (select) select.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
    updateLanguage();
});
