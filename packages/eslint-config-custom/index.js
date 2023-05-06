module.exports = {
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:storybook/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'react-refresh'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'warn'
  }
}
