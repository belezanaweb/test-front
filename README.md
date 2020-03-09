## Frontend Test

[http://beleza-na-web-checkout.surge.sh/](http://beleza-na-web-checkout.surge.sh/) confira!

### Como rodar o projeto:
  - **npm run start**: para rodar em modo de desenvolvimento;
  - **npm run test**: para rodar os testes;
  - **npm run test:dev**: para rodar os testes e ter um detalhamento maior (logs, warnings);
  - **npm run lint**: para validar o código;
  - **npm run build**: para fazer o build da aplicação na pasta build;
  - **npm run deploy**: para fazer a entrega da aplicação no [surge](https://surge.sh/);

### Stack:
  - **redux**: Utilizei para escalar os dados dentro da aplicação e escolhi essa lib por já ter trabalhado com ela antes...
  - **commitlint e commitizen**: Essas libs são para válidar as mensagens dos commits. Utilizei elas por ter visto um vídeo da [rocketseat](https://rocketseat.com.br/);
  - **husky**: Para automatizar as tarefas ao tentar fazer commit, com essa ferramente foi possível válidar os commits e rodar os testes unitários antes de comittar;
  - **jest**: Framework para criar testes unitários... Meio que não escolhi ele, pois ele já vem no CRA e também já havia trabalhado com ele, logo não vi motivo para trocá-lo;
  - **unfetch**: Utilizei como polyfill do fetch e também por ser mais leve que o axios;
  - **styled-components**: Utilizei por já ter trabalhado com essa stack antes, mas bem pouco... Os principais ganhos pra mim além do propósito da lib são: não precisar configurar e ter um css semelhante ao do sass;
  - **formik**: Também é uma ferramenta que eu já havia trabalhado. Essa lib é muito simples e acredito que leve, muito mais leve do que redux-form;
  - **react-loadable**: Nunca havia feito code-splitting na "mão", sempre utilizei algum framework para isso, e ao perquisar sobre, encontrei um artigo no [css-tricks](https://css-tricks.com/using-react-loadable-for-code-splitting-by-components-and-routes/) e achei bem fácil de implementar;
  - **surge**: Para fazer deploy gratuitos. Meio que eu só conhecia essa farramenta para esse fim (e ilimitado) e também é uma ferramenta criada pela comunidade...
