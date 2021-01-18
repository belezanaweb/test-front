# Boticário's Challenge

![Boticário](https://i.pinimg.com/originals/b5/e2/eb/b5e2eb7bbd8afbcc5c8e41c84188cfc5.png 'Boticário challenge')

## Powered by

[![Written in TypeScript](https://cdn.iconscout.com/icon/free/png-128/typescript-1-1175078.png 'Written in TypeScript')](http://www.typescriptlang.org)
[![Tested with Jest](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/square_128/jestlogo.png 'Tested with Jest')](https://jestjs.io/)
![Uses Javascript as programming language](https://sabe.io/classes/javascript/icon.png)
[![Documentation built by TypeDoc](https://typedoc.org/images/logo-128.png 'Documentation built by TypeDoc')](https://typedoc.org)

![BuildStatus](https://img.shields.io/badge/Build-Passing-brightgreen.svg 'Building Status') ![BuiltBy](https://img.shields.io/badge/TypeScript-Lovers-black.svg 'img.shields.io') ![ForTheBadge](https://img.shields.io/badge/Using-Badges-red.svg 'ForTheBadge')

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This application is a checkout simulation based on three steps.

In the initial page, cart data is requested from the API and saved on store. In the second step, we have a payment form to receive user's payment data. When user inputs your payment data and submit the form, the application is redirected to the last step: confirmation. In this step, we show a summary of order for the user.

## Built With

- [React](https://reactjs.org/) - The Javascript library used to build user interface
- [Create React App](https://create-react-app.dev/docs/getting-started/) - A React Starter Kit
- [Styled Components](https://www.styled-components.com/) - A tool to create Styled React components
- [Typescript](https://www.typescriptlang.org/) - A typed superset of Javascript that compiles to plain Javascript
- [Jest](https://jestjs.io/) - A tool to test Javascript code
- [Hook Form](https://react-hook-form.com/) - A complementary tool to make easy the creation of React forms

## Getting Started

These instructions will guide you to run on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before start, you need to install NodeJS (you can download files [here](https://nodejs.org/en/download/)).

> **_NOTE:_** The use of newer versions of Node is recommended

If you need specific instructions to install NodeJS for a specific Operational System, see more on the following links:

Windows: https://treehouse.github.io/installation-guides/windows/node-windows.html

Linux: https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/

MacOS: https://blog.teamtreehouse.com/install-node-js-npm-mac

### Installing & Running

Go to the project's folder and install project's dependencies using the following command in a terminal of your choice:

```bash
$ cd YOURFOLDERNAME
$ npm install
```

Finally we can run the project using the following command:

```bash
$ npm start
```

## Running the tests

To test the code I'm using [Jest](https://jestjs.io/docs/en/getting-started) and [Testing Library](https://testing-library.com/) (for React components).

I made the decision to place test files near from your source files, instead of in a "\_\_test\_\_" folder. For this reason, a "component.test.tsx" will be near, in the same folder of "component.tsx", for example.

To run all of our unit tests you need to run the following command:

```bash
$ npm test
```

> **_NOTE:_** The test will be running in watch mode. To run all test's files, press "a" key.

> **_NOTE:_** In watch mode, you can filter tests by parameters such as file name, test name and other options... To know more about this options, see this section: https://jestjs.io/docs/en/watch-plugins#watch-menu-integration

To get test coverage you need to run the following command:

```bash
$ npm run coverage
```

> **_NOTE:_** By default, a coverage table will be generated in YOURFOLDERNAME/coverage/Icov-report/index.html

## Deployment

To create a production build, you must run the following command:

```bash
$ npm run build
```

> **_NOTE:_** After builds the application, the script will create the project's documentation.

To build the application and serve the built version you must run the following command:

```bash
$ npm run serve
```

### NPM Scripts

- `npm run build`: Creates a production build using react-app-rewired.
- `npm run coverage`: Generates a folder with test coverage.
- `npm start`: Runs the application for development.
- `npm serve`: Creates a production build and serve the application.
- `npm run docs`: Creates code's documentation using TypeDoc.
- `npm run lint`: Run lint tools to check the code.
- `npm run postbuild`: Generates application's documentation.
- `npm test`: Runs Jest testing.
- `npm run eject`: Encapsulates all of the npm modules it is using internally, so that your package.json will be very clean and simple without you having to worry about it.

### Folder's structure (main files and folders):

```
project
├── build - Production build
├── coverage - Coverage files by Jest
├── docs - Code's documentation
├── node_modules
├── public
├── src
│   ├── redux - Redux modules and containers
│   ├── routes - React Router's definitions
│   ├── screens - App's pages
│   ├── shared - Shared code (eg.: helpers)
│   ├── ui
│       ├── assets - Image files
│       ├── components - React Components
│       ├── layouts - Layouts for App's pages
        └── theme - Colors and fonts definitions
│   ├── App.tsx - App main component
│   ├── index.tsx - App entry point
│   ├── serviceWorker.js - Service Worker config
│   ├── setupTests.js - A cfg to run before tests
│   └── react-app-env.d.ts
├── package.json
├── paths.json - Typescript path aliases
├── README.md
├── tsconfig.json
└── typedoc.json
```

### Theming

To improve the application's maitenance I made the decision to create a theme's file to be provided for <App />. Thus, future developments related to design system become easier.
