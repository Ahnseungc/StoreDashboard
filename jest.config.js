const path = require("path");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@component/(.*)$": "<rootDir>/src/component/$1",
    "^@page/(.*)$": "<rootDir>/src/page/$1",
    "^@type/(.*)$": "<rootDir>/src/type/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};
