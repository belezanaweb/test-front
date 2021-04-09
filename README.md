## Frontend Test

Faça um fork deste repositório e finalizar o teste, submeta um pull request para o repositório que nosso time será notificado.

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso) [Veja o Layout](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k)

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
  
### Link do Surge:

### Como rodar o projeto:
1- clone ese repositório

2- rode o comando abaixo
```
npm install
```
3- agora esse
```
npm start
```
5- TÁ PRONTO O SORVETINHOOOOO! Só esperar o localhost abrir :)

### Bibliotecas usadas:
- react router dom (para as rotas)
- axios (para conectar com a API)
- styled-components (para estilizar)

### Obs:
Não deu tempo de realizar testes e de deixar responsivo :( 
Para mandar o form de pagamento, precisa clicar no enter e dai no botão de baixo

*Desenvolvido com 🧡 por Nicole Zolnier*