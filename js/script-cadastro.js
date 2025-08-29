document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const selectedPlan = document.querySelector('input[name="plan"]:checked');

        if (name && email && password && selectedPlan) {
            const planName = selectedPlan.nextElementSibling.querySelector('h4').textContent;
            
            alert(`Parabéns, ${name}! Seu cadastro foi finalizado com o ${planName}. Em breve, você receberá um e-mail de confirmação.`);
            
            // Aqui é onde a lógica de envio para um servidor seria implementada
            // fetch('/api/register', {
            //     method: 'POST',
            //     body: JSON.stringify({ name, email, password, plan: selectedPlan.value })
            // }).then(response => {
            //     // ... lidar com a resposta do servidor
            // });

            // Redireciona para a página de login após o cadastro
            window.location.href = 'login.html';

        } else {
            alert('Por favor, preencha todos os campos e selecione um plano.');
        }
    });
});