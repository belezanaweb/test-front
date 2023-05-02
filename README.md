# Beleza na Web Checkout

A front-end web checkout for technical interview.

### Required global dependencies

- Node.js v16+
- Yarn or pnpm

### Up & Running

1. Install dependencies

```
pnpm install
```

2. To run in development mode

```
pnpm dev
```

## Stack

- [React.js](https://react.dev) as web framework
- [Vite.js](https://vitejs.dev/) as front-end development environment tooling
- [Vercel](https://vercel.com) as hosting platform
- [Tailwindcss](https://tailwindcss.com) as CSS framework
- [@tanstack/react-query](https://tanstack.com/query/v3/) for asynchronous state management
- [React-hook-form](https://react-hook-form.com/) for handling forms
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) for state management
- [Zod](https://zod.dev/) for TypeScript-safe schema validation
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for unit testing
- [Vitest](https://vitest.dev/) for unit testing framework
- [Playwright](https://playwright.dev/) for e2e testing

### Utilities

- [pnpm](https://pnpm.io/) as a package manager
- [TypeScript](https://www.typescriptlang.org) for static type checking
- [ESLint](https://eslint.org) for code linting
- [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) for git hooks
- [lint-staged](https://github.com/okonet/lint-staged) for run linters against staged files
- [Prettier](https://prettier.io) for code formatting
- [MSW](https://mswjs.io/) for API mocking

## Scripts

| Script            | Description                        |
| ----------------- | ---------------------------------- |
| `pnpm dev`        | Run in developmento mode           |
| `pnpm test`       | Run all unit tests                 |
| `pnpm lint`       | Run eslint                         |
| `pnpm lint:fix`   | Run eslint with "--fix" flag       |
| `pnpm typecheck`  | TS typechecking                    |
| `pnpm e2e`        | Run Playwright e2e tests           |
| `pnpm e2e:report` | Run Playwright e2e report          |
| `pnpm coverage`   | Show unit tests coverage           |
| `pnpm build`      | Generates production build         |
| `pnpm format`     | Format all monorepo using Prettier |
