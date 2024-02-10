const path = require('node:path')
const { merge } = require('webpack-merge')
const commConfig = require('./webpack.comm.config')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = merge(commConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  devtool: 'nosources-source-map',
})
