import { userGridElement, languageFilterElement } from "./dom.js";
import { filteredUsers, allUsers, setCurrentLanguage } from "./state.js";
import { filterAndRenderUsers } from "./users.js";

export function renderUsers() {
    userGridElement.innerHTML = "";
    filteredUsers.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        const imageSize = 400;
        const placeholderUrl = `https://placehold.co/${imageSize}x${imageSize}/cccccc/666666?text=${encodeURIComponent(user.name)}`;
        userCard.innerHTML = `
            <div class="user-image">
                <img src="${placeholderUrl}" alt="${user.name}" width="${imageSize}" height="${imageSize}" loading="eager" />
            </div>
            <div class="user-name">${user.name}</div>
            <div class="user-language">${user.language}</div>
            <div class="user-bio">${user.bio}</div>
            <div class="user-version">Version: ${user.version}</div>
        `;
        userGridElement.appendChild(userCard);
    });
}

export function renderLanguageFilters() {
    const languages = [...new Set(allUsers.map((user) => user.language))];
    languageFilterElement.innerHTML =
        '<button class="language-btn active" data-language="all">All Languages</button>';
    languages.forEach((language) => {
        const button = document.createElement("button");
        button.className = "language-btn";
        button.textContent = language;
        button.setAttribute("data-language", language);
        button.addEventListener("click", function () {
            document.querySelectorAll(".language-btn").forEach((btn) => {
                btn.classList.remove("active");
            });
            this.classList.add("active");
            setCurrentLanguage(this.getAttribute("data-language"));
            filterAndRenderUsers();
        });
        languageFilterElement.appendChild(button);
    });
}