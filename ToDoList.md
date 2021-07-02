#ToDo List

## Epic

Criar uma solução de Checkout para BelezaNaWeb
Layout: https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k
API: http://www.mocky.io/v2/5b15c4923100004a006f3c07

--

### Feature - Estrutura do projeto
- [√] Monorepo com as estruturas de Projects e Shared
  - Root config:
    - [√] Babel
    - [√] Jest
    - [√] Next
  - Projects config:
    - [√] DevDependencies (StyledComponents, Axios, Formik, Yup, Testing Library, etc...)
- [] Criar READEME



### Feature - Criar uma página de Cart

#### User Stories

- [] Criar página de cart consumindo os componentes criados em /shared/components
- [] Consumir endpoint para popular a página e salvar dados que serão utilizados em outra parte do fluxo na Store
- [] Desenvolver dos testes unitários

--

### Feature - Criar a página Payment

#### User Stories

- [] Criar página de payment consumindo os componentes criados em /shared/components
- [] Validar do formulário usando Formik / Yup de acordo com regras de negócio
- [] Salvar dados do formulário na store
- [] Carregar o componente de valor do resumo do pedido consumindo dados da store
- [] Desenvolver dos testes unitários

--

### Feature - Criar a página Success

#### User Stories

- [] Criar página de success consumindo os componentes criados em /shared/components
- [] Carregar o componente de dados do cartão e resumo do pedido consumindo dados da store
- [] Desenvolver dos testes unitários