module.exports = {
  transform: {
    "^.+\\.js$": "./babel-jest.upward.js", //basicamente informa os .JS que busquem o babel.config do pai pra pegar os presets de transpiler
  },
  resolver: "jest-directory-named-resolver",
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!@belezanaweb)"],
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
};
