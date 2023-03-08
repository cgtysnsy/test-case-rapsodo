module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.jsx?$": "babel-jest", // add this to transform JS files using Babel
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.m?js$": "babel-jest",
    ".js": "jest-esm-transformer",
  },
  // setupFilesAfterEnv: ["<rootDir>tests/setup.ts"],

  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,ts,vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],

  transformIgnorePatterns: [
    "/node_modules/",
    "/node_modules/(?!(vuetify)/)",
    "/node_modules/(?!vuetify)",
    "/node_modules/(?!vuex)",
    "/node_modules/(?!vuetify/lib-to-transform|vuetify/es5/components/index.js')",

    "/node_modules/(?!vuetify).+\\.js$",
    "node_modules/(?!vue-router|@babel|vuetify)",
  ],
  moduleNameMapper: {
    "^vuetify/lib$": "vuetify/es5/entry-lib",
    "^vuetify/lib/(.*)": "vuetify/es5/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^vuetify/lib(.*)": "<rootDir>/node_modules/vuetify/es5$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testMatch: [
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  coverageReporters: ["html", "text-summary"],
  moduleFileExtensions: ["js", "jsx", "json", "vue", "mjs"],
};
