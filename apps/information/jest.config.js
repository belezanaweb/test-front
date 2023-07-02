/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  collectCoverage: true,

  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  clearMocks: true,
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^cart/useCartProvider$': '<rootDir>/src/__mocks__/useCartProvider.ts',
    '^payment/obfuscateCreditCardNumber$':
      '<rootDir>/src/__mocks__/obfuscateCreditCardNumber.ts',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
};
