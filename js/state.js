export let allUsers = [];
export let filteredUsers = [];
export let currentSort = "name";
export let currentLanguage = "all";
export let currentLimit = "all";
export let searchTerm = "";

export function setAllUsers(users) { allUsers = users; }
export function setFilteredUsers(users) { filteredUsers = users; }
export function setCurrentSort(sort) { currentSort = sort; }
export function setCurrentLanguage(lang) { currentLanguage = lang; }
export function setCurrentLimit(limit) { currentLimit = limit; }
export function setSearchTerm(term) { searchTerm = term; }