## Algumas Informações

Olá, pensando em uma experiência melhor criei uma outra branch com o nome PROD, subi ela no AWS amplify para que tenha acesso independente do projeto
[clique aqui para acessar](https://prod.d1yy20cawboqtt.amplifyapp.com/), para funcionar da melhor maneira precisei hospedar o mock no meu github e apontei ele como padrão na branch PROD. Mas nessa branch (stagin) esta com o link do mock padrão.

Segue também alguns números de cartão de crédito para preencher o form, validei o campo para receber apenas cartões válidos! E entendo que as vezes é chato buscar algum ou ter que sair para outra aba do 4devs e gerar.

Cartão: 5195 8250 8405 3648 / 5109 0595 3838 2396 / 5438 8178 9617 8983

## Porque da escolha de cada tech

No projeto foi utilizado as seguintes libs: [react-hook-form](https://react-hook-form.com/) - [react-input-mask](https://www.npmjs.com/package/react-input-mask) - [react-router-dom V6](https://reactrouter.com/docs/en/v6/getting-started/overview) - [styled-components](https://styled-components.com/) - [yup](https://www.npmjs.com/package/yup) - [testing-library](https://testing-library.com/)
*Optei por não utilizar o axios por não ver necessidade pra tanto. Por isso optei pelo uso do Fetch para fazer a requisição

Utilizei o combo do [react-input-mask](https://www.npmjs.com/package/react-input-mask) + [react-hook-form](https://react-hook-form.com/)  + [yup](https://www.npmjs.com/package/yup) para facilitar na hora de criar e validar as informações do form. Elas ajudam bastante na hora de promover uma boa experiência para o usúario. Apesar de não serem essenciais para a contrução do projeto, o usúario agradece por ter todos os erros bem detalhados e o YUP junto com o hook-form ajuda nisso.

O [react-router-dom V6](https://reactrouter.com/docs/en/v6/getting-started/overview) utilizei para criar os bundles das rotas, um biblioteca bem estruturada e bem completa. Também usei para linkar as rotas e criar a navegacao no NavBar

[testing-library](https://testing-library.com/) Essa lib auxilia na criacão de testes, usando JEST por trás. Facilita na hora de buscar algo no DOM e testar para saber se esta correto.

## Como rodar a aplicação

Lembre-se coloquei a aplicação no ar bem [aqui](https://prod.d1yy20cawboqtt.amplifyapp.com/), mas se deseja rodar localmente é bem simples.

Basta ir no diretório do projeto e rodar os seguintes comandos no terminal:

**yarn install** - Isso vai instalar todas as dependências do projeto. Caso queira economizar teclas so o **yarn** também resolve =D

**yarn start** - Em seguida basta rodar esse comando que o projeto irá iniciar na porta :3000

----------------------------------------------------------------------------------------------------------------------------------------------------------

## English README

Hello, thinking about a better experience, I created another branch with the name PROD, I uploaded it to AWS amplify so that it has access independent of the project
[click here to access](https://prod.d1yy20cawboqtt.amplifyapp.com/), to work in the best way I needed to host the mock on my github and set it as default in the PROD branch. But this branch (stagin) is with the default mock link.

Also follow some credit card numbers to fill in the form, I validated the field to receive only valid cards! And I understand that sometimes it's boring to look for some or have to go out to another 4devs tab and generate.

Card: 5195 8250 8405 3648 / 5109 0595 3838 2396 / 5438 8178 9617 8983

## Why the choice of each tech

The following libs were used in the project: [react-hook-form](https://react-hook-form.com/) - [react-input-mask](https://www.npmjs.com/package/ react-input-mask) - [react-router-dom V6](https://reactrouter.com/docs/en/v6/getting-started/overview) - [styled-components](https://styled-components .com/) - [yup](https://www.npmjs.com/package/yup) - [testing-library](https://testing-library.com/)
*I chose not to use axios because I didn't see the need for it. That's why I chose to use Fetch to make the request

I used the combo of [react-input-mask](https://www.npmjs.com/package/react-input-mask) + [react-hook-form](https://react-hook-form.com /) + [yup](https://www.npmjs.com/package/yup) to make it easier to create and validate form information. They help a lot when it comes to promoting a good user experience. Although they are not essential for the construction of the project, the user is grateful for having all the errors well detailed and the YUP along with the hook-form helps with that.

The [react-router-dom V6](https://reactrouter.com/docs/en/v6/getting-started/overview) I used to create the route bundles, a well-structured and very complete library. I also used it to link the routes and create the navigation in the NavBar

[testing-library](https://testing-library.com/) This lib helps in creating tests, using JEST behind. Makes it easier when looking for something in the DOM and testing to see if it's correct.

## How to run the application

Remember I put the application on the air right [here](https://prod.d1yy20cawboqtt.amplifyapp.com/), but if you want to run it locally, it's very simple.

Just go to the project directory and run the following commands in the terminal:

**yarn install** - This will install all project dependencies. If you want to save keys, **yarn** also solves it =D

**yarn start** - Then just run this command and the project will start on port :3000

----------------------------------------------------------------------------------------------------------------------------------------------------------

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
