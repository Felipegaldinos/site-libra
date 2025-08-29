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
    // Lógica do Carrossel de Anúncios
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlideIndex = 0;
let carouselInterval;

function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % carouselSlides.length;
    showSlide(currentSlideIndex);
}

function startCarousel() {
    carouselInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

if (carouselSlides.length > 0) {
    showSlide(currentSlideIndex);
    startCarousel();

    prevBtn.addEventListener('click', () => {
        stopCarousel();
        currentSlideIndex = (currentSlideIndex - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(currentSlideIndex);
        startCarousel();
    });

    nextBtn.addEventListener('click', () => {
        stopCarousel();
        nextSlide();
        startCarousel();
    });
}
});
