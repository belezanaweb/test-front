## Frontend Test


Teste prático para vaga de front-end na Beleza na Web.


## Tech Stack


* [ReactJS](https://reactjs.org/) 

É a lib de Javascript com a qual tenho mais familiaridade. Gosto da sua capacidade de criar UIs dinâmicos, minimizando a complexidade da aplicação através dos componentes. O ReactJS também possui um ecossistema grande que extende o poder de uma aplicação, como por exemplo o react-router, usado nesse projeto para gerenciar as rotas.

* [React-router](https://reacttraining.com/react-router/web/guides/philosophy)

Esse pacote do ecossistema do ReactJS facilita muito a declaração de rotas da aplicação. Para cada rota da aplicação ('/', '/payment', 'confirmation'), definimos um componente que deve ser renderizado. O react-router também permite o acesso de componentes à propriedades importantes como o `history` e `location`, usados nessa aplicação para adicionar o estilo ao header, de acordo com o pathname ativo.

* [Redux](https://redux.js.org/)

Para persistir dados através de uma aplicação, uma escolha natural (para mim pelo menos) quando se trabalha com ReactJS é o Redux. Ao renderizar o primeiro componente, utilizo o lifecycle method `componentDidMount` para chamar uma action e puxar os dados da API. Esses dados são enviados para o `store` do Redux e persistem lá até o final da aplicação. Da mesma forma, as informações do cartão de crédito são armazenadas no `store` do Redux com o auxílio do `redux-form`

* [Redux-thunk](https://github.com/reduxjs/redux-thunk)

Esse pacote evita muitos problemas ao lidar com actions asíncronos no Redux. Estava em dúvida se usava esse ou o `redux-promise`, mas acabei optando pelo `redux-thunk` para fazer dispatch das actions a cada momento do ciclo asíncrono, quando busco os dados na API (fetchBegin, fetchSuccess, fetchError)

* [Redux-form](https://redux-form.com/7.4.2/)

Esse pacote ajudou muito na hora de criar e validar os campos do formulário. Além disso, os valores de cada campo são armazenados diretamente no `store` do Redux, podendo ser acessado posteriormente por outros componentes.

* [Styled-components](https://www.styled-components.com/)

Essa é a primeira vez que uso o styled-components em um projeto. Foi relativamente fácil de usar, mas tenho certeza que não usei todo o seu potencial. Para o estilo geral, acabei usando arquivos de SCSS específicos para cada componente. O style-components só foi utilizado para adicionar estilo em elementos que exigiam uma lógica extra, como foi o caso dos headers (que deveriam indicar qual etapa do carrinho o usuário está)


## How to run

* Faça uma cópia desse projeto para o seu computador local usando o seu terminal

```
git clone git@github.com:ricardohan93/test-front.git
```

* Após o download, vá até a pasta/diretório do projeto baixado e digite o seguinte comando a fim de instalar as dependências necessárias para rodar o projeto

```
npm install
```

* Terminada a instalação das dependências, digite o seguinte comando para ver a aplicação rodando no seu ambiente local (provavelmente no localhost:3000)

```
npm start
```