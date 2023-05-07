




https://user-images.githubusercontent.com/13953703/236662510-69c47b59-87cc-45ab-9943-2727b2b4f381.mov




## Start the project
1. Install dependencies

```
npm i
```

2. Run in dev mode

```
npm run dev
```

## Tech Stack
- typescript
- turbo repo
- vite
- tailwind (mobile-first)
- tanstack query
- storybook
- react-hook-form
- context api
- zod
- testing-library
- msw
- github actions

## Talwind Intellisense

- Go to your VS Code settings and add the following Tailwind class regex config

```json
"tailwindCSS.experimental.classRegex": [
  ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
]
```

## Challenge Description (pt-br)

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso) [Veja o Layout](https://www.figma.com/proto/VAOqGCWUNg13WE1t05I7xy/TestFront?page-id=15211%3A254388&node-id=15212%3A255342&viewport=415%2C484%2C0.66&scaling=min-zoom&starting-point-node-id=15212%3A254392&show-proto-sidebar=1)

### Requerimentos:

- Pixel perfect ([nesse link](https://www.figma.com/file/VAOqGCWUNg13WE1t05I7xy/TestFront?node-id=15211%3A254388&t=2A5yzAbeVSPYi4sw-1), você pode inspecionar para ver espaçamentos, fonte, tamanho, etc)
- A aplicação precisa ser responsiva, utilizando o conceito de mobile-first. Use sua imaginação para entregar uma experiência boa no desktop.

### Observações:

1. Carrinho:

   - Consuma o [esse endpoint](https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd) e liste os itens, bem como o resumo;

2. Pagamento:

   - Exiba um form com campos de cartão de crédito com validação em cada campo;
   - Habilite o botão de Finalizar Pedido apenas se o form estiver válido;

3. Sucesso:
   - Todo o conteúdo deverá ser exibido a partir dos dados persistidos;

### O que iremos avaliar:

- Organização do código;
- Mensagens e mudanças nos commits;
- Composição/reutilização de componentes;
- Testes unitários;
- O motivo de ter escolhido cada tech da stack;

### Fim:

Ao finalizar o teste, **publique o seu projet em alguma url (vercel, netlify, surge, etc)** e crie pull request para o repositório que nosso time será notificado. Se tiver alguma observação, escreva no corpo pull request, por favor.

Boa sorte! 🚀
