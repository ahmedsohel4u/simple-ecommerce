let hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-link');
const crossIcon = document.querySelector('.cross-icon')

if(hamburger) {
    hamburger.addEventListener('click', (e) => {
        navLink.style.display = 'block';
    });
};

if(crossIcon) {
    crossIcon.addEventListener('click', (a) => {
        navLink.style.display = 'none';
    });
};