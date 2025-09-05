const searchInput = document.getElementById('searchInput');
const unitCards = document.querySelectorAll('.unit-card');
const resultsCount = document.getElementById('resultsCount');

function filterUnits() {
    const query = searchInput.value.toLowerCase();
    let visibleCount = 0;

    unitCards.forEach(card => {
        const cardTitle = card.querySelector('h2').textContent.toLowerCase();
        const cardAddress = card.querySelector('.address').textContent.toLowerCase();

        if (cardTitle.includes(query) || cardAddress.includes(query)) {
            card.style.display = 'flex'; // Exibe o cartão
            visibleCount++;
        } else {
            card.style.display = 'none'; // Esconde o cartão
        }
    });

    // Atualiza a contagem de resultados
    resultsCount.textContent = `${visibleCount} unidades encontradas`;
}

// Executa a função de filtro a cada tecla digitada
searchInput.addEventListener('keyup', filterUnits);

// Chama a função de filtro uma vez ao carregar a página para garantir a contagem inicial
document.addEventListener('DOMContentLoaded', filterUnits);