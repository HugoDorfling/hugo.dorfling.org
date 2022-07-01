const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); // Only hot reloads what changed, preserve state of components unchanged.

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      // Define ENV variables
      "process.env.name": JSON.stringify("Hugo"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
