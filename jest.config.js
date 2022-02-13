module.exports = {
  // An array of file extensions your modules use
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy'
  },

  // Automatically reset mock state between every test
  resetMocks: true,

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['react-app-polyfill/jsdom'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/config/jest/transforms/babelTransform.ts',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/transforms/fileTransform.ts'
  }
};
