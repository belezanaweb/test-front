## Frontend Test

Autor: Gabriel Arruda 

Tempo gasto: 5 horas

Faça um fork deste repositório e finalizar o teste, submeta um pull request para o repositório que nosso time será notificado.

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso) [Veja o Layout](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k)

**Faça quando quiser/puder (madrugada, fim de semana, etc)**

### Introdução

Tecnologias utilizadas e motivo:

- [Vite](https://vitejs.dev/) - Muito rápido em comparação com Create React App e suporta todos navegadores mais recentes, acredito que vá substituir o CRA em produtos mais robustos no futuro.
- [React](https://reactjs.org/)
- [Javascript](https://www.javascript.com/) - Tecnologia esperada pela vaga, mas se fosse escolher usaria typescript sempre que possível.
- [Styled components](https://github.com/styled-components/styled-components) - Resolve diversos problemas do CSS sem intrometer na forma e estilos
- [axios](https://github.com/axios/axios) - Sintaxe mais simples que o builtin Fetch e maior compatibilidade com browsers antigos.
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [React Hook Form](https://react-hook-form.com/) - Ganho de performance na forma de renderizar os forms por isolar a renderização de cada componente, além de código menor e mais simples que os principais concorrentes (Formik e Redux)

### Rodando o projeto

O projeto foi criado usando node.js v16.15.1

1. Faça o git clone ou download do repositório
2. Rode o script de instalação

```bash
cd test-front
npm i
```
3. Execute o projeto

```bash
npm run dev
```

### Melhorias

1. Usar o tema de forma mais abrangente, com adição de espaçamentos, tamanho de fonte, etc;
2. Mudanças de layout nas telas maiores para acomodar melhor as informações;
3. Criar um serviço para receber as informações do backend ao invés de colocar toda lógica na página;
4. O formulário da página de pagamento tem muito espaço para melhorias, dentre elas considero que utilizar máscaras para facilitar o preenchimento do usuário é a mais importante. Além disso as validações podiam ser muito mais abrangentes, como por exemplo no número do cartão poderia criar uma função para validar se é um número válido. Por ultimo o uso do "onBlur" para habilitar o botão faz com que o usuário precise clicar fora do ultimo campo para seguir para próxima etapa.
5. Bloquear o acesso a página de sucesso se o usuário não estiver vindo pelo formulário de pagamento ou fazer alterações para que a página não seja estatica;
6. Comentários no código;
7. Criação de testes.


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
