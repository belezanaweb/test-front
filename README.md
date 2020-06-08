# Challenge Blz

[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://app.circleci.com/pipelines/github/leandrojo/test-front) [![codecov](https://codecov.io/gh/leandrojo/test-front/branch/master/graph/badge.svg)](https://codecov.io/gh/leandrojo/test-front)

## Iniciando
### `yarn`

Execute este comando para obter dependências.

### `yarn start`

Executa o aplicativo no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.
Você também verá erros de lint no console.

### `yarn build`

Cria o aplicativo para produção na pasta `build`.
Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

## Razões Tecnicas

### Build
O projeto é desenvolvido com **React** como uma ferramenta de criação de interface. As opções / transpiler / presentes no projeto também visam essa pilha, mas na conclusão do projeto, a configuração [CRA] (https://github.com/facebook/create-react-app) foi adotada por abstração de sua própria configuração, para poder oferecer melhores resultados de deployment do que os experimentados com um conhecimento que tenho já há algum tempo com Webpack.

> Configurações com o **Next.js** eram a primeira proposta para o projeto. Entretanto devido a alguns problemas no build com o TypeScript não tive uma rápida solução e assim optando por entregar os demais pontos sem SSR, que seria uma entrega adicional. O projeto pode ser verificados em [outra repositório](https://github.com/leandrojo/challenge-blz) deste projeto.  

### TypeScript
Venho utilizado o TypeScript ao logo desse ano, e venho utilizando sempre que há a opção. Existem diversas vantagens na sua verificação estatica de tipagem. É um excelente helper para o desenvolvimento, além de facilitar a concordância contratual de expectativas (interfaces) dos componentes e models.

### Rematch/Redux
Rematch é uma ferramenta de re-abordagem para o redux, este projeto é precursor ao Redux Toolkit, dando uma certa imperatividade a camada. Opto sempre que não é necessária uma escolha de um processo reativo. Ele retira um pouco a atenção ao padrão PubSub do redux com actions e reducers e centraliza na manipulação a um modelo. Foi utilizando também o plugin persist, um wrapper para o redux-persist.

### Styled Components
Tem por volta de um ano que cedi a resistência de escrever css em arquivos de script. Já utilizava **CSS-in-JS** antes com outras ferramentas no padrão CSSObject, mas o padrão de template string do **Styled-Components** (e **Emotion**) facilitam muito a relação entre os componentes de estilo, condicionais e pseudo-seletores e pseudo-elementos.

## Roadmap
Muitas pontas ficaram soltas, e algumas delas fundamentais. Porém quero manter essa entrega. Se for fundamental para a avaliação seguirei para os pontos listados abaixo:

* Ampliar o mecanismo de validação do formulário;
* Implementar BFF;
* Melhorar o controle da informações sensíveis (cartão de crédito);

## Observações adicionais

* Helvetica Neue só pode ser exibida caso exista previamente no sistema operacional. [fonte](https://webmasters.stackexchange.com/questions/69852/can-i-use-helvetica-neue-font-free-of-charge-in-my-website)
* Foi retirada do roadmap a técnica SSR por não oferecer vantagens no cenário.

## Para o avaliador
Me dediquei ao projeto tentando entregar um pouco mais que as demais experiências dos possiveis testes. Faço com que a avaliação tenha algo rico para mim e para que vai se dedicar a ler-lo. Espero que goste das escolhas e fico a disposição para sanar qualquer duvida.

> Nota: Os commits, como história, seguem também no [repositório original](https://github.com/leandrojo/challenge-blz). 
