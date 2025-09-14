// ===============================
// NAVIGATION JAVASCRIPT - FIXED
// ===============================

// Mobile navigation toggle
const CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

if (CShamburgerMenu) {
    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        ariaExpanded();
    });
}

// Checks the value of aria expanded on the cs-ul and changes it accordingly
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    if (csUL) {
        const csExpanded = csUL.getAttribute('aria-expanded');
        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }
}

// SCROLL EFFECT - FIXED VERSION (Replace your existing scroll code with this)
function handleNavScroll() {
    const nav = document.querySelector("#cs-navigation");
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

// Throttle scroll events for better performance
let navTicking = false;
function requestNavTick() {
    if (!navTicking) {
        requestAnimationFrame(handleNavScroll);
        navTicking = true;
    }
    navTicking = false;
}

window.addEventListener('scroll', requestNavTick);

// Initial call
handleNavScroll();