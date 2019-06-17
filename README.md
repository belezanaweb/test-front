## Solução para o teste

A solução do teste foi dada segundo os requisitos (abaixo).

Além do solicitado, foi incluido mais uma página "Home" para o usuário poder escolher produtor para por no carrinho.

O projeto em produção pode ser acessado neste endereço:

http://belezanaweb.s3-website-sa-east-1.amazonaws.com/

É possível compilar o programa para funcionar apenas conforme o especificado, alterando uma variável dentro de *settings.js*, conforme será visto adiante.

## Sobre o produto em produção.

#### Home
A página inicial "Home" foi criada para o usuário poder escolher produtos para por em seu carrinho, ao contrário do projeto original onde o conteúdo do carrinho é fixo, obtido através de uma API-fake (www.mocky.io).

Os produtos apresentados na Home estão mockados, já que desconheço a API da Beleza Na Web para obter informações do produtos via sku.

Uma vez escolhido um produto, clicando em "Compre", é acessada a API verdadeira da BlzNaWeb (e não a fake), e de fato é criado um carrinho para o usuário no backend da BlzNaWeb.

O usuário é direcionado para a tela Sacola, que mostrará o conteúdo do carrinho.

Esta é basicamente a diferença do projeto apresentado em relação ao solicitado.

#### Sobre os requisitos originais.

Caso se queira, é possível alterar o comportamente do projeto para ele se comportar conforme os requisitos originais.

Basta abrir o arquivo */src/settings* e alterar a variável *isHotAccess* para *false*, e recompilar o projeto.

```
const endpointFake = '//www.mocky.io/v2/5b15c4923100004a006f3c07';
const endpointHot = '//us-central1-autocred-session.cloudfunctions.net/blznaweb/';

// DOC: Set isHotAccess = false for original test requirements
const isHotAccess = true;

const endpoint = isHotAccess ? endpointHot : endpointFake;

export {
  isHotAccess,
  endpoint,
};
```
O *endpointHot* é um middleware criado para contornar os problemas com CORS no acesso às API da BlzNaWeb. Em um projeto real, dentro do domínio da BlzNaWeb, ele não seria necessário.

#### Instalando e rodando o projeto localmente.
```
git clone <url do repositório>
cd test-front
npm start
````
#### Gerando pacote para deploy.
```
npm run build
```
Que vai gerar um diretório */build* com todo o conteúdo para ser posto no servidor. No teste em questão, está sendo usado um bucket na AWS.

#### Testes
Foram gerados alguns testes unitários, para algumas funções críticas.
```
npm run test
```
#### Persistência de conteúdo.
Visto que era necessário apenas manter valores entre páginas, sem a necessidade de gerenciamento global de estado, foi usada uma solução de *DataStore* otimizada para os requisitos, sem a necessidade de se usar Redux ou Mobx.

A solução pode ser vista no arquivo [*DataStore.js*](./src/components/common/dataStore/DataStore.js).

#### Sobre trechos de código comentados
Criei no front a possibilidade de retirar itens do carrinho, no entanto o processo de desenvolvimento da comunicação do middleware com o backend da BlzNaWeb estava se tornando muito demorado (não tenho as especificações da API), assim decidi deixar o código do front para análise e possível implementação futura. 

___

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
  - Persista o conteúdo do JSON para ser usado nas próximas etapas (store do redux é nossa sugestão);

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
