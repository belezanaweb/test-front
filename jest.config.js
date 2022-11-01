module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ["**/__tests__/**/*.tsx?(x)", "**/?(*.)+(test).tsx?(x)"],
  transform: {
      "^.+\\.(js|ts)$": "ts-jest",
  },
  transformIgnorePatterns: [
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
}
