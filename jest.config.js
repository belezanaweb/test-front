module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.js', '!src/index.js'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  coveragePathIgnorePatterns: ['.styles.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
