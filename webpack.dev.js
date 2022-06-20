/* eslint-disable no-undef */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const DotEnv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    static: "./dist",
    historyApiFallback: true,
    // Dev server client for web socket transport, hot and live reload logic
    hot: true,
  },
  plugins: [new DotEnv({ path: "./.env.development" })],
});
