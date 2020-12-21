# TF GB

## Pré-requisitos

- [Node >= v15.3.0](https://nodejs.org/en/)
- NPM >= v7.0.14
- [Yarn >= v1.22.5](https://yarnpkg.com/en/docs/install#linux-tab)

## Introdução

O desafio foi feito seguindo as intruções passadas, utilizando SSR (Server-Side Rendering).

Ao seguir os passos do checkout, o usuário verá os dados persistidos no estado da aplicação. Em cada etapa do checkout, se o usuário atualizar a página, os dados serão pegos novamente na API (Trazendo para o cenário real, seria a comunicação constante com a API, devido a constante mudanças ou por inatividade do usuário).

No formulário de pagamento, os dados submetidos pelo usuário, são colocados no estado aplicação. Assim, sendo possível ser acessado na navegação SPA, na página de sucesso. Caso o usuário atualize a página, os dados não se perderam, pois estão persistidos nos cookies (Apenas para apresentação de recurso para o desafio, no cenário real, acredito que o front não deveria/precisaria guardar esses dados, sendo um retorno da API na etapa de sucesso).

## Tecnologias da stack

- **TypeScript**: [Estende o JavaScript adicionando tipos e economiza tempo, detectando erros e fornecendo correções](https://www.typescriptlang.org/pt/)

- **React**: [Biblioteca para criar as interfaces do usuário](https://pt-br.reactjs.org/)
- **React Router Dom**: [Para navegação entre telas no estilo SPA](https://reactrouter.com/web/guides/quick-start)
- **Redux**: [Biblioteca JS para gerenciar o estado da aplicação](https://redux.js.org/)
- **Styled Components**: [Biblioteca para React e React Native que permite estilizar a nível de componentes (CSS in JS)](https://styled-components.com/)
- **React Hook Form**: [Bliblioteca performática para fomrulários com fácil validação](https://react-hook-form.com/)
- **Yup**: [Construtor de `schema` para análise e validação de valor](https://github.com/jquense/yup)
- **Axios**: [Cliente HTTP baseado em Promises para fazer requisições.](https://github.com/axios/axios)
- **Redux Saga**: [Ciblioteca que foca em fazer os efeitos colaterais (ex: chamadas assíncronas para buscar dados em uma API) em aplicações React/Redux serem mais fáceis e simples de se criar e manter.](https://redux-saga.js.org/)
- **Loadable**: [Para carregar as páginas sobre demanda e de forma que somente os componentes principais são carregados, e os demais quando for preciso (code splitting)](https://loadable-components.com/)
- **Card Validator**: [Validação de cartão de crédito](https://github.com/braintree/card-validator)
- **React Cookie**: [Gerenciar os cookies](https://github.com/reactivestack/cookies)
- \-\-\-\-\-\-\-\
- **Express**: [Framework para aplicações web para Node.js](https://expressjs.com/pt-br/)
- **React Helmet**: [Para manipular/mexer no Head das páginas React](https://github.com/nfl/react-helmet)
- \-\-\-\-\-\-\-\
- **Eslint**: [Linter para evitar erros na escrito do código, com grande quantidade de regras pré-definidas e é completamente customizável através de plugins](https://eslint.org/)
- **Prettier**: [Formatador de códigos com suporte a muitas linguagens e possui integração com a maioria dos editores de código](https://prettier.io/)
- **Commit Lint**: [Para validar o padrão das mensagens dos commits](https://commitlint.js.org/#/)
- \-\-\-\-\-\-\-\
- **Storybook**: [Executa paralelamente à aplicação em desenvolvimento, onde é possível ver cada componente isoladamente ou não](https://storybook.js.org/)
- \-\-\-\-\-\-\-\
- **Husky**: [Expõe uma API para utilizar os hooks do git utilizando o package.json](https://typicode.github.io/husky/#/)
- **Webpack**: [Empacotador de módulos para JS, que junta os arquivos JS e também outros formatos da sua aplicação.](https://webpack.js.org/)
- \-\-\-\-\-\-\-\
- **Jest**: [Framework de teste unitário em JS criado pelo Facebook a partir do framework Jasmine](https://jestjs.io/)
- **React Testing Library**: [Conjunto de ferramentas para testes dos componentes](https://testing-library.com/docs/react-testing-library/intro/)

## Estrutura de um componente

- index.ts
- [name].component.tsx
- [name].interface.ts
- [name].styled.tsx
- [name].test.tsx
- [name].stores.tsx

## Comandos para a avaliação do projeto

Instalar as dependências

```bash
# ou npx yarn
yarn
```

Visualizar a aplicação rodando no ambiente de produção

```bash
# ou npx yarn start:prod
yarn start:prod
# Será aberto automaticamente no navegador a URL: http://localhost:3000/carrinho/5b15c4923100004a006f3c07
```

Visualizar a aplicação rodando no ambiente de desenvolvimento

```bash
# ou npx yarn start
yarn start
# Será aberto automaticamente no navegador a URL: http://localhost:3000/carrinho/5b15c4923100004a006f3c07
```

Visualizar o storybook

```bash
# ou npx yarn storybook
yarn storybook
# Será aberto automaticamente no navegador a URL: http://localhost:9000
```

Rodar os testes

```bash
# ou npx yarn test
yarn test
```

## Dados para o formulário

- **Número**: `5132588813937988`
- **Nome**: `Hemerson Vianna`
- **Validade**: `09/2022`
- **CVV**: `473`

## Atualizar dependências

Para atualizar todas as dependências para a versão `major` mais recente, foi executado:

```bash
npx npm-check-updates -u
npm install
```

## .gitconfig

Mensagem de confirmação de `merge` no Git

```bash
[alias]
  mergelogmsg = "!f() { var=$(git symbolic-ref --short HEAD) && printf 'Merge branch %s into %s\n\n::SUMMARY::\nBranch %s commits:\n' $1 $var $1 > temp_merge_msg && git log --format=format:'%s' $var..$1 >> temp_merge_msg && printf '\n\nBranch %s commits:\n' $var >> temp_merge_msg && git log --format=format:'%s' $1..$var >> temp_merge_msg && printf '\n\n* * * * * * * * * * * * * * * * * * * * * * * * *\n::DETAILS::\n' >> temp_merge_msg && git log --left-right $var...$1 >> temp_merge_msg && git merge --no-ff --no-commit $1 && git commit -eF temp_merge_msg; rm -f temp_merge_msg;}; f"
```

## Storybook

Comando utilizado para adicionar o storybook:

```bash
npx -p @storybook/cli sb init
```

## Instruções do desafio

### Frontend Test

Faça um fork deste repositório e finalizar o teste, submeta um pull request para o repositório que nosso time será notificado.

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso) [Veja o Layout](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k)

`Faça quando quiser/puder (madrugada, fim de semana, etc)`

#### Requerimentos

- Pixel perfect ([nesse link](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k), você pode inspecionar para ver espaçamentos, fonte, tamanho, etc)
- A aplicação precisa ser responsiva, utilizando o conceito de mobile-first. Use sua imaginação para entregar uma experiência boa no desktop.
- Renderize cada passo em uma URL única (lib de rotas).

- **Passo 1 - Carrinho**:

  - Consuma o [esse endpoint](http://www.mocky.io/v2/5b15c4923100004a006f3c07) e liste os itens do carrinho, bem como o resumo do carrinho;
  - Persista o conteúdo do JSON para ser usado nas próximas etapas;

- **Passo 2 - Pagamento**:

  - Exiba um form com campos de cartão de crédito com validação em cada campo;
  - Habilite o botão de Finalizar Pedido apenas se o form esteja válido;

- **Passo 3 - Sucesso**:
  - Todo o conteúdo deverá ser exibido a partir dos dados persistidos;
- **O que vamos avaliar**:

  - Organização do código;
  - Mensagens (em inglês) e mudanças nos commits;
  - Composição/reutilização de componentes;
  - Testes unitários;
  - O motivo de ter escolhido cada tech da stack;
  - Como rodar sua aplicação ;)

- **Diferenciais**:
  - Split bundle por rota (cada step ter um bundle separado para otimizar a performance);
  - CSS in JS;
  - React;

#### Fim

Ao finalizar o teste, submeta um pull request para o repositório que nosso time será notificado. Se tiver alguma observação, escreva no pull request.
