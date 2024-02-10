const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './src/index.js'),
    filename: 'bundle.js',
    // 指定打包的产物信息
    // library: {
    //   name: '_', // 浏览器下，使用_作为全局变量访问
    //   type: 'umd', // 采用umd方式打包
    // },

    // 上面的写法也可以改写成下面的写法
    library: '_',
    libraryTarget: 'umd',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    port: 8080,
  },
}
