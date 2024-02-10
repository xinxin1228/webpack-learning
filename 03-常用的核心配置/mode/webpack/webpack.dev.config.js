const { merge } = require("webpack-merge")
const commConfig = require("./webpack.comm.config")

/**
 * @type {import('webpack').Configuration}
 */
module.exports = merge(commConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    open: true,
  },
  devtool: 'source-map',
})
