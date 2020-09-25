<h1 align="center">
    Beleza na Web Test Front
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/hugo-marcelo/test-front.svg">

  <a href="https://www.codacy.com/app/hugo-marcelo/test-front?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hugo-marcelo/test-front&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/4997e01df18f4441aae384fc60aa4daa.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/hugo-marcelo/test-front.svg">
  <a href="https://github.com/hugo-marcelo/test-front/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hugo-marcelo/test-front.svg">
  </a>

  <a href="https://github.com/hugo-marcelo/test-front/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/hugo-marcelo/test-front.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/hugo-marcelo/test-front.svg">
</p>

<h4 align="center">
  This is the solution of Beleza na Web Test front.
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

![App Screenshot](https://res.cloudinary.com/hugo-marcelo/image/upload/v1601053013/test_rtrx00.png)
<p align="center">
  <a href="https://beleza-na-web-test-front.netlify.app/" target="_blank">
    <img alt="Demo on Netlify" src="https://res.cloudinary.com/hugo-marcelo/image/upload/v1601053075/netlify_ngcync.png">
  </a>
</p>

## :rocket: Technologies

This project was developed with the following technologies:

- [ReactJS](https://reactjs.org/): Utilizei esse framework pois é fácil criar aplicações web com ele.
- [Axios](https://github.com/axios/axios): Utilizei essa lib pois acho ela leve e fácil de manipular os acessos a endpoints.
- [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import): Utilizei essa lib para facilitar a importação de arquivos como dependências com o caminho de root.
- [classnames](https://github.com/JedWatson/classnames): Utilizei essa lib para facilitar a concatenação dos nomes das classes.
- [customize-cra](https://github.com/arackaf/customize-cra): Utilizei essa lib para transpilação do babel funcionar utilizando o babel-plugin-root-import.
- [formik](https://github.com/formium/formik): Utilizei essa lib pois é fácil trabalhar com páginas com formulário.
- [react-app-rewired](https://github.com/timarney/react-app-rewired/): Utilizei essa lib pois ela é dependência do customize-cra.
- [react-loadable](https://github.com/jamiebuilds/react-loadable): Utilizei essa lib pois acredito que o split das páginas melhora a performance da aplicação e achei fácil de implementar com ela.
- [react-router-dom](https://github.com/ReactTraining/react-router): Utilizei essa lib pois é fácil implementar o gerenciamento de rotas com ela.
- [redux](https://redux.js.org/): Utilizei essa lib pois é fácil implementar o gerenciamento de estado e garantir uma base de informação geral para toda a aplicação.
- [styled-components](https://www.styled-components.com/): Utilizei essa lib pois é fácil implementar CSS-in-JS e trabalhar com estilização por componente assim como manipular as propriedades de estilo e tema.
- [yup](https://github.com/jquense/yup): Utilizei essa lib pois é fácil tratar as validações de campos de formulários.
- [commitlint](https://github.com/conventional-changelog/commitlint): Utilizei essa lib para configurar uma padronização de mensagens de commit.
- [commitizen](https://github.com/commitizen/cz-cli): Utilizei essa lib para configurar uma cli de ajuda aos tipos de tratativa nos commits.
- [testing-library/react](https://github.com/testing-library/react-testing-library): Utilizei essa lib pois acho ela mais leve e atualizada que o jest.
- [enzyme](https://github.com/enzymejs/enzyme): Utilizei essa lib pois é fácil criar os testes unitários utilizando snapshots e validar os componentes.
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter): Utilizei essa lib pois precisei simular uma requisição a endpoint com o axios ao criar os testes unitários.
- [husky](https://github.com/typicode/husky): Utilizei essa lib para automatizar os hooks do git ao realizar os commits.
- [VS Code][vscode] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/hugo-marcelo/test-front

# Go into the repository
$ cd test-front

# NPM

# Install dependencies
$ npm run install

# Run the tests
$ npm run test

# Run the tests with coverage report
$ npm run test:coverage

# Run the app
$ npm run start

# YARN

# Install dependencies
$ yarn install

# Run the tests
$ yarn test

# Run the tests with coverage report
$ yarn test:coverage

# Run the app
$ yarn start
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/hugo-marcelo/test-front/blob/master/LICENSE) for more information.

---

Made by Hugo Marcelo :wave: [Get in touch!](https://www.linkedin.com/in/hugo-marcelo-dev/)

[nodejs]: https://nodejs.org/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[yarn]: https://yarnpkg.com/
