const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base.config");

const ElectronReloadPlugin = require("webpack-electron-reload")({
  path: path.join(__dirname, "..", "app", "background.js"),
});
module.exports = (env) => {
  return merge(base(env), {
    target: "electron-main",
    entry: {
      background: "./src/background.js",
      app: "./src/views/app.js",
      collapsed: "./src/views/collapsed.js",
      expanded: "./src/views/expanded.js",
      settings: "./src/views/settings.js",
      tools: "./src/views/tools.js"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../app"),
    },
    plugins: [ElectronReloadPlugin()],
  });
};
