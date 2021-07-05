# Welcome to the MonoRepo!

Hey dev, how u doin'?

This is a monorepo test, building a simple application with shared component and some reusable parts of codes. It is using yarn workspaces and webpack to manipulate the code bases.

## How to run

Easy. Check it out:

1. First, **clone** this project
2. Open the project folder on terminal
3. And then run this complex command below:

```sh
\$ yarn
```

Wait to complete, and run:

```sh
\$ yarn start:checkout
```

WOW, the app is runnig.

Done! Just open this folder on your favorite editor and take a look or try it on on your favorite browser.

Also, you probably like tests. So run:

```sh
\$ yarn test
```

for specific file:

```sh
\$ yarn test cart
```

for coverage:
```sh
\$ yarn coverage
```

## Getting Started

### Dev Dependencies (recommended)

- Yarn - 1.19+ (<https://yarnpkg.com/>)
- Node - 12 + (<https://nodejs.org/>)

### Lib & Framework

- React and React DOM - 17+ (<https://reactjs.org/>)
- Next - 10+ (<https://nextjs.org/>)

## Plugins on the road

To create this one and make it easy to run, I've used some plugins to allow the components to work fine. Check these ones:

| Plugin                        | Package Name                  |
| ----------------------------- | ----------------------------- |
| babel core                    | @babel/core                   |
| babel preset-env              | @babel/preset-env             |
| babel jest                    | babel-jest                    |
| jest                          | jest                          |
| jest directory named resolved | jest-directory-named-resolver |
| jest                          | jest                          |
| dotenv                        | dotenv                        |
| next transpile modules        | next-transpile-modules        |

Also, to support to build the app, I've used the follows:

| Plugin            | Package Name                |
| ----------------- | --------------------------- |
| axios             | axios                       |
| Styled Components | styled-components           |
| unForm            | @unform/core && @unform/web |
| Yup               | yup                         |
| React Input Mask  | react-input-mask            |

## Project Structure

First of all, how about these tech stacks above?

Why **NextJS**? That's because the active community and support, it's SSR, SEO allowed, images optimization and also because that's my favourite one.

Why **StyledComponents**? That's because it is simple amazing and easy to work with. Perfect to create stateless components.

Why **unForm**? That's because I'd never used before, and I was looking forward to test it. And to be honest, keep on Formik =)

Why **Yup**? To be honest, I've never used other one before to schemas validation. And I sincerely like it.

### /projects structure

Here you can create your repos, it can be monorepo as well, including some step in separated bundles.

Here is where you can find the **/checkout pages**  structure, but at this moment all of this is in one bundle.

### /shared/\* structure

Here you will find the shared part of code, including **components**, **store**, **services**, **helpers** and what you think you should share between all of your projects.

If you have any suggestions, questions, doubts, please do no hesitate to contact me.

Cheers!
