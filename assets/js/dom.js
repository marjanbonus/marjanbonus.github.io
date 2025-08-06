const menuIcon = document.querySelector('.site-nav-menu-icon');
const siteNav = document.querySelector('.site-nav');
const pageContent = document.querySelector('.page-content');

menuIcon.addEventListener('click', e => {
    siteNav.classList.remove('hidden');
    siteNav.classList.toggle('visible');
    menuIcon.classList.toggle('close');

    if (!siteNav.classList.contains('visible')) {
        setTimeout(() => {
            siteNav.classList.add('hidden');
        }, 200);
    }

});

document.addEventListener('DOMContentLoaded', function () {
    pageContent.classList.add('loaded');
}, false);
