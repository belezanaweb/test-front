## Frontend Test

Faça um fork deste repositório e finalizar o teste, submeta um pull request para o repositório que nosso time será notificado.

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso) [Veja o Layout](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k)

**Faça quando quiser/puder (madrugada, fim de semana, etc)**

### Requerimentos

- Pixel perfect ([nesse link](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k), você pode inspecionar para ver espaçamentos, fonte, tamanho, etc)
- A aplicação precisa ser responsiva, utilizando o conceito de mobile-first. Use sua imaginação para entregar uma experiência boa no desktop.
- Renderize cada passo em uma URL única (lib de rotas).

### Passo 1 - Carrinho:

- Consuma o [esse endpoint](http://www.mocky.io/v2/5b15c4923100004a006f3c07) e liste os itens do carrinho, bem como o resumo do carrinho;
- Persista o conteúdo do JSON para ser usado nas próximas etapas;

### Passo 2 - Pagamento:

- Exiba um form com campos de cartão de crédito com validação em cada campo;
- Habilite o botão de Finalizar Pedido apenas se o form esteja válido;

### Passo 3 - Sucesso:

- Todo o conteúdo deverá ser exibido a partir dos dados persistidos;

### O que vamos avaliar:

- Organização do código;
- Mensagens (em inglês) e mudanças nos commits;
- Composição/reutilização de componentes;
- Testes unitários;
- O motivo de ter escolhido cada tech da stack;
- Como rodar sua aplicação ;)

### Diferenciais:

- Split bundle por rota (cada step ter um bundle separado para otimizar a performance);
- CSS in JS;
- React;

### Fim:

Ao finalizar o teste, submeta um pull request para o repositório que nosso time será notificado. Se tiver alguma observação, escreva no pull request.

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

- [√] Criar página de cart consumindo os componentes criados em /shared/components
- [√] Consumir endpoint para popular a página e salvar dados que serão utilizados em outra parte do fluxo na Store
- [√] Desenvolver dos testes unitários

--

### Feature - Criar a página Payment

#### User Stories

- [√] Criar página de payment consumindo os componentes criados em /shared/components
- [√] Validar do formulário usando Unform / Yup de acordo com regras de negócio
- [] Salvar dados do formulário na store
- [√] Carregar o componente de valor do resumo do pedido consumindo dados da store
- [√] Desenvolver dos testes unitários

--

### Feature - Criar a página Success

#### User Stories

- [√] Criar página de success consumindo os componentes criados em /shared/components
- [√] Carregar o componente de dados do cartão e resumo do pedido consumindo dados da store
- [√] Desenvolver dos testes unitários

### Improvments

- [] Test cover for all development files
- [] Improve form validation to not allow past years on CreditCard validation
- [] Create a StoryBook for the entire shared components folder
- [] Configure correctly build && export to create the artifacts for deploy
- [] Create a CI/CD on GitHub
- [] Improve Accessibility navigation
- [] Add some loading animations to make the experience smoothly
