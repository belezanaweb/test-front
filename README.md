### Beleza na Web

## O projeto

O projeto tem, como objetivo, proporcionar uma experiência de compra, a partir dos produtos na "sacola".
Dessa forma, é possível visualizar os produtos na sacola de compras, prosseguir para o pagamento e, após isso,
uma tela de confirmação com todos os produtos e valores totais.

## Como iniciar a aplicação
Para iniciar a aplicação em ambiente de desenvolvimento, execute os seguintes comandos:

* instale todas as dependências da aplicação com `npm install`
* inicie o ambiente com `npm run start`

### Stack principal
- React

### Stacks utilizadas

- react-hook-form: utilizado para o formulário de pagamento;
- react-input-mask: utilizado para inserir máscaras nos campos do formulário;
- react-number-format: responsável pela formatação de moeda em textos;
- redux: armazenador de estado da aplicação, como: dados da sacola e dados do cartão;
- react-router-dom: controlador de rotas da aplicação;
- styled-components: responsável pelo estilo dos componentes;
- prop-types: utilizado para colocar tipos nas propriedades passadas para os componentes;
- axios: responsável pela comunicação com API.

### Testes

Os testes se encontram dentro da pasta *tests*, dentro de cada componente na pasta *components*
- pacote utilizado: @testing-library/react
