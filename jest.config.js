export {}

module.exports = {
  moduleNameMapper: {
    '^.*.svg$': '<rootDir>/src/utils/svg-mock.ts',
    '^~(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  bail: true,
  passWithNoTests: true,
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,tsx,ts}',
    '!src/{index,bootstrap,App}.{js,jsx,tsx,ts}',
    '!src/{config,services,context}/**',
    '!src/**/*.{routes,styles,spec}.{js,jsx,tsx,ts}',
    '!src/**/{styles,types}.{js,jsx,tsx,ts}',
  ],
  coverageReporters: ['lcov', 'text'],
  transformIgnorePatterns: ['node_modules/(?!@frete.com|(?!fuel-react))'],
}
