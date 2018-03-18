const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "./"),
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.vue$": "<rootDir>/node_modules/vue-jest"
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  setupFiles: ["<rootDir>/jest.setup"],
  mapCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/index.umd.js",
    "!src/testUtils/*",
    "!**/node_modules/**"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
};
