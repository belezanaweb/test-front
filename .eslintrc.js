module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: ['plugin:react/recommended',
  'plugin:@typescript-eslint/recommended'],
  globals: {
    afterAll: true,
    afterEach: true,
    beforeAll: true,
    beforeEach: true,
    caches: true,
    Date: true,
    describe: true,
    expect: true,
    fetch: true,
    fixture: true,
    it: true,
    localStorage: true,
    sessionStorage: true,
    sinon: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['file-progress', 'react-hooks', 'react', '@typescript-eslint'],
  rules: {
    camelcase: 'off',
    'comma-dangle': 'off',
    'dot-notation': 'off',
    'eol-last': ['error', 'always'],
    indent: 'off',
    'lines-between-class-members': 'off',
    'multiline-ternary': 'off',
    'no-case-declarations': 'off',
    'no-class-assign': 'off',
    'no-debugger': 'off',
    'no-mixed-operators': 'off',
    'no-multiple-empty-lines': 'off',
    'no-prototype-builtins': 'off',
    'no-self-assign': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-useless-return': 'off',
    'object-curly-spacing': 'off',
    'padded-blocks': 'off',
    'prefer-regex-literals': 'off',
    'quote-props': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-indent': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unused-prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'file-progress/activate': 1,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/ban-types': 'warn',
    'react/prop-types': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
