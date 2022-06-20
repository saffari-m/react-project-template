/* eslint-disable no-undef */
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  entry: {
    app: "./src/index.js",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@context": path.resolve(__dirname, "src/context"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@enums": path.resolve(__dirname, "src/enums"),
      "@actions": path.resolve(__dirname, "src/actions"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routers": path.resolve(__dirname, "src/routers"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_[contenthash:8].bundle.js",
    chunkFilename: "[id]_[contenthash:8].js",
    clean: true,
  },
};
