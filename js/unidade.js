const searchInput = document.getElementById('searchInput');
const unitCards = document.querySelectorAll('.unit-card');
const searchButton = document.getElementById('searchButton');

function filterUnits() {
    const query = searchInput.value.toLowerCase();
    
    unitCards.forEach(card => {
        const cardTitle = card.querySelector('h2').textContent.toLowerCase();
        const cardAddress = card.querySelector('.address').textContent.toLowerCase();

        if (cardTitle.includes(query) || cardAddress.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Executa a função de filtro a cada tecla digitada
searchInput.addEventListener('keyup', filterUnits);

// Também filtra ao clicar no botão de pesquisa
searchButton.addEventListener('click', filterUnits);