## Algumas Informações

Olá, pensando em uma experiência melhor criei uma outra branch com o nome PROD, subi ela no AWS amplify para que tenha acesso independente do projeto
[clique aqui para acessar](https://prod.d1yy20cawboqtt.amplifyapp.com/), para funcionar da melhor maneira precisei hospedar o mock no meu github e apontei ele como padrão na branch PROD. Mas nessa branch (stagin) esta com o link do mock padrão.

Segue também alguns números de cartão de crédito para preencher o form, validei o campo para receber apenas cartões válidos! E entendo que as vezes é chato buscar algum ou ter que sair para outra aba do 4devs e gerar.

Cartão: 5195 8250 8405 3648 / 5109 0595 3838 2396 / 5438 8178 9617 8983

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
