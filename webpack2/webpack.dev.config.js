const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, "build"),
    filename: "bundle.[hash:5].js",
    publicPath: '/'
  },
  devServer: {
    // contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, use: ['style-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'postcss-loader', 'less-loader'] },
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
    new HtmlWebpackPlugin({
      template: 'templete/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:3000'
    })
  ]
}
