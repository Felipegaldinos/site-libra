# Libra Prime

Site de academia com páginas de apresentação e cadastro e escolha de unidade e plano.

## Recursos

Renderização de opções de planos conforme a unidade selecionada em JavaScript.

## Tecnologias

HTML, CSS e JavaScript; sem etapa de build npm na estrutura analisada.

## Executar localmente

Sirva os arquivos por HTTP; uma opção com Python 3 instalado:

```sh
git clone https://github.com/Felipegaldinos/site-libra.git
cd site-libra
python -m http.server 8000
```

Abra http://localhost:8000. Recursos de terceiros, quando usados, exigem conexão com a internet.

## Onde começar no código

- `index.html` — ponto de entrada para entender o projeto.

## Estado atual

Os planos são definidos no JavaScript. A seleção exibida não comprova assinatura, cobrança ou autenticação integradas. Revise o fluxo antes do uso real.

## Autoria

[Felipe Galdino](https://github.com/Felipegaldinos). Consulte os arquivos do repositório para os termos de licença aplicáveis.
