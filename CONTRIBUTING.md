# Informações Técnicas

## Stack utilizada

- Ecossistema React
  - **[React](https://reactjs.org/)** v16.8+
  - Ferramentas de desenvolvimento
    - [create-react-app](https://github.com/facebook/create-react-app)
  - Bibliotecas utilizadas pela Aplicação
    - [emotion](https://emotion.sh) - [CSS-in-JS](https://reactjs.org/docs/faq-styling.html)
    - [Reach Router](https://reach.tech/router)
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
- Testes
  - app
    - [Jest](http://facebook.github.io/jest/)
      - [React Testing Library](https://testing-library.com/react)

## Demais comandos

### `yarn clean`

Apaga arquivos não utilizados pelo projeto e dependências, deixando somente o código fonte e alguns arquivos de configuração.

### `yarn lint`

Executa o [ESLint](https://eslint.org/) nos arquivos fonte.

### `yarn fix`

Executa o **ESLint**, corrigindo alguns erros triviais em arquivos dentro da pasta `src`.

## Código de Conduta

Apesar deste projeto ser pessoal e ter um escopo fechado e que talvez não haja necessidade de desenvolvimento por terceiros/externo, ressalto que por parte pública deste projeto (apresentação) este projeto segue o código de conduta do [Contributor Covenant](https://www.contributor-covenant.org/pt-br/version/1/4/code-of-conduct).

## Contribuição

Analogamente ao ítem anterior, devido à natureza do projeto. Apesar de sugestões sempre serem bem vindas, este projeto não é bem colaborativo e sim uma avaliação. Após sua apresentação também gostaria de deixar este projeto como sem manutenção dado que já atingiu sua finalidade.

## Questões sobre o desenvolvimento

### "Caminho Feliz"

A direção tomada para este projeto foi direcionada à preocupação de funcionalidades com "caminho feliz". Casos de exceção não serão priorizados com a finalidade de fazer algo mais direcionado a uma <abbr title="Prova de Conceito">POC</abbr>.

### Arquivos não aparecendo no Visual Studio Code

Para foco de desenvolvimento, o ambiente foi configurado para esconder arquivos não diretamente relevantes à codificação.

Com a ajuda da extensão [Toggle Excluded Files](https://marketplace.visualstudio.com/items?itemName=eamodio.toggle-excluded-files) é possível alternar a visibilidade destes arquivos dentro do editor.

![Toggle Excluded Files Preview](https://raw.githubusercontent.com/eamodio/vscode-toggle-excluded-files/master/images/preview.gif)

### Estrutura de pastas

A estruturação foi baseada em padrões existentes em _frameworks_ **React** como [Next.js](https://nextjs.org/) e [Gatsby](https://www.gatsbyjs.org/), ferramentas existentes para criação de aplicações dinâmicas com <abbr title="Server Side Rendering">SSR</abbr>.

### JavaScript e não TypeScript

Acredito que TypeScript é uma ótima ferramenta para codificação colaborativa e mesmo para documentação própria do projeto, além de facilitar o desenvolvimento e ajudar na prevenção de erros. Porém há um custo maior (de tempo, inclusive) para o desenvolvimento voltado a tipagem. Para simplificar e agilizar, optei por não utilizá-lo.

### Arquivos da pasta `src/pages` nomeados em outra convenção

Dado os padrões dos _frameworks_ anteriormente citados, geralmente esta pasta contém arquivos associados à rota.

### Não ter <abbr title="Continuous Integration">CI</abbr>

Como atualmente não pago nenhum serviço que tenha disponível _Pipelines_ para projetos privados do GitHub, infelizmente este projeto não possui nenhuma ferramenta com esta finalidade. Também configurar algum serviço utilizando **Docker** como o [Jenkins](https://hub.docker.com/_/jenkins/) tomaria tempo para sua configuração dado que não possuo nada previamente pronto. Também estou evitando serviços com tempo de avaliação para evitar problemas com limites de sua utilização.

Porém o repositório possui **Git Hooks** (utilizando [Husky](https://github.com/typicode/husky)) para assegurar a qualidade deste repositório. Atualmente há 3 _Git Hooks_:

#### commit-msg

Utiliza o [commitlint](https://conventional-changelog.github.io/commitlint/) para assegurar que a mensagem de _commit_ está formatada no padrão do [Conventional Commits](https://conventionalcommits.org/).

Também há no projeto uma ferramenta que auxilia na criação da mensagem ([commitizen](https://github.com/commitizen/cz-cli))

#### pre-commit

Utiliza o [lint-staged](https://github.com/okonet/lint-staged) para rodar ferramentas como [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/). Este projeto possui configuração para as duas ferramentas e ambas possuem boa sinergia com o [MS Visual Studio Code](https://code.visualstudio.com/).

#### pre-push

Roda os testes da aplicação

#### Filosofia

Pela impossibilidade de utilizar alguma ferramenta de _Continuous Integration_ que fosse rápida sua configuração e execução, tento assegurar a qualidade do projeto utilizando estes **Git Hooks**.

Em suma, tento assegurar que:

    Não é _commitado_ código fora do padrão.
    Não sobe para o repositório principal código com testes falhos.

### Jest Snapshots

O motivo de utilizar Jest Snapshots apesar de não ser relacionado a <abbr title="Test Driven Development">TDD</abbr> é para validar manualmente o HTML gerado facilitando em questão de visualização da semântica do código gerado pela aplicação.
