document.addEventListener('DOMContentLoaded', () => {
    // Código existente do toggleMenu...
    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }

    // Código para o Carrossel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.depoimento-card');

    // Verifica se há cards antes de tentar acessar suas propriedades
    if (cards.length === 0) {
        console.warn("Nenhum .depoimento-card encontrado para o carrossel.");
        return; // Sai se não houver cards
    }

    let currentIndex = 0;
    let cardWidth; // Definiremos isso em uma função para reagir ao resize

    // Função para calcular a largura total do card, incluindo margens
    function calculateCardWidth() {
        const cardStyle = getComputedStyle(cards[0]);
        const cardMarginLeft = parseFloat(cardStyle.marginLeft);
        const cardMarginRight = parseFloat(cardStyle.marginRight);
        return cards[0].offsetWidth + cardMarginLeft + cardMarginRight;
    }

    // Função para atualizar a posição do carrossel
    function updateCarouselPosition() {
        cardWidth = calculateCardWidth(); // Recalcula a largura sempre que a posição é atualizada
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Função para mover para o próximo depoimento
    function moveToNextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarouselPosition();
    }

    // Função para mover para o depoimento anterior
    function moveToPrevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarouselPosition();
    }

    // Inicializa a posição do carrossel e o intervalo
    updateCarouselPosition(); // Define a posição inicial correta
    let intervalId = setInterval(moveToNextCard, 4000);

    // Parar a passagem automática ao passar o mouse sobre o carrossel
    track.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    // Reiniciar a passagem automática ao tirar o mouse
    track.addEventListener('mouseleave', () => {
        intervalId = setInterval(moveToNextCard, 4000);
    });

    // Event listeners para os botões de navegação
    nextBtn.addEventListener('click', () => {
        moveToNextCard();
        clearInterval(intervalId);
        intervalId = setInterval(moveToNextCard, 4000);
    });

    prevBtn.addEventListener('click', () => {
        moveToPrevCard();
        clearInterval(intervalId);
        intervalId = setInterval(moveToNextCard, 4000);
    });

    // Atualiza a largura do card e a posição do carrossel caso a tela mude de tamanho
    window.addEventListener('resize', () => {
        updateCarouselPosition();
    });
});