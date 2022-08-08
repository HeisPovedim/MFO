const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const production = process.env.NODE_ENV ==='production'

module.exports = {
  entry: { myAppName: path.resolve(__dirname, "./src/index.js") },
  output: { 
    path: path.resolve(__dirname, "./dist"),
    filename: production ? '[name].[contenthash].js' : '[name].js', 
  },
  module: {
    rules: [
      { // sass / scss loader for webpack
        test: /\.(sass|scss|svg|png|jpe?g)$/, //Make sure to allow all necessary file types here
        use: ExtractTextPlugin.extract({
          use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  minimize: true,
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "resolve-url-loader", //resolve-url-loader needs to come *BEFORE* sass-loader
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
          ]
        })
      },
      {
        test: /\.js|jsx|.css$/,
        use: ["style-loader", "css-loader", "babel-loader"],
        exclude: /node_modules/,
        // loader: "style-loader!css-loader"
      }
    ]
  }
}