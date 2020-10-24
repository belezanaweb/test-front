# Frontend Test

Mesmo sendo o projeto bem simples, a escolha da stack foi pensada em que ele possa ser escalável.

## Definição das techs da stack utilizada com seus motivos

- Commitizen (Será utilizado para padronização dos commits)
- Eslint (Será o Lint responsável pela sintaxe do nosso código)
- Jest (Será o framework de teste)
- Prettier (Será o responsável por manter o padrão da formatação do nosso código)
- React (Lib de maior afinidade e também apontada como diferencial)
- React-router-dom (Para criação das URLs únicas que é um requisito e com code split)
- React-testing-library (Será a lib utilizada para testar os componentes react)
- Redux (Lib para persistência dos dados)
- Storybook (Será a ferramenta utilizada para criação do styleguide)
- Styled-components (Será o CSS-in-JS utilizado e apontado como diferencial)
- Typescript (Para tipar o conteúdo)

### Padrões adotados

Os padrões citados aqui são os para as coisas mais simples e que podem passar desapercebido.

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

Basta utilizar: 
`npm start`

Para os testes:
`npm test`

Para o lint:
`npm run lint`

Para o build:
`npm run build`

