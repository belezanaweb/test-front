module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "\\.mock\\.ts$"
  ],
  testResultsProcessor: 'jest-junit',
};
