# bnw-test-front

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://boring-northcutt-2a3760.netlify.com/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)]()

Teste de front-end arquitetado para a empresa Beleza na Web contendo 3 passos (rotas).

1. Rota de produtos no carrinho (cart).
2. Rota de pagamento onde digitamos os dados do cartao (payment).
3. Rota de sucesso ao submeter o pagamento (success).

- Caso atualize a página na segunda step ou ultima, ao inves de recarregar os dados da api que preciso volto o usuário para o começo do checkout, entendo que quando a compra foi realizada o usuário nao pode atualizar a pagina e voltar no mesmo lugar.

- O projeto esta rodando [aqui](https://boring-northcutt-2a3760.netlify.com/cart)

As rotas foram divididas em bundles diferentes usando [Lazy e Suspense](https://pt-br.reactjs.org/docs/code-splitting.html).

## Geral

Primeiramente me desculpem pelo projeto enorme, entendo que o teste é bem simples e daria para ser feito sem todas as "firulas" que pus, mas quis mostrar um pouco do meu dia-a-dia e conhecimento se tratando de arquitetura de projetos front-end com o react.

Para testes usei a lib [Cypress](https://www.cypress.io/), escolhi ela pois é a unica que tive experiencia até hoje, e para o lint usei o [eslint](https://eslint.org/) junto com o [prettier](https://prettier.io/) para padrao de escrita de código.

Fiz um [storybook](https://storybook.js.org/) com alguns componentes e exemplos criados no projeto para facilitar a vida de outros devs que precisem mexer na aplicaçao.

## Libs utilizadas

O projeto foi iniciado com o [CRA](https://github.com/facebook/create-react-app), utilizando [redux](https://www.npmjs.com/package/redux) junto ao [redux-thunk](https://www.npmjs.com/package/redux-thunk) como middleweare para gerenciamento de estados.

Utilizo o [prop-types](https://www.npmjs.com/package/prop-types) para tipar os dados retornados nos componentes.

Como lifecycle do react estou utilizando [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html), e [react-redux](https://www.npmjs.com/package/react-redux) para facilitar a conversa entra os hooks e o redux. (Utilizei classes no componente Alerta para mostrar conhecimento nos dois lifecycles, os outros componentes estao todos escritos com hooks).

Utilizo o [framer-motion](https://www.framer.com/motion/) para para fazer a animaçao da janela de alerta padrao da aplicaçao, as outras animaçoes estou utilizando a lib css [animate-css](https://daneden.github.io/animate.css/). Voces podem testar a janela de alerta mudando o endpoint para um que nao exista, assim a janela vai ser mostrada na tela assim que o erro for retornado.

Utilizo o [styled-components](https://www.npmjs.com/package/styled-components) como css in js no projeto todo, menos nos arquivos globais como libs css, fontes e style global.

Utilizei também a lib [react-input-mask](https://www.npmjs.com/package/react-input-mask) para abstrair as masks no input.

As validaçoes de cartao de credito fiz com regex, estou validando visa, master e dinners, nao utilizo libs. Os erros sao imputados no componente feitos a mao tambem.

Para a grid utilizei a lib [react-grid-system](https://www.npmjs.com/package/react-grid-system) que uso como padrao normalmente.

Para requisiçao http usei o [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch).

### Instalaçao

```
yarn
```

### Rodando Prod

Unix:

```
yarn start
```

Windows:

```
yarn start:win
```

### Rodando Dev

Unix:

```
yarn start:local
```

Windows:

```
yarn start:win:local
```

### Rodando Build

Unix:

```
yarn build
```

Windows:

```
yarn build:win
```

### Rodando Storybook

```
yarn storybook
```

### Rodando Tests

Para executar no terminal:

```
yarn test
```

Para executar no navegador:

```
yarn test:open
```

## Pre-commit

Ao tentar realizar o commit rodamos o lint (eslint, prettier), caso o lint passe o commit é realizado, caso algum lint falhe o commit é cancelado.

Pre-commit feito com husky e lint-staged.

## Deploy

No deploy da aplicaçao usei o CI do [Netlify](https://www.netlify.com/), com um repositório privado no meu github.

O build é feito automaticamente quando algum push é feito na master deste repositório.

## Consideraçoes

Espero que gostem do projeto e que eu possa ajuda-los a construir coisas legais em breve! Abraços :)
