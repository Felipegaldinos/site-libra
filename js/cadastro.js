document.addEventListener('DOMContentLoaded', () => {
   // Dados dos planos para cada unidade
const planosPorUnidade = {
    'itapetinga': [
        {
            nome: 'Plano Mensal',
            preco: '89,90',
            desc: ['Musculação', '+ 2 Modalidades'],
            popular: false
        },
        {
            nome: 'Pacote Completo',
            preco: '99,90',
            desc: ['Todas as Modalidades'],
            popular: true
        },
        {
            nome: 'Pacote Dupla',
            preco: '79,90',
            desc: ['Musculação', '+ 2 Modalidades', 'Válido por pessoa'],
            popular: false
        },
        {
            nome: 'Pacote Família',
            preco: '69,90',
            desc: ['Musculação', '+ 2 Modalidades', 'Válido por pessoa (3 Pessoas)'],
            popular: false
        }
    ],
    'saogoncalo': [
        {
            nome: 'Plano Mensal',
            preco: '59,90',
            desc: ['Musculação'],
            popular: false
        },
        {
            nome: 'Pacote com Modalidades',
            preco: '69,90',
            desc: ['Musculação', '+ 2 Modalidades'],
            popular: true
        },
        {
            nome: 'Pacote Dupla',
            preco: '54,90',
            desc: ['Musculação', '+ 2 Modalidades', 'Válido por pessoa'],
            popular: false
        },
        {
            nome: 'Pacote Família',
            preco: '49,90',
            desc: ['Musculação', 'Válido por pessoa (3 pessoas ou mais)'],
            popular: false
        },
        {
            nome: 'Pacote Modalidade',
            preco: '49,90',
            desc: ['Direito a uma modalidade'],
            popular: false
        }
    ],
    'nossasenhora': [
        {
            nome: 'Plano Flex',
            preco: '90',
            desc: ['Acesso ilimitado à unidade.', 'Treinos no App'],
            popular: false
        },
        {
            nome: 'Plano Total',
            preco: '130',
            desc: ['Acesso ilimitado à unidade.', 'Aulas coletivas (funcional, abdominal, etc.)', 'Personal incluído'],
            popular: true
        }
    ]
};

    const cadastroFormSection = document.getElementById('cadastro-form-section');
    const unidadeSection = document.getElementById('unidade-section');
    const planosSection = document.getElementById('planos-section');
    const registrationForm = document.getElementById('registration-form');
    const pricingTable = document.querySelector('.pricing-table');

    // Mapeia o clique do botão "Prosseguir" no formulário de cadastro
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Adicione aqui a validação de campos
        const nome = document.getElementById('name').value;
        const sobrenome = document.getElementById('surname').value;
        const email = document.getElementById('email').value;

        // Verifica se os campos essenciais foram preenchidos
        if (nome && sobrenome && email) {
            mostrarSecao('unidade-section');
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

    // Mapeia cliques nos botões de unidade
    document.querySelectorAll('.btn-unit').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const unidade = e.currentTarget.dataset.unidade;
            renderizarPlanos(unidade);
            mostrarSecao('planos-section');
        });
    });

    // Mapeia cliques nos botões de voltar
    document.querySelectorAll('.back-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget.dataset.target;
            mostrarSecao(target);
        });
    });

    // Mapeia cliques nos botões de Assinar
    pricingTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-subscribe')) {
            e.preventDefault();
            const planoEscolhido = e.target.dataset.plano;
            // Aqui você pode redirecionar para a página de pagamento
            console.log(`Plano escolhido: ${planoEscolhido}`);
            alert(`Você escolheu o plano ${planoEscolhido}. Você será redirecionado para a página de pagamento.`);
        }
    });

    // Função para mostrar a seção correta e esconder as outras
    function mostrarSecao(secaoId) {
        cadastroFormSection.classList.add('hidden');
        unidadeSection.classList.add('hidden');
        planosSection.classList.add('hidden');

        document.getElementById(secaoId).classList.remove('hidden');
        document.getElementById(secaoId).classList.add('visible');
    }

    // Função para renderizar os planos na tela
    function renderizarPlanos(unidade) {
        const planos = planosPorUnidade[unidade];
        pricingTable.innerHTML = ''; // Limpa o conteúdo
        planos.forEach(plano => {
            const isPopular = plano.popular ? 'featured' : '';
            const badge = plano.popular ? `<span class="highlight">Mais Popular</span>` : '';
            const features = plano.desc.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('');

            const planCard = `
                <div class="plan-card ${isPopular}">
                    ${badge}
                    <h3>${plano.nome}</h3>
                    <p class="price">R$ ${plano.preco}<span>/mês</span></p>
                    <ul class="features">
                        ${features}
                    </ul>
                    <a href="#" class="btn-subscribe" data-plano="${plano.nome.toLowerCase().replace(/\s/g, '-')}">Assinar</a>
                </div>
            `;
            pricingTable.innerHTML += planCard;
        });
    }
});