const { pathsToModuleNameMapper } = require("ts-jest")

const { compilerOptions } = require("./tsconfig.json")

const tsConfigPaths = compilerOptions.paths || {}
const tsConfigBaseUrl = `<rootDir>/${compilerOptions.baseUrl}`

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "<rootDir>/node_modules/jest-css-modules",
    "\\.svg$": "<rootDir>/src/tests/mocks/svgr.ts",
    "\\.(jpg|jpeg|png|gif|webp|avif|ico)$":
      "<rootDir>/src/tests/mocks/image.ts",
    // This adds support for the TS compiler options `baseUrl` and `paths`.
    ...pathsToModuleNameMapper(tsConfigPaths, { prefix: tsConfigBaseUrl }),
  },
  modulePaths: ["node_modules", tsConfigBaseUrl],
  testPathIgnorePatterns: ["node_modules", "cypress"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { configFile: "./jest.babel-config.json" },
    ],
  },
  transformIgnorePatterns: ["/node_modules/(?!(caroucssel)/)"],
  verbose: true,
  testEnvironment: "jsdom",
  restoreMocks: true,
  snapshotResolver: "./jest.snapshotResolver.js",
}
