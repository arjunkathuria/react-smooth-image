var webpack = require("webpack");
var path = require("path");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var GLOBALS = {
  "process.env": { NODE_ENV: JSON.stringify("production") }
};

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.js")
  },
  devtool: "source-map",
  target: "web",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.join(__dirname, "src")],
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new UglifyJSPlugin()
  ]
};
