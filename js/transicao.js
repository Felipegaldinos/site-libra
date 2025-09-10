document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links da página que não são links externos ou de âncora
    const pageLinks = document.querySelectorAll('a:not([href^="#"]):not([href^="http"]):not([href^="https"]):not([href^="tel"]):not([href^="mailto"])');
    const body = document.body;

    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Evita a navegação padrão imediatamente
            e.preventDefault();

            // Adiciona a classe que ativa a transição
            body.classList.add('fade-out');

            // Navega para a nova página depois que a transição terminar
            setTimeout(() => {
                window.location.href = href;
            }, 500); // 500ms (0.5s) corresponde à duração da transição no CSS
        });
    });

    // Remova a classe 'fade-out' quando a página é carregada (para transição de entrada)
    window.addEventListener('pageshow', (e) => {
        // Usa `persisted` para evitar que a animação rode ao voltar da cache do navegador
        if (e.persisted) {
            body.classList.remove('fade-out');
        }
    });
});