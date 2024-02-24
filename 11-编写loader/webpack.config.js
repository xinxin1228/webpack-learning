const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, './loader/index.js'),
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
}
