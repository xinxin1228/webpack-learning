const { merge } = require('webpack-merge')
const commConfig = require('./webpack.comm.config')

module.exports = merge(commConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
})
