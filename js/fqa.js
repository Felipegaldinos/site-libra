// Lógica para o FAQ (Accordion)
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');
    const content = item.querySelector('.accordion-content');

    button.addEventListener('click', () => {
        // Fecha todos os outros itens
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                const otherButton = otherItem.querySelector('.accordion-button');
                const otherContent = otherItem.querySelector('.accordion-content');
                
                otherButton.classList.remove('active');
                otherContent.style.maxHeight = null;
            }
        });

        // Alterna o estado do item clicado
        button.classList.toggle('active');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});