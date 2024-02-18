const path = require('node:path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new DefinePlugin({
      API_URL: JSON.stringify('https://api.example.com'),
      VERSION: JSON.stringify('1.0.0'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  devServer: {
    port: 8080,
    hot: true,
  },
}
