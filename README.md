# TF GB

## Pré-requisitos

- [Node = v15.3.0](https://nodejs.org/en/)
- NPM >= v7.0.14
- [Yarn >= v1.22.5](https://yarnpkg.com/en/docs/install#linux-tab)

## Atualizar dependências

Para atualizar todas as dependências para sua versão `major` mais recente, foi executado:

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

## Stacks

- Typescript

- React
- React Router Dom
- Redux
- Styled Components
- Stylelint Processor Styled Components
- React Hook Form
- Axios
- React Helmet

- Express

- Eslint
- Prettier

- Storybook

- Husky
- Webpack

- Jest
- React Testing Library
- Cypress

## Instruções

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
