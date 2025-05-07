// null for home
var activeSection = null

function updateNavigation() {
    if (window.location.hash) {
        activeSection = window.location.hash.substring(1); // remove #
    }
    setActiveLink(activeSection);
    switchToSection(activeSection);
}

function setActiveLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-side-links li a');

    navLinks.forEach(link => {
        // get href value and select the section after #
        const currentId = link.getAttribute('href').split('#')[1];
        // disable SPA like toggling of sections
        /*
        if (currentId == activeId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }*/
    });
}

function switchToSection(activeId) {
    const sections = document.querySelectorAll('.sections .js-content');

    sections.forEach(section => {
        const currentId = section.getAttribute('id');
        console.log(currentId);
        /*
        if (currentId == activeId) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }*/
    });
}

window.addEventListener('hashchange', updateNavigation);
document.addEventListener('DOMContentLoaded', updateNavigation);
