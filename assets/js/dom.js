const menuIcon = document.querySelector('.site-nav-menu-icon');
const siteNav = document.querySelector('.site-nav');

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
