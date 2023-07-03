## Sumário

-   [Demonstração da aplicação em produção](#Demonstração-da-Aplicação)
-   [Requisitos para rodar o projeto](#Requisitos-Para-Rodar-o-Projeto)
-   [Instalação das dependencias](#Instalação-das-Dependências)
-   [Executar o projeto](#Executar-o-Projeto)
-   [Processo de desenvolvimento](#Processo-de-Desenvolvimento)
-   [Mudanças no layout](#Mudanças-no-Layout)

---

## Demonstração da Aplicação

A build de produção está rodando na netlify no link:

[https://belezanaweb-francisco.netlify.app](https://belezanaweb-francisco.netlify.app)

---

## Requisitos Para Rodar o Projeto

-   [Node](https://nodejs.org/)
-   [Yarn](https://yarnpkg.com/)

---

## Instalação das Dependências

### Clone o repositório

```
$ git clone git@github.com:FranciscoBBC/test-front.git
```

### Instale as dependências

```
$ yarn install
```

---

## Executar o Projeto

-   ### Local

    ```
    $ yarn dev
    ```

    A aplicação estará disponível no endereço [http://localhost:3000](http://localhost:3000)

-   ### produção 

    ```
    $ yarn build
    ```
    Para gerar a build do projeto

    ```
    $ yarn preview
    ```
    Para gerar a versão de produção

    A aplicação estará disponível no endereço [http://localhost:4173](http://localhost:4173)


---

## Processo de Desenvolvimento

### Organização do código
Separei os componentes compartilhados entre as telas na pasta _components_. 

Alguns componentes possuem um outro componente interno pois esse é de uso exclusivo do componente pai, como por exemplo _Product_ dentro de _ProductList_.

A chamada a api está encapsulda em um custom hook dentro da pasta _queries_, esse custom hook extende o _useQuery_ do _react-query_.

Todos os contextos compartilhados entre a aplicação estão localizados dentro da pasta _store_

Apesar da aplicação ser uma SPA, existe uma pasta contendo uma única página chamada _cart_, ela possui 3 views que renderizam cada etapa do fluxo de compra. utilizei o _createElement_ do react para renderizar as views de forma dinâmica através da seleção das telas pelo contexto de navegação. 

Além disso existe uma pasta de _utils_ que possui um formatador de moeda e um custom hook para aplicar mascara a partir de um valor fornecido.

### Framework e bibliotecas utilizadas:

O projeto seguiu o template base utilizando React + vite + TS. Para fazer o desenvolvimento da aplicação adicionei as seguintes biblioteca:

- ***react-hook-forms***: Optei por essa biblioteca para fazer o gerenciamento do formulário porque ela permite trabalhar com _uncontrolled inputs_, dessa forma não preciso ficar controlando cada input com um estado, diminuindo muito a quantidade de renderizações. Além disso fica muito mais simples gerenciar e validar os tipos e os valores de cada input.

- ***zod***: Utilizando _zod_ com _react-hook-forms_ consigo fazer a validação e controle do que está sendo escrito em cada input através do schema do zod.

- ***zustand***: Eu poderia ter feito o genrenciamento do contexto pela _context api_ do react junto com _useReducer_ mas ultimamente tenho gostado muito de utilizar o _zustand_ pela simplicidade de lidar com o gerenciamento dos estados globais e por alguns recursos como persistência no _localstorage_ e _middlewares_.

- ***react-query***: Fiz uso do _react-query_ para possibilitar fazer um cache das requisições para a api, melhorando significativamente a performance e a quantidade de requests feitos.  

- ***styled-components***: Optei pelo _styled-components_ por conta da facilidade em manter um tema padrão para a aplicação. Dessa forma consigo manter valores fixos e fica mais facil seguir o layout proposto. 
---

## Mudanças no Layout

Tentei seguir a risca o layout proposto e evitei fazer mudanças visuais, apenas reajustei os elementos na tela para a versão desktop para que a navegação fique mais confortável. 

Todos os componentes foram desenvolvidos primeiro no mobile e a aplicação inteira se adequa perfeitamente até uma tela maior que _768px_, quando o layout muda para a versão desktop.

Além disso segui as regras propostas para a navegação do app. No formulário, não permito que o usuário prosiga até que todas as regras de validação do formulário sejam validadas. 
Também não permito que o usuário avance para a tela seguinte pelo menu de navegação se ele não cumpriu a exigência da tela atual, só permito que ele clique nas telas anteriores para revisar os dados fornecidos. 

Ao clicar no botão _Voltar ao inicio do protótipo_ todos os dados salvos no contexto são apagados e o fluxo começa novamente.
