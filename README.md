![logo](https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco/v1/blz/assets-store/0.0.262/images/store/1/logo_2x.png)

## Frontend Test
teste realizado para vaga de desenvolvedora Front-end Jr na Beleza na Web.
[Link do resultado final](http://meltammy-blznaweb.surge.sh/payment)
## Requisitos
- Pixel perfect ([layout](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k))
- A aplicação responsiva
- mobile-first
- Rotas
- Utilização de [Endpoint](http://www.mocky.io/v2/5b15c4923100004a006f3c07)
- Persistir o conteúdo do JSON
- validação em cada campo de texto
- Habilitar o botão de Finalizar Pedido apenas se o form estiver válido
- Split bundle por rota (cada step ter um bundle separado para otimizar a performance)
- CSS in JS
- React

## Techs utilizadas
A aplicação foi toda desenvolvida em React.JS
- **Context+Reducer** 
persistir os dados e utiliza-los em toda aplicação
- **Styled Components**
Alternativa para estilização sem utilizar arquivos CSS, o principal diferencial no styled componentes é a utilização de props no estilo.
- **Material-ui**
O material-ui possui diversos componentes prontos disponíveis. Na aplicação utilizou-se os icons, que são simples, objetivos e intuitivos.
- **React-router**
simplicidade na criação das rotas
- **Code-Splitting**
otimizar a performance com lazy+suspense
- **axios**
consumo de APIs
## Como rodar
1. clone o repositório
`git clone https://github.com/meltammy/test-front.git`
2. dentro da pasta, rode o comando
`npm install`
3. para rodar a aplicação
`npm run start`
4. para rodar os testes
`npm run test`
