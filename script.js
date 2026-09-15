const toggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
    const closeMenu = () => {
        nav.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('menu-open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && nav.classList.contains('menu-open')) {
            closeMenu();
            toggle.focus();
        }
    });
}
