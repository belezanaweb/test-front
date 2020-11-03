### Como startar o projeto .

```bash
yarn 
yarn start
# or development mode
yarn dev
# test 
yarn test
```
- caso não tenha yarn instalado globalmente
https://classic.yarnpkg.com/pt-BR/docs/install

### Stack.
- Next.js (React Framework) ;
>  Como se tratava de um e-commerce é legal ter um framework que facilite o projeto ser server side também, por questões de seo etc..
- Recoil.js ( State Management ) ;
- Styled-Component.js ( ~CSS in JS) ;
- Jest (testes);
- Koa.js (server para rotas SSR) ;

### Desenvolvimento.
- Componentes criados no modelo de Atomic Design (Composição/reutilização);
- Components CodeSplitting com Next/Dynamic (similar ao Lazy/Suspense do React)
- Componentes em React hooks ;
- Tenho conhecimento em TS também mas pelo questão de tempo achei melhor não ir por esse caminho.
- O projeto com esta stack está preparado para receber uma versão em amp e pwa (Service worker).
- Split bundle por rota (component -> template -> checkoutflow)
- Poderia ter desenvolvido o projeto a partir de testes (TDD), mas como estava muito corrido para fazer o teste, só deixei um exemplo de teste unitario no header.
- Responsividade para Desktop, poderia ter feito em css grid o layout, mas o mesmo problema do tempo.

