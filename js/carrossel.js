// Lógica do Carrossel de Anúncios (Atualizada)
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselDotsContainer = document.querySelector('.carousel-dots');
let currentSlideIndex = 0;
let carouselInterval;
let startX = 0; // Para o swipe
let isSwiping = false; // Para o swipe

// Função para criar os dots
function createDots() {
    carouselDotsContainer.innerHTML = ''; // Limpa os dots existentes
    carouselSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === currentSlideIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
        carouselDotsContainer.appendChild(dot);
    });
}

// Função para mostrar o slide e atualizar os dots
function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    // Atualiza o estado ativo dos dots
    const dots = document.querySelectorAll('.carousel-dots .dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
    currentSlideIndex = index;
}

// Próximo slide (usado para auto-play)
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % carouselSlides.length;
    showSlide(currentSlideIndex);
}

// Inicia o auto-play do carrossel
function startCarousel() {
    carouselInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
}

// Para o auto-play do carrossel
function stopCarousel() {
    clearInterval(carouselInterval);
}

if (carouselSlides.length > 0) {
    createDots(); // Cria os dots inicialmente
    showSlide(currentSlideIndex); // Mostra o primeiro slide
    startCarousel(); // Inicia o auto-play

    // Adiciona funcionalidade de swipe/arrastar
    carouselContainer.addEventListener('mousedown', (e) => {
        isSwiping = true;
        startX = e.clientX;
        stopCarousel(); // Para o auto-play durante o swipe
    });

    carouselContainer.addEventListener('mousemove', (e) => {
        if (!isSwiping) return;
        // Previne seleção de texto ao arrastar
        e.preventDefault(); 
    });

    carouselContainer.addEventListener('mouseup', (e) => {
        if (!isSwiping) return;
        isSwiping = false;
        const endX = e.clientX;
        const diffX = startX - endX;

        if (diffX > 50) { // Arrastou para a esquerda (próximo slide)
            currentSlideIndex = (currentSlideIndex + 1) % carouselSlides.length;
        } else if (diffX < -50) { // Arrastou para a direita (slide anterior)
            currentSlideIndex = (currentSlideIndex - 1 + carouselSlides.length) % carouselSlides.length;
        }
        showSlide(currentSlideIndex);
        startCarousel(); // Reinicia o auto-play
    });

    carouselContainer.addEventListener('mouseleave', () => {
        // Garante que o swipe pare se o mouse sair do container
        if (isSwiping) {
            isSwiping = false;
            showSlide(currentSlideIndex); // Mantém o slide atual
            startCarousel();
        }
    });

    // Para telas touch (celulares)
    carouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopCarousel();
    });

    carouselContainer.addEventListener('touchmove', (e) => {
        // Opcional: Para evitar rolagem da página durante o swipe horizontal
        // if (Math.abs(e.touches[0].clientX - startX) > 10) {
        //     e.preventDefault(); 
        // }
    });

    carouselContainer.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (diffX > 50) { // Arrastou para a esquerda (próximo slide)
            currentSlideIndex = (currentSlideIndex + 1) % carouselSlides.length;
        } else if (diffX < -50) { // Arrastou para a direita (slide anterior)
            currentSlideIndex = (currentSlideIndex - 1 + carouselSlides.length) % carouselSlides.length;
        }
        showSlide(currentSlideIndex);
        startCarousel();
    });
}