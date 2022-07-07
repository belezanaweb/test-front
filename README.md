# Beleza na Web

## O projeto

O projeto tem, como objetivo, proporcionar uma experiência de "sacola" de produtos.
Dessa forma, é possível visualizar os produtos na sacola de compras, prosseguir para o pagamento e, após isso,
uma tela de confirmação com todos os produtos e valores totais.

## Como iniciar a aplicação

Para iniciar a aplicação em ambiente de desenvolvimento, execute os seguintes comandos:

- instale todas as dependências da aplicação com `npm install`
- inicie o ambiente com `npm run start`

## Stacks principais

- React
- TypeScript
  - utilizado para evitar problemas de tipagem no momento de desenvolvimento e para definir os tipos das propriedades e funções de cada componente do projeto.
- Context API
  - utilizado para compartilhar dados dos componentes entre si e evitar o prop drilling;
  - o não uso de Redux foi definido pelas poucas alterações de estado e a falta de complexidade para armazenar os dados. Context API possui uma simplicidade maior para fazer esse compartilhamento e também não foi necessário instalar uma biblioteca.

## Stacks utilizadas

- react-hook-form: utilizado para o formulário de pagamento;
- react-router-dom: controlador de rotas da aplicação;
- styled-components: responsável pelo estilo dos componentes, css global e definição do tema da aplicação;
- axios: responsável pela comunicação com API.
- msw (mock server worker): em requisições durante os testes, essa biblioteca cuidará de interceptar e retornar dados locais. Também funciona com outras bibliotecas que realizam requisições.

## Dev experience

- Eslint
  - para validações do código e checar possíveis problemas.
- Prettier
  - estilização do código seguindo as configurações da Airbnb.
- Commitizen
  - padronização de mensagens de commit.
- Husky
  - verificação de possíveis erros de código antes do commit ser feito.

## Testes

Cada componente tem o seu teste dentro de sua própria pasta.

- para rodar os testes, basta rodar `npm run test` e irá trazer a cobertura de todos eles.

* pacote utilizado: @testing-library/react
