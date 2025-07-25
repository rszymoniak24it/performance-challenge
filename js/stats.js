import { allUsers } from "./state.js";
import { totalUsersElement, totalLanguagesElement, avgVersionElement } from "./dom.js";

export function calculateStats() {
    const totalUsers = allUsers.length;
    const languages = [...new Set(allUsers.map((user) => user.language))];
    const totalLanguages = languages.length;
    const totalVersion = allUsers.reduce((sum, user) => sum + user.version, 0);
    const avgVersion = totalUsers ? totalVersion / totalUsers : 0;
    totalUsersElement.textContent = totalUsers;
    totalLanguagesElement.textContent = totalLanguages;
    avgVersionElement.textContent = avgVersion.toFixed(2);
}