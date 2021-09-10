
# Test Front - Beleza na Web - GB.tech

![Logo](https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco/v1/blz/assets-store/0.0.339/images/store/1/logo_2x.png)

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso) [Veja o Layout](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k)




## Tech Stack

**React:** Utilizado pela facilidade de criação de componentes, auxiliando na reutilização desses componentes em diversas partes do projeto. \
**React Router:** Escolhido para controlar toda a renderização de rotas da aplicação. \
**Stitches:** Escolhido pela usabilidade e facilidade na implementação de CSS-in-JS. Considero a melhor DX do gênero, pois facilita na criação de variants e aplicação de responsividade.\
**React Hook Form:** Facilita a criação, gerenciamento e validação dos formulários utilizando a ideia de hooks. \
**Typescript:** Ajuda a prever possíveis bugs no código e mantém o código mais legível para outros desenvolvedores \
**Webpack:** Optei por Webpack para ganhar mais controle sobre o processo de build e execução do aplicativo \
**Git Commit Message Linter:** Utilizei para manter todos os commits dentro do padrão Conventional Commits




  
## Instalando e Rodando o APP

**Usando Docker**

```bash
  docker build -t test-front:latest . 
  docker run -p 3000:3000 -t test-front
```

**Usando NPM**

```bash
  npm install 
  npm start
```


**Usando YARN**

```bash
  yarn 
  yarn start
```
    
Independente do método utilizado para rodar a aplicação, ela vai estar rodando em http://localhost:3000
