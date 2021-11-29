
# Frontend Test

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso).




## O teste precisa seguir os itens

- Pixel perfect
- A aplicação precisa ser responsiva, utilizando o conceito de mobile-first.
- Renderize cada passo em uma URL única (lib de rotas).


## Para ver as telas, clique no link

(https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k)


## Carrinho:

- Consuma o endpoint (http://www.mocky.io/v2/5b15c4923100004a006f3c07) e liste os itens do carrinho, bem como o resumo do carrinho;
- Persista o conteúdo do JSON para ser usado nas próximas etapas;
## Pagamento:

- Exiba um form com campos de cartão de crédito com validação em cada campo;
- Habilite o botão de Finalizar Pedido apenas se o form esteja válido;
## Sucesso:
- Todo o conteúdo deverá ser exibido a partir dos dados persistidos;
## Instalação

Para instalar o projeto, faça o clone e entre na pasta 

```bash
  yarn
  yarn start
```

O projeto rodará em http://localhost:3000
## Storybook

Para abrir o storybook e visualizar os componentes

```bash
  yarn storybook
```

## Para este teste, foram usadas as seguintes tecnologias

 - [typescript](https://www.typescriptlang.org)
 - [styled components](https://styled-components.com)
 - [storybook](https://storybook.js.org)


