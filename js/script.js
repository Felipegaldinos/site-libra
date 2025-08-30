document.addEventListener('DOMContentLoaded', () => {

    // Efeito de scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

   // Menu responsivo (hambúrguer)
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}
    // Navbar fixa ao rolar a página
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
