import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['src/**/*.js(x)?'],
  modulePaths: ['<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
