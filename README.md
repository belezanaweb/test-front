## Frontend Test - Antonio Thiele

## 💻 Configurando o projeto

> 💡 Esse projeto depende do Node 16.17.0
``` 
nvm install 16.17.0
``` 
``` 
nvm use 16.17.0
```

Clone o projeto
```
git clone https://github.com/antoniocarlos/test-front.git
```
Acesse a pasta do projeto
``` 
cd test-front
```

Copie e renomeando o arquivo de variáveis de ambiente
```
cp .env_example .env
```

Execute
```
yarn
```

Rodando o projeto
```
yarn start
```

No seu navegador acesse: [http://localhost:3000/](http://localhost:3000/) 

### ✅ Requerimentos

✅ Pixel perfect [Handoff](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k) 

  - A aplicação foi desenvolvida seguindo todos os valores de cores, tamanhos de fonte e espaçamentos presentes no Handoff.

  - Atenção aos detalhes. Por exemplo, o componente que exibe os produtos tem o texto encurtado quando ultrapassa um determinado tamanho.


✅ A aplicação responsiva, utilizando o conceito de mobile-first. 

  - Por meio de media queries, o layout se ajusta para telas maiores.

✅ Renderize cada passo em uma URL única (lib de rotas).

  - Usando o recurso de lazy loading do React, os componentes têm o seu carregamento dividido por rotas.

### ✅ Passo 1 - Carrinho:

  - Endpoint: /

  - O [endpoint](http://www.mocky.io/v2/5b15c4923100004a006f3c07) é consumido via Axios;

  - A persistência dos dados é feita por um hook customizado usando React context. As informações são baixadas uma vez durante o fluxo ou caso a tela seja recarregada;

### ✅ Passo 2 - Pagamento: 

  - Endpoint: /pagamento

  - Os dados do formulário são armazenados no local storage;

  - Os campos são validados durante o seu preenchimento;

  - O botão de finalizar o pedido só é liberado com o preenchimento correto de todo o formulário;

### ✅ Passo 3 - Sucesso: 

  - Endpoint: /confirmacao

  - Todo o conteúdo é exibido a partir dos dados persistidos em hooks customizados ou no localStorage;

  - A tela de confirmação/sucesso só é exibida caso os dados do formulário sejam válidos. Caso contrário, o usuário é redirecionado para a página de pagamento;
  
### ✅ Diferenciais:
  - ✅ Código limpo e organizado por atribuições;
  - ✅ Mensagens e commits em inglês. Trabalho feito com micro-commits;
  - ✅ Componentes reutilizáveis;
  - ✅ Testes unitários;
  - ✅ Split bundle por rota com React Lazy loading;
  - ✅ CSS in JS com a biblioteca styled-components;
  - ✅ React;

### 🔥 PLUS!:
  - 💙 TypeScript;
  - ✅ ENV para armazenar as variáveis de ambiente;
  - ✅ Tema de cores e reaproveitamento de estilos usando styled-components;
