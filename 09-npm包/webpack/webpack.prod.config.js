const { merge } = require('webpack-merge')
const commConfig = require('./webpack.comm.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(commConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: 'source-map',
})
