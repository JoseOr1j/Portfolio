/* Time js changes the date at the footer, saves time by not needing to manually edit every page */
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("year");
yearElement.textContent = currentYear;