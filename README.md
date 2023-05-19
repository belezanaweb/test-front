## Teste de Frontend

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso) [Veja o Layout](https://www.figma.com/proto/VAOqGCWUNg13WE1t05I7xy/TestFront?page-id=15211%3A254388&node-id=15212%3A255342&viewport=415%2C484%2C0.66&scaling=min-zoom&starting-point-node-id=15212%3A254392&show-proto-sidebar=1)

![Beleza na Web](https://res.cloudinary.com/beleza-na-web/image/upload/f_svg,fl_progressive,q_auto:eco/v1/blz/assets-store/0.0.420/images/store/1/logo.svg)

### Features:
- Validação de formulario com `zod` e `react-hook-form`
- Estilização de components com `styled-components`
- Testes `Jest` e `Jest`

### Installation:

```sh
npm install
#or
yarn add
```

```sh
yarn dev
```

### Observações: 

1. Carrinho:
    - Consuma o [esse endpoint](https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd) e liste os itens, bem como o resumo;

2. Pagamento: 
    - Exiba um form com campos de cartão de crédito com validação em cada campo;
    - Habilite o botão de Finalizar Pedido apenas se o form estiver válido;

3. Sucesso: 
    - Todo o conteúdo deverá ser exibido a partir dos dados persistidos;