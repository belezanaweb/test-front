## Frontend Test

Desafio para vaga de frontend na empresa Beleza na Web 

## Stack

Tenho trabalhado a mais ou menos 2 anos com React e é uma excelente lib javascript, de todas que 
já utilizei é a que mais gosto pela produtividade que se ganha no desenvolvimento e pela sua simplicidade além de uma enorme comunidade, React tem dominado o desenvolvimento frontend.

* [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) 

Lib para lidar com as rotas no React, fornece recursos poderosos, não só facilitando o desenvolvimento como otimizando também.


* [Axios](https://github.com/axios/axios)

Lib Http client baseada em promisses, gosto de usar o axios por questão de familiaridade e algumas vatagens sobre a fetch api.

* [Redux](https://redux.js.org/)

Redux é a escolha natural no universo do React, é um container (store) de estados da aplicação, excelente framework, facilita muito o trabalho trazendo produtividade, consistência e robustez na aplicação.


* [Redux Saga](https://redux-saga.js.org/)

Comecei a usar essa lib a pouco tempo em alternativa ao redux thunk e estou gostando muito, ela permite organizar as chamadas assíncronas serem distribuídas através de operações baseadas em Sagas e ES6 Function Generators.


* [Formik](https://github.com/jaredpalmer/formik)

Formik é uma excelente lib e muito pequena que ajuda nas principais partes para se trabalhar com formulários, uso em alternativa ao redux form que também ajuda muito no desenvolviento mas não sou muito fan de libs que encapsulam demais e tentam fazer mágica além de manter os estados do form direto no redux o que não acho muito interessante.

* [Styled Components](https://www.styled-components.com/)

Essa lib é demais, leva a estilização para outro nível, ela mantém o css escopado, fazendo uso de components para estilizar a aplicação, fornece uma produtividade incrível. 

* [Prop Types](https://www.npmjs.com/package/prop-types)

Excelente lib para minimizar problemas com tipagem, utilizo para validar o type das propriedades.

* [Yup](https://www.npmjs.com/package/yup)

Uso está lib em conjunto com o formik, ela é utilizada para validar objects schema no javascript.

* [Reactotron](https://github.com/infinitered/reactotron)

Utilizo no desenvolvimento, ele fornece um app para instalar no MacOs, Linux e Windows, para inspecionar projetos React e também React Native, pode ser configurado para potenciaizar a depuração da aplicação, tem lib para configurar com o redux e redux-saga.

* [Duck Pattern](https://github.com/erikras/ducks-modular-redux)

Comecei a utilizar este pattern a pouco tempo mas faz todo o sentido, consiste basicamente em manter as action types, reducers e actions no mesmo arquivo ao invés de criar um diretório para reducers outro para actions. 

## Testes Automatizados

Como desafio adendo fiz alguns testes no componente de Formulário especificamente no input que recebe o número do cartão de crédito conforme solicitado. 
Utilizando o Jest lib criada pelo facebook que já vem nos scripts do CRA(Create-React-App) e o Enzyme lib da airbnb para potencilizar os testes no React.
Os testes realizados foram um tanto simples porém aprofundei um pouco mais nos estudos, aprendi sobre o conceito de TDD(Test Driven Development), aprendi sobre criar mocks fiz alguns testes simulando o localStorage por exemplo, aprendi a utilizar o sinon usado para manipular funções no código, testei também o redux-mock-store para para testar componentes conectados ao redux e o redux-saga-tester para testar os sagas, aprendi também como fazer mock de API, snapshots e gerar coverage report.
Ainda há muito pra aprender existem diversas ferramentas e técnicas de testes além de que somente com a experiência diária vou saber melhor o que testar, quando testar e como testar.
Mas fiquei satisfeito com o que aprendi até o momento pois no inicio da semana eu não sabia nada sobre testes e não quis apenas pegar alguns exemplos pra complementar o desafio então estudei bastante sobre testes mas reconheço que há muito mais pra estudar e praticar.
Fica claro agora pra mim a importância de se testar código principalmente se trabalhando em equipe.

## Como rodar o projeto

* Faça uma cópia do projeto para o seu computador 

```
No terminal digite: git clone git@github.com:cristianomesquita/test-front.git
```

* Entre no diretório do projeto

```
Execute o comando yarn ou npm install
```

* Após a instalação dos pacotes execute o comando abaixo, por padrão a aplicação estará disponível em http://localhost:3000

```
Execute o comando: yarn start ou npm start
```
