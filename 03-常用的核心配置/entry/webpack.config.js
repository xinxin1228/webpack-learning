const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  // entry: './src/a.js', // 字符串的方式

  // 多入口的写法 对象写法
  // entry: {
  //   a: './src/a.js',
  //   b: {
  //     import: './src/b.js',
  //     filename: 'bbb.js',
  //   },
  // },

  // 多入口写法 数组写法
  // entry: ['./src/a.js', './src/b.js'],

  entry: {
    a: {
      import: './src/a.js',
      filename: 'js/a.js',
    },
    b: {
      import: './src/b.js',
      filename: 'js/b.js',
    },
  },

  // 函数
  // entry() {
  //   // 返回字符串
  //   // return './src/a.js',
  //   // 返回数组
  //   // return ['./src/a.js', './src/b.js']
  //   // 返回对象
  //   return {
  //     a: './src/a.js',
  //     b: './src/b.js',
  //   }
  // },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  devServer: {
    port: 8080,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
}
