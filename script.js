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

// Scroll reveal + terminal typing; skipped entirely when the user prefers reduced motion.
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js');
    document.querySelectorAll('.ujust-card :is(h3, li)').forEach((line, i) => line.style.setProperty('--i', i));
    const observer = new IntersectionObserver(entries => {
        entries.filter(entry => entry.isIntersecting).forEach(entry => {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -15% 0px' });
    document.querySelectorAll('main > section:not(.hero)').forEach(section => observer.observe(section));
}
