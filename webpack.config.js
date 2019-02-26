var webpack = require("webpack");
var path = require("path");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var GLOBALS = {
  "process.env": { NODE_ENV: JSON.stringify("production") }
};

module.exports = {
  entry: {
    "react-smooth-image": path.resolve(__dirname, "src/index.js")
  },
  devtool: "source-map",
  target: "node",
  mode: "production",
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
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
    filename: "[name].js",
    library: "ReactSmoothImage",
    libraryTarget: "commonjs2",
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new UglifyJSPlugin()
  ]
};
