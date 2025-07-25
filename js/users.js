import { setAllUsers, setFilteredUsers, allUsers, currentSort, currentLanguage, currentLimit, searchTerm, filteredUsers } from "./state.js";
import { loadingElement, loadTimeElement } from "./dom.js";
import { renderUsers, renderLanguageFilters } from "./render.js";
import { calculateStats } from "./stats.js";

export async function fetchUsers() {
    const startTime = performance.now();
    try {
        const response = await fetch("https://microsoftedge.github.io/Demos/json-dummy-data/128KB.json");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setAllUsers(data);
        setFilteredUsers([...data]);
        calculateStats();
        renderUsers();
        renderLanguageFilters();
        const endTime = performance.now();
        loadTimeElement.textContent = `${Math.round(endTime - startTime)}ms`;
        loadingElement.style.display = "none";
    } catch (error) {
        console.error("Error fetching users:", error);
        loadingElement.style.display = "none";
    }
}

export function filterAndRenderUsers() {
    let filtered = [...allUsers];
    if (searchTerm) {
        filtered = filtered.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    if (currentLanguage !== "all") {
        filtered = filtered.filter((user) => user.language === currentLanguage);
    }
    filtered.sort((a, b) => {
        switch (currentSort) {
            case "name":
                return a.name.localeCompare(b.name);
            case "language":
                return a.language.localeCompare(b.language);
            case "version":
                return b.version - a.version;
            default:
                return 0;
        }
    });
    if (currentLimit !== "all") {
        filtered = filtered.slice(0, parseInt(currentLimit));
    }
    setFilteredUsers(filtered);
    renderUsers();
}