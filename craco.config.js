const path = require("path"); // 'path' 모듈을 가져옴
const { CracoAliasPlugin } = require("react-app-rewire-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        baseUrl: "./",
        alias: {
          "@component": path.resolve(__dirname, "./src/component"),
          "@page": path.resolve(__dirname, "./src/page"),
          "@type": path.resolve(__dirname, "./src/type"),
          "@utils": path.resolve(__dirname, "./src/utils"),
        },
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
};
