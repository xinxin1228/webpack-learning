const path = require('node:path')
const { merge } = require('webpack-merge')
const webpackCommConfig = require('./webpack.comm.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = merge(webpackCommConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: 'nosources-source-map',
})
