var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({
    title: 'File Tree',
  })]
};