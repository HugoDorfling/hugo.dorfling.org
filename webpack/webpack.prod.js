const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      // Define ENV variables
      "process.env.name": JSON.stringify("Hugo Dorfling"),
    }),
  ],
};
