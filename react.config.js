'use strict';
module.exports = {
  source: 'src',
  outputPath: 'dist',
  port: 8080,
  host: 'localhost',
  nodeEnv: {
    API_URL: 'http://www.mocky.io'
  },
  htmlEnv: {},
  reactHotLoader: true,
  jest: {
    coverageThreshold: JSON.stringify({
      global: {
        branches: 30,
        functions: 50,
        lines: 50,
        statements: 50
      }
    }),
    updateSnapshot: false
  },
  devServer: {
    open: true
  }
};
