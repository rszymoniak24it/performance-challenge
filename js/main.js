import { searchInputElement, sortSelectElement, limitSelectElement, loadingElement } from "./dom.js";
import { setCurrentSort, setCurrentLimit, setSearchTerm } from "./state.js";
import { fetchUsers, filterAndRenderUsers } from "./users.js";

function initializeApp() {
    loadingElement.style.display = "block";
    fetchUsers();
    console.log("App initialized");
}

searchInputElement.addEventListener("input", function (e) {
    setSearchTerm(e.target.value);
    filterAndRenderUsers();
});
sortSelectElement.addEventListener("change", function (e) {
    setCurrentSort(e.target.value);
    filterAndRenderUsers();
});
limitSelectElement.addEventListener("change", function (e) {
    setCurrentLimit(e.target.value);
    filterAndRenderUsers();
});

window.addEventListener("load", initializeApp);