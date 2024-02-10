const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = function (env, args) {
  return {
    mode: env.dev ? 'development' : 'production',
    entry: './src/index.js',
    devtool: env.dev ? 'source-map' : 'nosources-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    devServer: {
      port: 8080,
    },
  }
}
