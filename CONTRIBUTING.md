# Informações Técnicas

## Stack utilizada

- Ecossistema React
  - **[React](https://reactjs.org/)** v16.8+
  - Ferramentas de desenvolvimento
    - [create-react-app](https://github.com/facebook/create-react-app)
    - [Storybook for React](https://storybook.js.org/)
  - Bibliotecas utilizadas pela Aplicação
    - [emotion](https://emotion.sh) - [CSS-in-JS](https://reactjs.org/docs/faq-styling.html)
    - [Reach Router](https://reach.tech/router)
  - Outras bibliotecas
    - [react-credit-card-primitives](https://github.com/ajoslin/react-credit-card-primitives)
- Coding Style
  - [Standard JavaScript Style](https://standardjs.com/)
  - [Conventional Commits](https://conventionalcommits.org/)
  - Ferramentas
    - [Prettier](https://prettier.io/)
- Editor
  - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
- CSS Reset
  - [minireset.css](https://jgthms.com/minireset.css/)
- Workflow
  - [Yarn](http://yarnpkg.com/)
  - [Husky](https://github.com/typicode/husky)
  - [lint-staged](https://github.com/okonet/lint-staged)
  - [commitlint](https://conventional-changelog.github.io/commitlint/)
  - [Travis CI](https://travis-ci.org/)
- Testes
  - app
    - [Jest](http://facebook.github.io/jest/)
      - [React Testing Library](https://testing-library.com/react)
  - e2e
    - [Cypress](https://www.cypress.io/)

**Aviso: este projeto contém pacotes e/ou funcionalidades não estáveis.**

## Demais comandos

### `yarn clean`

Apaga arquivos não utilizados pelo projeto e dependências, deixando somente o código fonte e alguns arquivos de configuração.

### `yarn lint`

Executa o [ESLint](https://eslint.org/) nos arquivos fonte.

### `yarn fix`

Executa o **ESLint**, corrigindo alguns erros triviais em arquivos dentro da pasta `src`.

### `yarn coverage`

Roda o Jest coletando a cobertura de código dos testes.

### `yarn test:e2e`

Executa a aplicação em modo de desenvolvimento e roda os testes _end-to-end_ utilizando o **Cypress**.

## Código de Conduta

Apesar deste projeto ser pessoal e ter um escopo fechado e que talvez não haja necessidade de desenvolvimento por terceiros/externo, ressalto que por parte pública deste projeto (apresentação) este projeto segue o código de conduta do [Contributor Covenant](https://www.contributor-covenant.org/pt-br/version/1/4/code-of-conduct).

## Contribuição

Analogamente ao ítem anterior, devido à natureza do projeto. Apesar de sugestões sempre serem bem vindas, este projeto não é bem colaborativo e sim uma avaliação. Após sua apresentação também gostaria de deixar este projeto como sem manutenção dado que já atingiu sua finalidade.

## Questões sobre o desenvolvimento

### "Caminho Feliz"

A direção tomada para este projeto foi direcionada à preocupação de funcionalidades com "caminho feliz". Casos de exceção não serão priorizados com a finalidade de fazer algo mais direcionado a uma <abbr title="Prova de Conceito">POC</abbr>.

### SKIP_PREFLIGHT_CHECK=true

Após a instalação do **storybook**, este instalou uma versão mais atual do pacote `babel-loader`, fazendo-se necessário passar tal argumento na hora de rodar os scripts `start` e `build`.

### Utilizar uma biblioteca existente para Cartão de Crédito

Optei por utilizar o [react-credit-card-primitives](https://github.com/ajoslin/react-credit-card-primitives) pois já tive problemas com máscaras e validações de cartões manualmente (alguns possuem inclusive diferente formatação de número, como no caso de cartões American Express e Diners Club).

### Arquivos não aparecendo no Visual Studio Code

Para foco de desenvolvimento, o ambiente foi configurado para esconder arquivos não diretamente relevantes à codificação.

Com a ajuda da extensão [Toggle Excluded Files](https://marketplace.visualstudio.com/items?itemName=eamodio.toggle-excluded-files) é possível alternar a visibilidade destes arquivos dentro do editor.

![Toggle Excluded Files Preview](https://raw.githubusercontent.com/eamodio/vscode-toggle-excluded-files/master/images/preview.gif)

### Estilos e _Typeface_

Como visto no layout desenhado, o projeto utiliza uma familia proprietária (Neue Helvetica®) como base. Não sendo possível manter esta consistência (utilizar a mesma fonte para diversos aparelhos e sistemas operacionais) pois não utilizarei esta fonte diretamente e também não está disponível para utilização usando o serviço do **Google Fonts**, optei por manter o código que já existia anteriormente definindo a família tipográfica, localizada no arquivo `src/index.css` (movido para `src/styles/typography.css`).

### _Pixel Perfect_

Sou pessoalmente contra em fazer layouts em _Pixel Perfect_ pois diversas vezes podem ocorrer inconsistências em relação ao _layout_ estático (imagem) e o _layout_ programado. Também faz-se necessárias vários ajustes _hardcoded_ em relação a espaçamentos e disposição de ítens para satisfazer tal desenvolvimento, sempre tendo discrepâncias em relação ao esperado pois há muitas variáveis durante o desenvolvimento como diferenças de renderização entre diversos navegadores ou até mesmo dentre Sistemas Operacionais. Como o layout foi desenvolvido em um ambiente Linux, haverá certas disparidades em relação ao uso de fonte proprietária pela Apple, escolhida como principal pelo layout estático.

### JavaScript e não TypeScript

Acredito que TypeScript é uma ótima ferramenta para codificação colaborativa e mesmo para documentação própria do projeto, além de facilitar o desenvolvimento e ajudar na prevenção de erros. Porém há um custo maior (de tempo, inclusive) para o desenvolvimento voltado a tipagem. Para simplificar e agilizar, optei por não utilizá-lo.

### Falta de especificação e "bagunça" no nome de _branches_

Reconheço que é uma deficiência minha não ter especificado o projeto antes de sua concepção (_coding_). Isto refletiu em nomes de branches pouco simbólicos e uma _correria_ no final do projeto para adicionar os débitos. Porém também penso sempre na evolução do projeto, tentar sempre melhorar a cada _commit_, não só adicionando funcionalidades quanto também sempre melhorar código e ferramentas do projeto.

### Testes

Não segui [<abbr title="Test-Driven Development">TDD</abbr>](https://martinfowler.com/bliki/TestDrivenDevelopment.html). A maioria dos testes foram focados em _Snapshots_ e testes comportamentais utilizando _Jest_, principalmente para evitar erros durante renderização de componentes.

#### Jest Snapshots

O motivo de utilizar Jest Snapshots é para validar manualmente o HTML gerado facilitando em questão de visualização da semântica do código gerado pela aplicação, validando manualmente se o HTML é semântico e válido.

#### end-to-end

Adicionei no final do projeto utilizando [Cypress](https://www.cypress.io/). Não acho correto porém como não especifiquei o projeto no começo, senti falta em adicioná-lo antes de entregar.

Também adiciono que é necessário estar _online_ pois para os testes _e2e_ faço chamadas para a API, que requer estar conectado à Internet.

### Continuous Integration

Este repositório está configurado com o [Travis](https://travis-ci.org/) com uma conta gratuita para utilização em projetos públicos no Github.

No momento rodo apenas testes básicos, não incluo _deploy_ por esta ferramenta pois o próprio [Netlify](https://www.netlify.com/) possui uma integração própria com o **Github** de fácil implementação.

Nos testes básicos asseguro:

- que o código está formatado de acordo com as regras do **ESLint**;
- realizo testes utilizando o **Jest**;
- realizo o _build_ para validar que a aplicação não quebre durante este processo e
- realizo testes _end-to-end_ utilizando o **Cypress**

O repositório também possui **Git Hooks** (utilizando [Husky](https://github.com/typicode/husky)) para assegurar a qualidade deste repositório. Atualmente há 3 _Git Hooks_:

#### commit-msg

Utiliza o [commitlint](https://conventional-changelog.github.io/commitlint/) para assegurar que a mensagem de _commit_ está formatada no padrão do [Conventional Commits](https://conventionalcommits.org/).

Também há no projeto uma ferramenta que auxilia na criação da mensagem ([commitizen](https://github.com/commitizen/cz-cli))

#### pre-commit

Utiliza o [lint-staged](https://github.com/okonet/lint-staged) para rodar ferramentas como [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/). Este projeto possui configuração para as duas ferramentas e ambas possuem boa sinergia com o [MS Visual Studio Code](https://code.visualstudio.com/).

#### pre-push

Roda os testes da aplicação (não executa os testes _<abbr title="end-to-end">e2e</abbr>_)

#### Filosofia

Pela impossibilidade de utilizar alguma ferramenta de _Continuous Integration_ que fosse rápida sua configuração e execução, tento assegurar a qualidade do projeto utilizando estes **Git Hooks**.

Em suma, tento assegurar que:

    Não é _commitado_ código fora do padrão.
    Não sobe para o repositório principal código com testes falhos.

### Por que _Yarn_?

Apesar das evoluções do [npm](https://www.npmjs.com/), por uma escolha pessoal decidi utilizar o [Yarn](https://yarnpkg.com/) pois gosto de algumas funcionalidades exclusivas deste gerenciador de pacotes.

Mesmo recomendando-o como padrão, todos os scripts estão adaptados para serem utilizados tanto com **yarn** quanto com o **npm**.

#### Offline Mirror

Uma funcionalidade neste repositório que deixei como _opcional_ é o [Offline Mirror](https://yarnpkg.com/blog/2016/11/24/offline-mirror/). Para utilizá-lo, basta rodar o seguinte comando:

```
$ cp .yarnrc.example .yarnrc
```
