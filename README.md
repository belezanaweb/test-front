# Frontend Test

Mesmo sendo o projeto bem simples, a escolha da stack foi pensada em que ele possa ser escalável.

## Definição das techs da stack utilizada com seus motivos

- [Commitizen](https://github.com/commitizen/cz-cli) (Será utilizado para padronização dos commits)
- [Eslint](https://eslint.org/) (Será o Lint responsável pela sintaxe do nosso código)
- [Formik](https://formik.org/docs/overview) (Será responsável por facilitar a criação do formulário)
- [Jest](https://jestjs.io/) (Será o framework de teste)
- [Prettier](https://prettier.io/) (Será o responsável por manter o padrão da formatação do nosso código)
- [React](https://pt-br.reactjs.org/) (Lib de maior afinidade e também apontada como diferencial)
- [React-router-dom](https://reactrouter.com/web/guides/quick-start) (Para criação das URLs únicas que é um requisito e com code split)
- [React-testing-library](https://github.com/testing-library/react-testing-library) (Será a lib utilizada para testar os componentes react)
- [Redux](https://redux.js.org/) (Lib para persistência dos dados)
- [Storybook](https://storybook.js.org/) (Será a ferramenta utilizada para criação do styleguide)
- [Styled-components](https://styled-components.com/) (Será o CSS-in-JS utilizado e apontado como diferencial)
- [Validatorjs](https://www.npmjs.com/package/validatorjs) (Será o responsável pelas validações do formulário)
- [Typescript](https://www.typescriptlang.org/) (Para tipar o conteúdo)

### Padrões adotados

Os padrões citados aqui são os mais simples e que podem passar desapercebido.

1. Nomenclatura 

- O padrão a ser considerado pode ser encontrado [aqui](https://www.robinwieruch.de/javascript-naming-conventions), para arquivos foi considerado o PascalCase.

- O arquivo responsável por fazer o import/export é sempre chamado de index, assim no momento de import fica mais legível e evitar repetições como por exemplo: './Cart/Cart'.

- Para facilitar de achar/visualizar os arquivos nas abas do editor, é criado um outro arquivo com o nome real. Assim não ficam várias index abertas (por mais que mostre o caminho da pasta onde essa index está localizada na maioria dos editores).

2. Imports/Exports

- Nos arquivos index que é onde ocorre o import/export, eu poderia utilizar a forma mais compacta e escrever em apenas uma linha, porém prefiro deixar o import e o export em linhas separadas pois considero a visualização mais simples e mais consistente.

- Os imports seguem uma ordem, onde os externos vem sempre no topo seguidos por um "enter" e com os imports internos logo abaixo.

3. Extensões

- Por utilizar Typescript, as extensões dos arquivos utilizadas são .ts para arquivo dos quais não tem nada do que se refira ao .jsx e .tsx para os que tenham algo de .jsx neles.

### Para rodar o projeto

Basta clonar:
`git@github.com:RSPereira/test-front.git`

Instalar suas dependências:
`npm install`

Depois é só iniciar com: 
`npm start`

Para os testes:
`npm test`

Para o lint:
`npm run lint`

Para o build:
`npm run build`

Para o storybook:
`npm run storybook`

