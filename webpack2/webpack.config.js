const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.[hash:5].js",
    publicPath: 'build/'
  },
  // watch: true,
  // devtool: "source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "postcss-loader"
        })
      },
      { test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["postcss-loader", 'less-loader']
        })
      },
      { test: /\.(jpe?g|png)$/, use: 'file-loader' },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':  '"production"'
    }),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: 'templete/index.html',
      filename: path.resolve(__dirname,'index.html'),
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}
